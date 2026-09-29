import { renderDashboard } from "./render/dashboard.js";
import { renderSection } from "./render/section.js";
import { renderTopic } from "./render/topic.js";
import { renderPractice } from "./render/practice.js";
import { renderAbout } from "./render/about.js";

const view = document.getElementById("view");

function parseHash() {
  const hash = location.hash.replace(/^#\/?/, "");
  return hash.split("/").filter(Boolean);
}

function setActiveNav(navKey) {
  document.querySelectorAll(".topnav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === navKey);
  });
}

function route() {
  const parts = parseHash();
  const [page, ...rest] = parts;

  window.scrollTo({ top: 0 });

  if (!page || page === "dashboard") {
    setActiveNav("dashboard");
    renderDashboard(view);
    return;
  }

  if (page === "section" && rest[0]) {
    setActiveNav(rest[0]);
    renderSection(view, rest[0]);
    return;
  }

  if (page === "topic" && rest[0]) {
    setActiveNav("");
    const tab = rest[1] || "lesson";
    renderTopic(view, rest[0], tab);
    return;
  }

  if (page === "practice") {
    setActiveNav("practice");
    renderPractice(view);
    return;
  }

  if (page === "about") {
    setActiveNav("");
    renderAbout(view);
    return;
  }

  setActiveNav("dashboard");
  renderDashboard(view);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);

if (document.readyState !== "loading") {
  route();
}
