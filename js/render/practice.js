import { getAllTopicsFlat, getSection } from "../data/index.js";
import { buildSmartPracticeSet, recordAttempt } from "../progress.js";
import { escapeHtml } from "./components.js";

const PRACTICE_SET_SIZE = 10;

export function renderPractice(container) {
  const allTopics = getAllTopicsFlat();
  const picks = buildSmartPracticeSet(allTopics, PRACTICE_SET_SIZE);

  if (picks.length === 0) {
    container.innerHTML = `<div class="empty-state">No questions available yet.</div>`;
    return;
  }

  const session = { answered: 0, correct: 0, total: picks.length };

  const letters = ["A", "B", "C", "D", "E"];
  const blocksHtml = picks
    .map((pick, idx) => {
      const q = pick.question;
      const choicesHtml = q.choices
        .map(
          (choice, i) => `
            <button class="choice-btn" data-index="${i}">
              <span class="choice-letter">${letters[i]}.</span>
              <span>${escapeHtml(choice)}</span>
            </button>
          `
        )
        .join("");
      const section = getSection(pick.sectionId);
      return `
        <div class="question-block" data-qid="${q.id}" data-topic-id="${pick.topicId}" data-correct-index="${q.correctIndex}" data-answered="false">
          <span class="section-pill">${section ? section.title : pick.sectionId}</span>
          ${q.passage ? `<div class="passage-box">${escapeHtml(q.passage)}</div>` : ""}
          <div class="question-stem">${idx + 1}. ${escapeHtml(q.stem)}</div>
          <div class="choice-list">${choicesHtml}</div>
          <div class="explanation">${escapeHtml(q.explanation)}</div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    <h1>Smart Practice</h1>
    <p>
      A mixed, ${picks.length}-question set pulled from across all sections, weighted toward the topics
      where you're currently struggling or haven't started yet. Keep practicing and this set adapts
      as your accuracy changes.
    </p>
    <div id="quiz-questions">${blocksHtml}</div>
    <div class="card quiz-summary" id="quiz-summary" style="display:none;">
      <div class="stat-label">Session complete</div>
      <div class="stat-number" id="quiz-score">0/0</div>
      <p id="quiz-score-detail"></p>
      <div class="btn-row" style="justify-content:center;">
        <a href="#/practice" class="btn" id="new-set-btn">New Smart Practice Set</a>
        <a href="#/dashboard" class="btn btn-secondary">Back to Dashboard</a>
      </div>
    </div>
  `;

  container.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const block = btn.closest(".question-block");
      if (block.dataset.answered === "true") return;
      block.dataset.answered = "true";

      const qid = block.dataset.qid;
      const topicId = block.dataset.topicId;
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

      recordAttempt(topicId, qid, isCorrect);
      session.answered += 1;
      if (isCorrect) session.correct += 1;

      if (session.answered === session.total) {
        const summary = container.querySelector("#quiz-summary");
        summary.style.display = "block";
        container.querySelector("#quiz-score").textContent = `${session.correct}/${session.total}`;
        container.querySelector("#quiz-score-detail").textContent = `${Math.round(
          (session.correct / session.total) * 100
        )}% correct. Your dashboard recommendations have been updated.`;
        summary.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  const newSetBtn = container.querySelector("#new-set-btn");
  if (newSetBtn) {
    newSetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderPractice(container);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
