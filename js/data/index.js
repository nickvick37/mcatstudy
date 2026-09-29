import * as bioBiochem from "./bioBiochem.js";
import * as chemPhysics from "./chemPhysics.js";
import * as psychSoc from "./psychSoc.js";
import * as cars from "./cars.js";

const modules = [bioBiochem, chemPhysics, psychSoc, cars];

export const sections = modules.map((m) => ({
  id: m.sectionId,
  title: m.sectionTitle,
  blurb: m.sectionBlurb,
  topics: m.topics.map((t) => ({ ...t, sectionId: m.sectionId })),
}));

export function getSection(sectionId) {
  return sections.find((s) => s.id === sectionId) || null;
}

export function getTopic(topicId) {
  for (const section of sections) {
    const topic = section.topics.find((t) => t.id === topicId);
    if (topic) return topic;
  }
  return null;
}

export function getAllTopicsFlat() {
  return sections.flatMap((s) => s.topics);
}

export function getQuestionById(questionId) {
  for (const topic of getAllTopicsFlat()) {
    const q = topic.questions.find((q) => q.id === questionId);
    if (q) return { question: q, topic };
  }
  return null;
}
