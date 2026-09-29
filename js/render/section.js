import { getSection } from "../data/index.js";
import { rankTopicsByPriority, getTopicStats, getMasteryLabel } from "../progress.js";
import { formatPercent, progressBar, masteryBadge } from "./components.js";

export function renderSection(container, sectionId) {
  const section = getSection(sectionId);
  if (!section) {
    container.innerHTML = `<div class="empty-state">Section not found.</div>`;
    return;
  }

  const ranked = rankTopicsByPriority(section.topics);

  const rows = ranked
    .map(({ topic }) => {
      const stats = getTopicStats(topic.id);
      const label = getMasteryLabel(topic.id);
      return `
        <a href="#/topic/${topic.id}" class="topic-row">
          <div class="topic-row-main">
            <div class="topic-row-title">${topic.title}</div>
            <div class="topic-row-blurb">${topic.blurb}</div>
          </div>
          <div class="topic-row-meta">
            <div style="margin-bottom:6px;">${masteryBadge(label)}</div>
            <div style="font-size:0.8rem;color:var(--text-dim);margin-bottom:6px;">
              ${stats.attempts > 0 ? `${formatPercent(stats.accuracy)} · ${stats.attempts} answered` : "Not started"}
            </div>
            ${progressBar(stats.accuracy)}
          </div>
        </a>
      `;
    })
    .join("");

  container.innerHTML = `
    <a href="#/dashboard" style="color:var(--text-dim);text-decoration:none;font-size:0.85rem;">&larr; Dashboard</a>
    <h1>${section.title}</h1>
    <p>${section.blurb}</p>
    <p style="font-size:0.85rem;">Topics are ordered by priority - the ones you most need to review appear first.</p>
    <div style="margin-top:16px;">${rows}</div>
  `;
}
