import { sections, getAllTopicsFlat } from "../data/index.js";
import { getOverallStats, rankTopicsByPriority, getTopicStats, getMasteryLabel } from "../progress.js";
import { formatPercent, progressBar, masteryBadge } from "./components.js";

export function renderDashboard(container) {
  const allTopics = getAllTopicsFlat();
  const overall = getOverallStats(allTopics);
  const ranked = rankTopicsByPriority(allTopics);

  const recommended = ranked
    .filter(({ topic }) => {
      const stats = getTopicStats(topic.id);
      return !(stats.attempts >= 5 && stats.accuracy >= 0.85);
    })
    .slice(0, 5);

  const sectionCards = sections
    .map((section) => {
      const stats = getOverallStats(section.topics);
      return `
        <a href="#/section/${section.id}" class="topic-row">
          <div class="topic-row-main">
            <div class="topic-row-title">${section.title}</div>
            <div class="topic-row-blurb">${section.blurb}</div>
          </div>
          <div class="topic-row-meta">
            <div style="margin-bottom:6px;font-size:0.85rem;color:var(--text-dim);">
              ${stats.started}/${stats.total} topics started
            </div>
            ${progressBar(stats.accuracy)}
          </div>
        </a>
      `;
    })
    .join("");

  const recommendedHtml = recommended.length
    ? recommended
        .map(({ topic, score }) => {
          const stats = getTopicStats(topic.id);
          const label = getMasteryLabel(topic.id);
          const reason =
            stats.attempts === 0
              ? "Not started yet"
              : `${formatPercent(stats.accuracy)} accuracy over ${stats.attempts} question${stats.attempts === 1 ? "" : "s"}`;
          return `
            <a href="#/topic/${topic.id}" class="topic-row">
              <div class="topic-row-main">
                <span class="section-pill">${sectionTitleFor(topic.sectionId)}</span>
                <div class="topic-row-title">${topic.title}</div>
                <div class="topic-row-blurb">${reason}</div>
              </div>
              <div class="topic-row-meta">
                ${masteryBadge(label)}
              </div>
            </a>
          `;
        })
        .join("")
    : `<div class="empty-state">Great work - no urgent weak spots right now. Try Smart Practice to keep sharp.</div>`;

  container.innerHTML = `
    <h1>Your Dashboard</h1>
    <p>Study is prioritized automatically based on where you're missing questions.</p>

    <div class="grid grid-4" style="margin: 20px 0;">
      <div class="card card-tight stat-block">
        <div class="stat-number">${overall.attempts}</div>
        <div class="stat-label">Questions answered</div>
      </div>
      <div class="card card-tight stat-block">
        <div class="stat-number">${formatPercent(overall.accuracy)}</div>
        <div class="stat-label">Overall accuracy</div>
      </div>
      <div class="card card-tight stat-block">
        <div class="stat-number">${overall.started}/${overall.total}</div>
        <div class="stat-label">Topics started</div>
      </div>
      <div class="card card-tight stat-block">
        <div class="stat-number">${sections.length}</div>
        <div class="stat-label">MCAT sections</div>
      </div>
    </div>

    <div class="card">
      <h2>Recommended for you</h2>
      <p>Ranked by our adaptive priority score - weak and unattempted topics rise to the top.</p>
      <div class="recommend-list">${recommendedHtml}</div>
      <div class="btn-row">
        <a href="#/practice" class="btn">Start Smart Practice</a>
      </div>
    </div>

    <h2>Sections</h2>
    <div>${sectionCards}</div>
  `;
}

function sectionTitleFor(sectionId) {
  const s = sections.find((sec) => sec.id === sectionId);
  return s ? s.title : sectionId;
}
