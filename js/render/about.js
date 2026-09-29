import { resetAllProgress } from "../progress.js";

export function renderAbout(container) {
  container.innerHTML = `
    <h1>About &amp; Sources</h1>
    <div class="card">
      <h2>What this is</h2>
      <p>
        An interactive study program covering the four sections of the MCAT: Biological &amp; Biochemical
        Foundations of Living Systems, Chemical &amp; Physical Foundations of Biological Systems,
        Psychological, Social &amp; Biological Foundations of Behavior, and Critical Analysis &amp;
        Reasoning Skills (CARS). Each topic pairs a short lesson with a practice quiz, and a priority
        engine tracks your quiz accuracy per topic to recommend what to study next.
      </p>
    </div>
    <div class="card">
      <h2>Content &amp; sources</h2>
      <p>
        Topics and their scope follow the publicly available AAMC MCAT content outline. Lesson text and
        practice questions in this app are <strong>original writing</strong> created for this project -
        they summarize concepts commonly covered in free, open educational resources such as OpenStax
        textbooks (Biology, Chemistry, Physics, Psychology - openly licensed under CC BY) and Khan
        Academy's free MCAT collection, but no text was copied from those sources. None of the questions
        here are real, retired, or practice questions from the AAMC.
      </p>
      <p>
        This app is an independent study aid and is not affiliated with or endorsed by the AAMC, Khan
        Academy, or OpenStax.
      </p>
    </div>
    <div class="card">
      <h2>How the priority engine works</h2>
      <p>
        Every time you answer a question, your accuracy for that topic updates. Topics you haven't
        tried yet get a moderate priority so new material surfaces naturally. Topics with a handful of
        attempts are given more weight as evidence builds, and topics with a strong track record
        (85%+ accuracy over 5+ questions) drop out of the recommendations so you can focus elsewhere.
        Smart Practice uses the same scores to build a weighted, mixed-section quiz automatically.
      </p>
    </div>
    <div class="card">
      <h2>Your data</h2>
      <p>All progress is stored locally in your browser (localStorage) - nothing is sent to a server.</p>
      <div class="btn-row">
        <button class="btn btn-secondary" id="reset-progress-btn">Reset all progress</button>
      </div>
    </div>
  `;

  container.querySelector("#reset-progress-btn").addEventListener("click", () => {
    if (confirm("This will erase all saved quiz progress on this device. Continue?")) {
      resetAllProgress();
      location.hash = "#/dashboard";
      location.reload();
    }
  });
}
