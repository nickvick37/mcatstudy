import { getTopic, getSection } from "../data/index.js";
import { markLessonViewed, recordAttempt, getTopicStats } from "../progress.js";
import { escapeHtml, formatPercent } from "./components.js";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function renderTopic(container, topicId, tab = "lesson") {
  const topic = getTopic(topicId);
  if (!topic) {
    container.innerHTML = `<div class="empty-state">Topic not found.</div>`;
    return;
  }
  const section = getSection(topic.sectionId);

  container.innerHTML = `
    <a href="#/section/${topic.sectionId}" style="color:var(--text-dim);text-decoration:none;font-size:0.85rem;">&larr; ${section ? section.title : "Back"}</a>
    <h1>${escapeHtml(topic.title)}</h1>
    <p>${escapeHtml(topic.blurb)}</p>
    <div class="tabs">
      <button class="tab-btn" data-tab="lesson">Lesson</button>
      <button class="tab-btn" data-tab="quiz">Quiz (${topic.questions.length})</button>
      <button class="tab-btn" data-tab="review">Review Missed</button>
    </div>
    <div id="topic-tab-content"></div>
  `;

  const tabButtons = container.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    if (btn.dataset.tab === tab) btn.classList.add("active");
    btn.addEventListener("click", () => {
      location.hash = `#/topic/${topicId}/${btn.dataset.tab}`;
    });
  });

  const content = container.querySelector("#topic-tab-content");
  if (tab === "quiz") {
    renderQuiz(content, topic, { mode: "all" });
  } else if (tab === "review") {
    renderQuiz(content, topic, { mode: "missed" });
  } else {
    renderLesson(content, topic);
  }
}

function renderLesson(container, topic) {
  markLessonViewed(topic.id);
  const stats = getTopicStats(topic.id);

  const paragraphs = topic.lesson.paragraphs
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  const keyConcepts = topic.lesson.keyConcepts
    .map((k) => `<li>${escapeHtml(k)}</li>`)
    .join("");

  container.innerHTML = `
    <div class="card lesson-body">
      ${paragraphs}
      <div class="key-concepts">
        <h3>Key concepts</h3>
        <ul>${keyConcepts}</ul>
      </div>
      ${
        stats.attempts > 0
          ? `<p style="font-size:0.85rem;">Your current accuracy on this topic: <strong>${formatPercent(stats.accuracy)}</strong> (${stats.attempts} answered)</p>`
          : ""
      }
      <div class="btn-row">
        <a href="#/topic/${topic.id}/quiz" class="btn">Take the quiz</a>
      </div>
    </div>
  `;
}

function renderQuiz(container, topic, { mode }) {
  const stats = getTopicStats(topic.id);
  let questions = topic.questions;
  if (mode === "missed") {
    questions = topic.questions.filter((q) => stats.missedQuestionIds.includes(q.id));
    if (questions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          No missed questions to review on this topic yet${stats.attempts === 0 ? " - take the quiz first!" : ". Nice work!"}
        </div>
        <div class="btn-row" style="justify-content:center;">
          <a href="#/topic/${topic.id}/quiz" class="btn">Go to full quiz</a>
        </div>
      `;
      return;
    }
  }

  questions = shuffle(questions);
  const session = { answered: 0, correct: 0, total: questions.length };

  const blocksHtml = questions
    .map((q, idx) => renderQuestionBlock(q, idx, topic.id))
    .join("");

  container.innerHTML = `
    <div id="quiz-questions">${blocksHtml}</div>
    <div class="card quiz-summary" id="quiz-summary" style="display:none;">
      <div class="stat-label">Quiz complete</div>
      <div class="stat-number" id="quiz-score">0/0</div>
      <p id="quiz-score-detail"></p>
      <div class="btn-row" style="justify-content:center;">
        <a href="#/topic/${topic.id}/quiz" class="btn">Retake Quiz</a>
        <a href="#/section/${topic.sectionId}" class="btn btn-secondary">Back to Section</a>
        <a href="#/practice" class="btn btn-secondary">Smart Practice</a>
      </div>
    </div>
  `;

  container.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const block = btn.closest(".question-block");
      if (block.dataset.answered === "true") return;
      block.dataset.answered = "true";

      const qid = block.dataset.qid;
      const correctIndex = parseInt(block.dataset.correctIndex, 10);
      const chosenIndex = parseInt(btn.dataset.index, 10);
      const isCorrect = chosenIndex === correctIndex;

      block.querySelectorAll(".choice-btn").forEach((b) => {
        b.disabled = true;
        const bIdx = parseInt(b.dataset.index, 10);
        if (bIdx === correctIndex) b.classList.add("correct");
        else if (bIdx === chosenIndex) b.classList.add("incorrect");
      });

      block.querySelector(".explanation").classList.add("visible");

      recordAttempt(topic.id, qid, isCorrect);
      session.answered += 1;
      if (isCorrect) session.correct += 1;

      if (session.answered === session.total) {
        const summary = container.querySelector("#quiz-summary");
        summary.style.display = "block";
        container.querySelector("#quiz-score").textContent = `${session.correct}/${session.total}`;
        container.querySelector("#quiz-score-detail").textContent = `${Math.round(
          (session.correct / session.total) * 100
        )}% correct this round. Your progress has been saved.`;
        summary.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}

function renderQuestionBlock(question, idx, topicId) {
  const letters = ["A", "B", "C", "D", "E"];
  const choicesHtml = question.choices
    .map(
      (choice, i) => `
        <button class="choice-btn" data-index="${i}">
          <span class="choice-letter">${letters[i]}.</span>
          <span>${escapeHtml(choice)}</span>
        </button>
      `
    )
    .join("");

  return `
    <div class="question-block" data-qid="${question.id}" data-correct-index="${question.correctIndex}" data-answered="false">
      ${question.passage ? `<div class="passage-box">${escapeHtml(question.passage)}</div>` : ""}
      <div class="question-stem">${idx + 1}. ${escapeHtml(question.stem)}</div>
      <div class="choice-list">${choicesHtml}</div>
      <div class="explanation">${escapeHtml(question.explanation)}</div>
    </div>
  `;
}
