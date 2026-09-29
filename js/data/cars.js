export const sectionId = "cars";
export const sectionTitle = "Critical Analysis & Reasoning Skills (CARS)";
export const sectionBlurb =
  "Reading comprehension strategy: main idea, tone, argument structure, and applying passage logic to new situations.";

export const topics = [
  {
    id: "main-idea",
    title: "Finding Main Idea & Author's Purpose",
    blurb: "Distinguishing the central thesis from supporting details.",
    lesson: {
      paragraphs: [
        "CARS passages are drawn from humanities and social sciences, and every passage has a main idea (the overall point the author is making) that is broader than any single supporting detail. A common trap is choosing an answer that restates a true detail from the passage but does not capture the passage's central argument - the correct 'main idea' answer must be broad enough to encompass the whole passage, not just one paragraph.",
        "Authors write for a purpose beyond simply conveying information: to persuade, to criticize, to reconcile opposing views, to question an assumption, or to reframe a debate. Identifying the author's purpose often requires looking at how the passage is structured - does it build toward a conclusion, present and then refute a counterargument, or compare two perspectives without fully endorsing either?",
        "A reliable strategy is to summarize each paragraph in a single phrase as you read, then ask: what single sentence would tie all of these paragraph summaries together? That sentence is close to the main idea. Avoid extreme language (words like 'always,' 'never,' 'only') in main idea answers unless the passage itself uses similarly strong language - CARS answers that overstate the author's claim are common wrong-answer traps.",
      ],
      keyConcepts: [
        "Main idea must cover the whole passage, not just one paragraph or detail.",
        "Author's purpose goes beyond 'informing' - look for persuasion, critique, or reconciliation of views.",
        "Summarize each paragraph in one phrase, then synthesize into an overall main idea.",
        "Be wary of extreme-language answer choices that overstate the passage's actual claims.",
      ],
    },
    questions: [
      {
        id: "mi-q1",
        passage:
          "Historians once treated the invention of the printing press as a single decisive moment that instantly transformed European society, ushering in mass literacy and the Reformation almost overnight. More recent scholarship complicates this picture: printed books remained expensive and scarce for decades after Gutenberg, literacy rates rose gradually rather than suddenly, and oral transmission of ideas continued to dominate everyday life well into the sixteenth century. The press mattered enormously, but its effects unfolded over generations, mediated by economics, education, and existing social networks, not as an abrupt rupture with the past.",
        stem: "Which of the following best captures the author's main point?",
        choices: [
          "The printing press had no meaningful effect on European society.",
          "The printing press's transformative effects were real but unfolded gradually, shaped by social and economic factors, rather than occurring as a sudden break from the past.",
          "Oral transmission of ideas was more important than printed books throughout the sixteenth century.",
          "Historians agree unanimously that the printing press caused the Reformation overnight.",
        ],
        correctIndex: 1,
        explanation:
          "The passage revises an oversimplified view (instant transformation) toward a more nuanced one (real but gradual, mediated effects) - option B captures this overall arc, while A and D contradict the passage, and C overstates one supporting detail as if it were the main point.",
      },
      {
        id: "mi-q2",
        passage:
          "A common assumption holds that scientific progress proceeds by the steady accumulation of facts, each new discovery simply added to the last like bricks in a wall. Yet the history of science shows repeated episodes in which entire frameworks were discarded, not refined - the shift from Newtonian to relativistic physics did not just add detail to Newton's laws, it redefined the basic concepts of space, time, and mass. Such episodes suggest that scientific knowledge advances not only by accumulation but also, periodically, by wholesale reconceptualization.",
        stem: "The author's primary purpose in this passage is to:",
        choices: [
          "Prove that Newtonian physics was entirely wrong.",
          "Argue against the common view that science progresses only through steady accumulation of facts.",
          "Explain the technical details of the shift from Newtonian to relativistic physics.",
          "Criticize scientists for being resistant to gradual change.",
        ],
        correctIndex: 1,
        explanation:
          "The passage opens by stating a common assumption and then uses a historical example to challenge it, arguing science advances through both accumulation and occasional radical reconceptualization - this is a critique of an oversimplified view, not a technical explanation or an attack on scientists.",
      },
      {
        id: "mi-q3",
        passage:
          "Urban planners have long debated whether dense, mixed-use neighborhoods or spacious, single-use suburbs better serve residents' well-being. Proponents of density point to reduced commute times and stronger community ties; proponents of suburban layouts cite more green space and privacy. Rather than declaring one model universally superior, recent research suggests that the ideal balance depends heavily on local context - climate, existing infrastructure, and cultural preferences all shape which arrangement actually improves quality of life in a given place.",
        stem: "Which statement best reflects the main idea of this passage?",
        choices: [
          "Dense, mixed-use neighborhoods are objectively better for well-being than suburbs.",
          "Suburban layouts are preferred by most urban planners today.",
          "Neither density nor suburban layout is universally superior; the best arrangement depends on local context.",
          "Commute times are the single most important factor in neighborhood design.",
        ],
        correctIndex: 2,
        explanation:
          "The passage explicitly rejects a one-size-fits-all conclusion in favor of context-dependence, which is the broad, encompassing claim - the other options each seize on one detail or misrepresent the passage's balanced framing.",
      },
    ],
  },
  {
    id: "arguments",
    title: "Analyzing Arguments & Assumptions",
    blurb: "Identifying premises, conclusions, unstated assumptions, and logical flaws.",
    lesson: {
      paragraphs: [
        "An argument consists of one or more premises (supporting claims) offered in support of a conclusion (the main claim being argued for). On the MCAT, you must be able to identify which sentence in a passage is functioning as the conclusion versus which are premises, even when the conclusion is not the first or last sentence.",
        "Every argument also rests on unstated assumptions - claims that are not explicitly stated but must be true for the argument's premises to actually support its conclusion. Assumption questions ask you to identify a gap between premise and conclusion, often by imagining what would have to be true (or what the argument implicitly denies) to make the logical leap work.",
        "Common flawed reasoning patterns include: correlation-causation errors (assuming one thing caused another just because they occurred together), false dichotomies (presenting only two options when more exist), circular reasoning (using the conclusion as a premise), and overgeneralization (drawing a broad conclusion from limited or unrepresentative evidence). Recognizing these patterns helps you evaluate whether a passage's argument is well-supported or vulnerable to criticism.",
      ],
      keyConcepts: [
        "Premises support the conclusion; identify which sentence is actually the conclusion being argued for.",
        "Unstated assumptions bridge the gap between premises and conclusion - ask what must be true for the argument to work.",
        "Correlation-causation error: co-occurrence does not prove one thing caused the other.",
        "False dichotomy: presenting only two options when others exist.",
        "Overgeneralization: drawing a broad conclusion from limited, unrepresentative evidence.",
      ],
    },
    questions: [
      {
        id: "arg-q1",
        passage:
          "A study found that employees who took regular short breaks throughout the workday reported higher job satisfaction than those who did not. The company's management concluded that mandating short breaks for all employees would increase overall job satisfaction across the organization.",
        stem: "Which unstated assumption is management's conclusion most dependent on?",
        choices: [
          "All employees dislike their jobs.",
          "The relationship between taking breaks and job satisfaction is causal, not merely correlational, and would generalize if breaks were mandated.",
          "Job satisfaction is the most important measure of company performance.",
          "Employees who took breaks worked in the same department as those who did not.",
        ],
        correctIndex: 1,
        explanation:
          "The study only shows a correlation between break-taking (likely self-selected) and satisfaction. To conclude that mandating breaks would cause increased satisfaction, management must assume the relationship is causal and would hold even when breaks are imposed rather than freely chosen.",
      },
      {
        id: "arg-q2",
        passage:
          "Either we invest heavily in fully automating our factory, or we will inevitably be driven out of business by competitors within five years. Since full automation requires capital we do not currently have, we must accept that going out of business is our likely fate.",
        stem: "This argument is most vulnerable to criticism on the grounds that it:",
        choices: [
          "Relies on circular reasoning, using its conclusion as a premise.",
          "Presents a false dichotomy, ignoring other possible responses to competition besides full automation or business failure.",
          "Draws a conclusion based on an unrepresentative sample.",
          "Confuses correlation with causation.",
        ],
        correctIndex: 1,
        explanation:
          "The argument assumes only two possible outcomes (full automation or business failure), ignoring other plausible options such as partial automation, cost-cutting, new markets, or strategic partnerships - a classic false dichotomy.",
      },
      {
        id: "arg-q3",
        passage:
          "In a survey of 50 graduates from one elite university's business program, 90% reported high career satisfaction ten years after graduation. The survey's authors concluded that this particular business program produces graduates with unusually high career satisfaction compared to business graduates generally.",
        stem: "What is the primary weakness in the authors' reasoning?",
        choices: [
          "The survey sample of 50 graduates from a single elite program may not be representative of business graduates generally, so the finding may not generalize.",
          "Career satisfaction cannot be measured through surveys.",
          "The authors used circular reasoning.",
          "The survey should have used a smaller sample size.",
        ],
        correctIndex: 0,
        explanation:
          "The conclusion generalizes from a narrow, likely unrepresentative sample (graduates of one elite program) to business graduates as a whole, which is an overgeneralization based on limited evidence.",
      },
    ],
  },
  {
    id: "tone-inference",
    title: "Tone, Perspective & Inference",
    blurb: "Reading between the lines to infer attitude and unstated implications.",
    lesson: {
      paragraphs: [
        "Author tone is conveyed through word choice, sentence structure, and framing, not just explicit statements of opinion. Words with strong positive or negative connotations (e.g., describing a policy as 'shortsighted' versus 'pragmatic') reveal the author's attitude even when the passage seems to present information neutrally. Look for qualifying words ('merely,' 'simply,' 'arguably') that subtly signal skepticism or endorsement.",
        "Inference questions ask you to determine what must be true (or is most strongly supported) based on the passage, even though it is not explicitly stated. A valid inference follows logically from the passage's content and should not require outside knowledge or unsupported speculation - the best inference answer is the one most directly and narrowly supported by the text, not the most interesting or broadly plausible one.",
        "When passages present multiple perspectives (e.g., contrasting two scholars' views), pay attention to how much space and what kind of language the author gives each side - an author who spends a paragraph carefully rebutting one viewpoint while briefly summarizing another is likely more sympathetic to the view they defend at greater length.",
      ],
      keyConcepts: [
        "Tone is conveyed by connotation and word choice, not just explicit statements of opinion.",
        "Qualifying words ('merely,' 'simply,' 'arguably') often signal the author's skepticism or endorsement.",
        "A valid inference follows directly from the text - avoid over-speculating beyond what's supported.",
        "Unequal treatment of competing viewpoints in a passage often reveals the author's sympathies.",
      ],
    },
    questions: [
      {
        id: "ti-q1",
        passage:
          "The committee's report merely restates conclusions that were already obvious to anyone who had read last year's preliminary findings, dressed up in newly commissioned charts and a longer bibliography.",
        stem: "The author's tone toward the committee's report can best be described as:",
        choices: ["Admiring", "Dismissive", "Neutral and purely descriptive", "Enthusiastic"],
        correctIndex: 1,
        explanation:
          "Words like 'merely restates' and 'dressed up' carry negative connotations suggesting the report added little real value, indicating a dismissive tone rather than a neutral or admiring one.",
      },
      {
        id: "ti-q2",
        passage:
          "The city council spent three paragraphs of the meeting minutes carefully addressing and rebutting concerns from residents opposed to the new transit line, while the residents' original objections were summarized in a single sentence.",
        stem: "Based on this passage, which inference is best supported?",
        choices: [
          "The residents' objections were factually incorrect.",
          "The council likely favored the transit line and gave more weight to defending it than to fully representing the opposition.",
          "The transit line project was ultimately canceled.",
          "The residents did not attend the meeting.",
        ],
        correctIndex: 1,
        explanation:
          "The disproportionate space given to rebutting objections versus summarizing them suggests the council's sympathies lay with the transit line - this is a measured inference from the text, unlike the other choices, which go beyond what's supported.",
      },
      {
        id: "ti-q3",
        passage:
          "One might argue that the new regulation simply formalizes practices that responsible companies were already following voluntarily.",
        stem: "The word 'simply' in this sentence most likely signals that the author:",
        choices: [
          "Believes the regulation is complicated and difficult to implement.",
          "Is downplaying the significance or novelty of the regulation.",
          "Strongly opposes all forms of regulation.",
          "Is quoting a government official directly.",
        ],
        correctIndex: 1,
        explanation:
          "Qualifying words like 'simply' typically minimize the significance of what follows - here suggesting the author views the regulation as a modest formalization rather than a major new requirement.",
      },
    ],
  },
  {
    id: "application",
    title: "Applying & Extrapolating Passage Info",
    blurb: "Using passage logic and principles in new, hypothetical scenarios.",
    lesson: {
      paragraphs: [
        "Application questions ask you to take a principle, argument, or relationship established in the passage and apply it to a new scenario not mentioned in the passage. These questions test whether you understood the underlying logic well enough to transfer it, not just whether you can locate a detail.",
        "The key strategy is to first extract the general rule or pattern the passage establishes (e.g., 'the author argues that innovations are adopted faster when they build on existing habits rather than requiring behavior change'), then test each answer choice against that rule to see which new scenario fits it most closely.",
        "Be cautious of answer choices that match surface-level features of the passage's topic (same subject matter) but do not actually reflect the passage's underlying principle or argument. The correct answer applies the passage's logic, even if the specific scenario or subject matter looks quite different from the passage itself.",
      ],
      keyConcepts: [
        "Application questions require transferring a passage's underlying principle to a new, unstated scenario.",
        "First extract the general rule the passage establishes, then test it against each answer choice.",
        "Avoid choices that share surface topic similarity but not the actual underlying logic of the passage.",
      ],
    },
    questions: [
      {
        id: "ap-q1",
        passage:
          "Behavioral economists have found that people are far more likely to adopt a new financial habit, like automatic saving, when it is framed as the default option that requires effort to opt out of, rather than as an active choice they must opt into. The effort required to change the default, however small, is often enough to preserve the status quo.",
        stem: "Based on the principle described, which scenario would most likely result in the highest participation rate?",
        choices: [
          "A retirement plan where employees must fill out a form to begin contributing.",
          "A retirement plan where employees are automatically enrolled unless they submit a form to opt out.",
          "A retirement plan advertised heavily through email campaigns encouraging employees to sign up.",
          "A retirement plan that offers a small one-time cash bonus for enrolling.",
        ],
        correctIndex: 1,
        explanation:
          "The passage's principle is that default/opt-out framing increases adoption because changing the default requires effort. Automatic enrollment with an opt-out option directly applies this principle, unlike the other options, which all require an active opt-in step.",
      },
      {
        id: "ap-q2",
        passage:
          "Ecologists have observed that invasive species establish most successfully in ecosystems that have already been disturbed by human activity, such as land cleared for agriculture, because disturbance removes established competitors and creates open niches.",
        stem: "Which of the following scenarios best illustrates the principle described in the passage?",
        choices: [
          "A native plant species thrives in an undisturbed old-growth forest.",
          "An invasive insect population rapidly expands in a forest recently cleared by logging.",
          "A native fish population declines due to overfishing in an undisturbed lake.",
          "An invasive plant fails to establish in a pristine, undisturbed wetland.",
        ],
        correctIndex: 1,
        explanation:
          "The passage's principle links human disturbance (like logging) to successful invasive species establishment by opening ecological niches - the logged forest scenario directly mirrors this mechanism, while the other options involve undisturbed environments or native species.",
      },
    ],
  },
];
