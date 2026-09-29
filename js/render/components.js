export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatPercent(x) {
  if (x === null || x === undefined) return "--";
  return `${Math.round(x * 100)}%`;
}

export function accuracyBarClass(accuracy) {
  if (accuracy === null) return "";
  if (accuracy >= 0.75) return "";
  if (accuracy >= 0.5) return "warn";
  return "danger";
}

export function masteryBadge(label) {
  const map = {
    "not-started": ["Not started", "badge-not-started"],
    weak: ["Needs work", "badge-weak"],
    ok: ["Developing", "badge-ok"],
    strong: ["Strong", "badge-strong"],
  };
  const [text, cls] = map[label] || map["not-started"];
  return `<span class="badge ${cls}">${text}</span>`;
}

export function progressBar(accuracy) {
  const pct = accuracy === null ? 0 : Math.round(accuracy * 100);
  const cls = accuracyBarClass(accuracy);
  return `
    <div class="progress-bar-track">
      <div class="progress-bar-fill ${cls}" style="width:${pct}%"></div>
    </div>
  `;
}
