# MCAT Study Program

An interactive, browser-based MCAT study app with lessons and question banks covering all four
MCAT sections, plus an adaptive engine that prioritizes what you study next based on your quiz
performance.

## Features

- **Four MCAT sections**, each with 5 topics: Bio/Biochem, Chem/Physics, Psych/Soc, and CARS.
- **Lesson + quiz per topic**: read a short lesson, then take a 5-question quiz with instant
  feedback and explanations.
- **Adaptive prioritization**: a priority score per topic (based on attempts and accuracy) drives
  the "Recommended for you" list on the dashboard and the topic ordering within each section.
  Weak or untouched topics surface first; topics you've mastered (85%+ accuracy over 5+ questions)
  drop out of the recommendations.
- **Smart Practice**: a mixed, cross-section quiz that samples questions weighted toward your
  current weak spots, so practice automatically adapts as your performance changes.
- **Review Missed**: revisit only the questions you've gotten wrong on a given topic.
- **Local-only progress**: all progress is stored in your browser's `localStorage`. No account,
  no server, no data leaves your device.

## Running it

This is a static site with no build step. From this directory, run any local static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`. (Opening `index.html` directly via `file://` may be
blocked by some browsers' ES module security rules, so a local server is recommended.)

## Project structure

```
index.html            Shell page + nav
css/style.css          Styling
js/app.js              Hash-based router
js/progress.js         Adaptive priority engine (localStorage-backed)
js/data/               Lesson + question content, one file per section
js/render/             View rendering for dashboard, section, topic, practice, about
```

## Content & sources

Topics and their scope follow the publicly available AAMC MCAT content outline. **All lesson text
and practice questions in this app are original writing** created for this project - they
summarize concepts commonly covered in free, open educational resources such as OpenStax
textbooks (Biology, Chemistry, Physics, Psychology - openly licensed under CC BY) and Khan
Academy's free MCAT materials, but no text was copied from those sources. None of the questions
are real, retired, or official AAMC practice questions.

This project is an independent study aid and is not affiliated with or endorsed by the AAMC, Khan
Academy, or OpenStax.

## How the adaptive priority score works

For each topic, `js/progress.js` tracks attempts, correct answers, and which specific questions
were missed. A priority score is computed as:

- **Never attempted** -> a fixed moderate priority (0.55), so new material surfaces without
  drowning out topics you're actively struggling with.
- **Fewer than 4 attempts** -> a blend of the observed error rate and a neutral baseline, so one
  unlucky guess doesn't spike a topic to the top.
- **4+ attempts** -> driven directly by error rate (`1 - accuracy`).
- **Mastered** (85%+ accuracy over 5+ attempts) -> score is reduced by 75%, so it drops out of
  recommendations.

This score ranks topics within a section, drives the dashboard's "Recommended for you" list, and
weights question sampling for Smart Practice.

## Extending the content

To add topics or questions, edit the relevant file in `js/data/` (`bioBiochem.js`,
`chemPhysics.js`, `psychSoc.js`, or `cars.js`). Each topic object has a `lesson` (paragraphs +
key concepts) and a `questions` array (stem, choices, `correctIndex`, `explanation`, and an
optional `passage` for CARS-style questions). No other files need to change - the dashboard,
section pages, and Smart Practice all read from this data automatically.
