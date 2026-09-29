const STORAGE_KEY = "mcat-study-progress-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { topics: {} };
    const parsed = JSON.parse(raw);
    if (!parsed.topics) parsed.topics = {};
    return parsed;
  } catch (e) {
    return { topics: {} };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // localStorage unavailable (private mode, quota) - fail silently, session still works in memory
  }
}

let state = loadState();

function getTopic(topicId) {
  if (!state.topics[topicId]) {
    state.topics[topicId] = {
      attempts: 0,
      correct: 0,
      lessonViewed: false,
      lastAttempted: null,
      missedQuestionIds: [],
    };
  }
  return state.topics[topicId];
}

export function markLessonViewed(topicId) {
  const t = getTopic(topicId);
  t.lessonViewed = true;
  saveState(state);
}

export function recordAttempt(topicId, questionId, correct) {
  const t = getTopic(topicId);
  t.attempts += 1;
  if (correct) {
    t.correct += 1;
    t.missedQuestionIds = t.missedQuestionIds.filter((id) => id !== questionId);
  } else {
    if (!t.missedQuestionIds.includes(questionId)) {
      t.missedQuestionIds.push(questionId);
    }
  }
  t.lastAttempted = Date.now();
  saveState(state);
}

export function getTopicStats(topicId) {
  const t = getTopic(topicId);
  const accuracy = t.attempts > 0 ? t.correct / t.attempts : null;
  return { ...t, accuracy };
}

// Priority score: higher = needs more attention.
// - Never attempted: fixed mid-high priority so new material surfaces, but doesn't drown out real weaknesses.
// - Few attempts (<4): blend toward neutral so one unlucky guess doesn't spike priority.
// - Enough attempts: driven directly by error rate.
// Mastered topics (accuracy >= 0.85 with >=5 attempts) get a bonus reduction so they drop out of recommendations.
export function getPriorityScore(topicId) {
  const t = getTopicStats(topicId);
  if (t.attempts === 0) return 0.55;
  const errorRate = 1 - t.accuracy;
  let score;
  if (t.attempts < 4) {
    const confidence = t.attempts / 4;
    score = confidence * errorRate + (1 - confidence) * 0.5;
  } else {
    score = errorRate;
  }
  if (t.attempts >= 5 && t.accuracy >= 0.85) {
    score *= 0.25;
  }
  return score;
}

export function getMasteryLabel(topicId) {
  const t = getTopicStats(topicId);
  if (t.attempts === 0) return "not-started";
  if (t.accuracy >= 0.85 && t.attempts >= 5) return "strong";
  if (t.accuracy >= 0.65) return "ok";
  return "weak";
}

export function getAllTopicIds(allTopics) {
  return allTopics.map((t) => t.id);
}

// Ranks a list of topic objects ({id, sectionId, ...}) by descending priority score.
export function rankTopicsByPriority(topics) {
  return [...topics]
    .map((topic) => ({ topic, score: getPriorityScore(topic.id) }))
    .sort((a, b) => b.score - a.score);
}

export function getOverallStats(allTopics) {
  let attempts = 0;
  let correct = 0;
  let started = 0;
  for (const topic of allTopics) {
    const s = getTopicStats(topic.id);
    attempts += s.attempts;
    correct += s.correct;
    if (s.attempts > 0) started += 1;
  }
  return {
    attempts,
    correct,
    accuracy: attempts > 0 ? correct / attempts : null,
    started,
    total: allTopics.length,
  };
}

// Builds a weighted pool of question refs ({sectionId, topicId, question}) biased toward
// high-priority topics, for the cross-section "Smart Practice" adaptive quiz.
export function buildSmartPracticeSet(allTopicsFlat, desiredCount) {
  const ranked = rankTopicsByPriority(allTopicsFlat);
  const weighted = [];
  for (const { topic, score } of ranked) {
    const weight = Math.max(score, 0.05);
    for (const question of topic.questions) {
      weighted.push({ sectionId: topic.sectionId, topicId: topic.id, question, weight });
    }
  }
  const picked = [];
  const pool = [...weighted];
  while (picked.length < desiredCount && pool.length > 0) {
    const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (; idx < pool.length; idx++) {
      r -= pool[idx].weight;
      if (r <= 0) break;
    }
    const chosenIdx = Math.min(idx, pool.length - 1);
    picked.push(pool[chosenIdx]);
    pool.splice(chosenIdx, 1);
  }
  return picked;
}

export function resetAllProgress() {
  state = { topics: {} };
  saveState(state);
}
