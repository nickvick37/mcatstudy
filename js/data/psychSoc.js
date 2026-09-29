export const sectionId = "psych-soc";
export const sectionTitle = "Psychological, Social & Biological Foundations of Behavior";
export const sectionBlurb =
  "Sensation, cognition, personality, and the social structures that shape health and behavior.";

export const topics = [
  {
    id: "sensation-perception",
    title: "Sensation & Perception",
    blurb: "How sensory receptors detect stimuli and the brain interprets them.",
    lesson: {
      paragraphs: [
        "Sensation is the process by which sensory receptors detect a physical stimulus (light, sound, pressure, chemicals) and convert it into a neural signal, a process called transduction. Perception is the subsequent brain process of organizing and interpreting that sensory information into a meaningful experience. The same sensory input can be perceived differently depending on context, expectation, and attention.",
        "Each sensory modality relies on specialized receptors: photoreceptors (rods for low-light/black-and-white vision, cones for color vision) in the retina; hair cells in the cochlea for hearing; and various mechanoreceptors, thermoreceptors, and nociceptors in the skin for touch, temperature, and pain. Absolute threshold is the minimum stimulus intensity detectable 50% of the time, while the just-noticeable difference (JND) is the smallest detectable change in a stimulus.",
        "Weber's law states that the JND is proportional to the magnitude of the original stimulus - a bigger 'just noticeable' change is required when the original stimulus is already large. Signal detection theory accounts for the fact that detecting a stimulus depends not just on sensory intensity but also on decision-making processes and response bias (e.g., how willing someone is to say 'yes, I detected it').",
        "Top-down processing uses prior knowledge and expectations to interpret sensory information (e.g., filling in a missing letter in a word based on context), while bottom-up processing builds perception from the raw sensory details up. Gestalt principles (e.g., proximity, similarity, closure, figure-ground) describe how the brain organizes visual elements into coherent wholes.",
      ],
      keyConcepts: [
        "Transduction: converting physical stimulus energy into neural signals.",
        "Absolute threshold vs. just-noticeable difference (JND); Weber's law: JND is proportional to stimulus magnitude.",
        "Rods (low light, no color) vs. cones (color, high acuity) in the retina.",
        "Top-down processing (expectation-driven) vs. bottom-up processing (data-driven).",
        "Gestalt principles describe how the brain groups visual elements into a whole.",
      ],
    },
    questions: [
      {
        id: "sp-q1",
        stem: "The process by which a sensory receptor converts a physical stimulus into an electrochemical neural signal is called:",
        choices: ["Perception", "Transduction", "Habituation", "Sensory adaptation"],
        correctIndex: 1,
        explanation:
          "Transduction is specifically the conversion of stimulus energy (light, sound, pressure) into neural impulses that the nervous system can process.",
      },
      {
        id: "sp-q2",
        stem: "According to Weber's law, if you can just barely notice the difference between a 10 g and 11 g weight, how much weight would need to be added to a 100 g weight to produce a similarly noticeable difference?",
        choices: ["1 g", "10 g", "11 g", "100 g"],
        correctIndex: 1,
        explanation:
          "Weber's law states the JND is a constant proportion of the original stimulus. Since 1 g is a 10% change from 10 g, a 10% change from 100 g (10 g) would produce a similarly noticeable difference.",
      },
      {
        id: "sp-q3",
        stem: "Reading a slightly blurry word in a sentence and understanding it correctly because of the surrounding context is an example of:",
        choices: ["Bottom-up processing", "Top-down processing", "Sensory adaptation", "Signal detection bias"],
        correctIndex: 1,
        explanation:
          "Top-down processing uses existing knowledge and context (the rest of the sentence) to interpret ambiguous or incomplete sensory data.",
      },
      {
        id: "sp-q4",
        stem: "Rods and cones are both examples of:",
        choices: ["Mechanoreceptors", "Chemoreceptors", "Photoreceptors", "Nociceptors"],
        correctIndex: 2,
        explanation:
          "Rods and cones are photoreceptor cells in the retina that transduce light energy into neural signals; rods support low-light vision and cones support color vision.",
      },
      {
        id: "sp-q5",
        stem: "The Gestalt principle in which the brain perceives incomplete shapes as complete by filling in gaps is called:",
        choices: ["Proximity", "Similarity", "Closure", "Figure-ground"],
        correctIndex: 2,
        explanation:
          "Closure describes the tendency to perceive an incomplete figure as a whole, mentally filling in the missing parts.",
      },
    ],
  },
  {
    id: "learning-memory",
    title: "Learning, Memory & Cognition",
    blurb: "Classical/operant conditioning, memory systems, and problem-solving.",
    lesson: {
      paragraphs: [
        "Classical conditioning, described by Pavlov, involves learning an association between two stimuli: a neutral stimulus (e.g., a bell) is repeatedly paired with an unconditioned stimulus (e.g., food) that naturally produces an unconditioned response (salivation), until the previously neutral stimulus alone (now a conditioned stimulus) elicits a conditioned response.",
        "Operant conditioning, described by Skinner, involves learning through consequences. Reinforcement increases the likelihood of a behavior (positive reinforcement adds a pleasant stimulus; negative reinforcement removes an aversive stimulus), while punishment decreases the likelihood of a behavior (positive punishment adds an aversive stimulus; negative punishment removes a pleasant stimulus). Schedules of reinforcement (fixed/variable, ratio/interval) affect how quickly behavior is learned and how resistant it is to extinction, with variable-ratio schedules producing the highest, most persistent response rates.",
        "Memory is often modeled in three stages: sensory memory (very brief, high capacity), short-term/working memory (limited capacity, roughly 7 +/- 2 items, lasting seconds without rehearsal), and long-term memory (essentially unlimited capacity and duration). Long-term memory is further divided into explicit (declarative) memory - episodic (personal events) and semantic (facts) - and implicit (nondeclarative) memory, such as procedural memory for skills.",
        "The hippocampus is critical for forming new explicit long-term memories, while the amygdala is heavily involved in emotional memory. The serial position effect describes better recall for items at the beginning (primacy effect, due to transfer into long-term memory) and end (recency effect, due to still being in short-term memory) of a list compared to the middle.",
      ],
      keyConcepts: [
        "Classical conditioning: learning an association between two stimuli (Pavlov).",
        "Operant conditioning: learning through reinforcement (increases behavior) and punishment (decreases behavior).",
        "Variable-ratio reinforcement schedules produce the most persistent, extinction-resistant behavior.",
        "Memory stages: sensory -> short-term/working -> long-term (explicit: episodic/semantic; implicit: procedural).",
        "Serial position effect: primacy (early items, into long-term memory) + recency (late items, still in short-term memory).",
      ],
    },
    questions: [
      {
        id: "lm-q1",
        stem: "A dog learns to salivate at the sound of a bell after the bell was repeatedly paired with food. In this scenario, the bell is the:",
        choices: ["Unconditioned stimulus", "Unconditioned response", "Conditioned stimulus", "Conditioned response"],
        correctIndex: 2,
        explanation:
          "After repeated pairing with the unconditioned stimulus (food), the previously neutral bell becomes a conditioned stimulus capable of eliciting salivation on its own.",
      },
      {
        id: "lm-q2",
        stem: "A rat presses a lever, which causes an unpleasant loud noise to stop. The rat begins pressing the lever more often. This is an example of:",
        choices: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"],
        correctIndex: 1,
        explanation:
          "Negative reinforcement increases a behavior by removing an aversive stimulus (the loud noise) following that behavior.",
      },
      {
        id: "lm-q3",
        stem: "Which reinforcement schedule typically produces the highest and most extinction-resistant rate of responding?",
        choices: ["Fixed-ratio", "Fixed-interval", "Variable-ratio", "Variable-interval"],
        correctIndex: 2,
        explanation:
          "Variable-ratio schedules (reward after an unpredictable number of responses, as in gambling) produce high, steady response rates that are very resistant to extinction.",
      },
      {
        id: "lm-q4",
        stem: "A patient with hippocampal damage can still learn new motor skills (like riding a bike) but cannot form new memories of daily events. This dissociation illustrates the difference between:",
        choices: [
          "Sensory memory and short-term memory",
          "Explicit (declarative) memory and implicit (procedural) memory",
          "Classical and operant conditioning",
          "Primacy and recency effects",
        ],
        correctIndex: 1,
        explanation:
          "The hippocampus is essential for forming new explicit (declarative) memories, but procedural (implicit) memory for skills relies on other brain structures (e.g., the basal ganglia and cerebellum), so it can remain intact.",
      },
      {
        id: "lm-q5",
        stem: "On a memorized list of 20 words, a participant recalls the first few and last few words much better than the words in the middle. This pattern is called the:",
        choices: ["Weber effect", "Serial position effect", "Stroop effect", "Framing effect"],
        correctIndex: 1,
        explanation:
          "The serial position effect combines the primacy effect (early items rehearsed into long-term memory) and recency effect (late items still held in short-term memory) to produce better recall at both ends of a list.",
      },
    ],
  },
  {
    id: "motivation-personality",
    title: "Motivation, Emotion & Personality",
    blurb: "Theories of motivation, emotion, and personality frameworks.",
    lesson: {
      paragraphs: [
        "Motivation theories explain why organisms initiate, direct, and sustain behavior. Drive reduction theory proposes that physiological needs create an aroused tension state (a drive) that motivates behavior to reduce the need and restore homeostasis. In contrast, incentive theory emphasizes that external stimuli (rewards) can pull behavior even without an internal deficit. Maslow's hierarchy of needs arranges human motives from basic physiological needs at the base up through safety, love/belonging, esteem, and self-actualization at the top, proposing that lower needs generally must be sufficiently met before higher needs become motivating.",
        "Major theories of emotion differ in the proposed sequence of physiological arousal, subjective feeling, and behavior. The James-Lange theory proposes that physiological arousal precedes and causes the subjective emotional experience (we feel afraid because we notice our heart racing). The Cannon-Bard theory proposes that arousal and the subjective emotion occur simultaneously and independently. The Schachter-Singer two-factor theory proposes that emotion depends on both physiological arousal and a cognitive label/interpretation of that arousal based on context.",
        "Personality can be described using the Five Factor Model (the 'Big Five'): Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (often remembered as OCEAN), which are relatively stable trait dimensions. Psychodynamic theory (Freud) proposed that personality arises from the interaction of the id (primal drives), ego (rational mediator), and superego (moral conscience), often shaped by unconscious conflicts.",
        "Social-cognitive theories of personality (e.g., Bandura) emphasize the role of observational learning, self-efficacy (belief in one's ability to succeed), and the reciprocal interaction between a person, their behavior, and their environment (reciprocal determinism) in shaping personality and behavior.",
      ],
      keyConcepts: [
        "Drive reduction theory: internal needs create drives that motivate behavior toward homeostasis.",
        "James-Lange: arousal -> emotion. Cannon-Bard: arousal and emotion simultaneously. Schachter-Singer: arousal + cognitive label -> emotion.",
        "Maslow's hierarchy: physiological, safety, love/belonging, esteem, self-actualization (bottom to top).",
        "Big Five personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN).",
        "Freud's structural model: id (drives), ego (mediator/reality), superego (morality/conscience).",
      ],
    },
    questions: [
      {
        id: "mp-q1",
        stem: "According to the Schachter-Singer two-factor theory of emotion, experiencing an emotion requires:",
        choices: [
          "Physiological arousal alone",
          "A cognitive label alone, without arousal",
          "Both physiological arousal and a cognitive interpretation of that arousal",
          "Behavior that occurs before any arousal or cognition",
        ],
        correctIndex: 2,
        explanation:
          "The two-factor theory holds that the same physiological arousal can be experienced as different emotions depending on how a person cognitively labels/interprets the situation causing the arousal.",
      },
      {
        id: "mp-q2",
        stem: "A person eats a large meal to reduce feelings of hunger, restoring physiological balance. This behavior is best explained by:",
        choices: ["Incentive theory", "Drive reduction theory", "The James-Lange theory", "Reciprocal determinism"],
        correctIndex: 1,
        explanation:
          "Drive reduction theory explains behavior as motivated by the need to reduce internal physiological tension (hunger) and restore homeostasis.",
      },
      {
        id: "mp-q3",
        stem: "In Maslow's hierarchy of needs, which need must generally be substantially met before self-actualization becomes a strong motivator?",
        choices: ["Self-actualization needs", "Aesthetic needs only", "Esteem needs", "None; all levels are motivating equally at all times"],
        correctIndex: 2,
        explanation:
          "Maslow's hierarchy proposes needs are generally addressed in order from the base upward; esteem needs sit just below self-actualization and typically need to be reasonably satisfied first.",
      },
      {
        id: "mp-q4",
        stem: "Which of the following is one of the Big Five (OCEAN) personality traits?",
        choices: ["Intelligence", "Conscientiousness", "Self-efficacy", "Locus of control"],
        correctIndex: 1,
        explanation:
          "The Big Five traits are Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Intelligence, self-efficacy, and locus of control are related but distinct psychological constructs.",
      },
      {
        id: "mp-q5",
        stem: "In Freud's structural model of personality, the component that operates on the 'pleasure principle,' seeking immediate gratification of basic drives, is the:",
        choices: ["Ego", "Superego", "Id", "Unconscious self"],
        correctIndex: 2,
        explanation:
          "The id operates on the pleasure principle, demanding immediate satisfaction of instinctual drives, without regard for reality or morality.",
      },
    ],
  },
  {
    id: "psych-disorders",
    title: "Psychological Disorders",
    blurb: "Classification and features of major categories of psychological disorders.",
    lesson: {
      paragraphs: [
        "Psychological disorders are typically classified using diagnostic criteria (in the U.S., the DSM) based on patterns of symptoms causing significant distress or impairment. Anxiety disorders (e.g., generalized anxiety disorder, panic disorder, specific phobias) involve excessive fear or worry. Panic disorder involves recurrent, unexpected panic attacks - discrete episodes of intense fear with physical symptoms (racing heart, shortness of breath) that peak within minutes.",
        "Mood disorders involve disturbances in emotional state. Major depressive disorder involves persistent depressed mood and/or loss of interest/pleasure (anhedonia), along with other symptoms (sleep/appetite changes, fatigue, concentration difficulty), lasting at least two weeks. Bipolar I disorder involves at least one manic episode (abnormally elevated mood, increased energy, decreased need for sleep, impulsivity), often alternating with depressive episodes.",
        "Schizophrenia spectrum disorders are characterized by positive symptoms (an excess or distortion of normal function - hallucinations, delusions, disorganized speech) and negative symptoms (a decrease or loss of normal function - flat affect, avolition, social withdrawal). Onset is typically in late adolescence to early adulthood, and the dopamine hypothesis proposes that excess dopamine activity in certain brain pathways contributes to positive symptoms.",
        "Personality disorders involve enduring, inflexible patterns of inner experience and behavior that deviate from cultural expectations and cause impairment, grouped into Cluster A (odd/eccentric, e.g., paranoid, schizoid), Cluster B (dramatic/erratic, e.g., borderline, antisocial, narcissistic), and Cluster C (anxious/fearful, e.g., avoidant, dependent, obsessive-compulsive).",
      ],
      keyConcepts: [
        "Panic disorder: recurrent, unexpected panic attacks peaking within minutes.",
        "Major depressive disorder: depressed mood and/or anhedonia for 2+ weeks, plus other symptoms.",
        "Bipolar I disorder requires at least one manic episode.",
        "Schizophrenia: positive symptoms (hallucinations, delusions) and negative symptoms (flat affect, avolition).",
        "Personality disorder clusters: A (odd/eccentric), B (dramatic/erratic), C (anxious/fearful).",
      ],
    },
    questions: [
      {
        id: "pd-q1",
        stem: "A patient experiences hallucinations and delusions. These are classified as:",
        choices: ["Negative symptoms", "Positive symptoms", "Mood symptoms", "Cognitive symptoms only"],
        correctIndex: 1,
        explanation:
          "Positive symptoms of schizophrenia represent an excess or distortion of normal functioning, such as hallucinations and delusions, as opposed to negative symptoms, which represent a loss of normal function.",
      },
      {
        id: "pd-q2",
        stem: "Which is required for a diagnosis of Bipolar I disorder?",
        choices: [
          "At least one major depressive episode only",
          "At least one manic episode",
          "Chronic low-level depressed mood for at least 2 years",
          "Recurrent panic attacks",
        ],
        correctIndex: 1,
        explanation:
          "Bipolar I disorder is defined by the occurrence of at least one manic episode, regardless of whether a depressive episode has also occurred.",
      },
      {
        id: "pd-q3",
        stem: "A patient reports recurrent, unexpected episodes of intense fear with heart palpitations and shortness of breath that peak within minutes. This is most consistent with:",
        choices: ["Generalized anxiety disorder", "Panic disorder", "Major depressive disorder", "Schizophrenia"],
        correctIndex: 1,
        explanation:
          "Panic disorder is characterized by recurrent, unexpected panic attacks - sudden surges of intense fear with physical symptoms that peak within minutes.",
      },
      {
        id: "pd-q4",
        stem: "Flat affect, social withdrawal, and avolition (lack of motivation) in a patient with schizophrenia are classified as:",
        choices: ["Positive symptoms", "Negative symptoms", "Manic symptoms", "Dissociative symptoms"],
        correctIndex: 1,
        explanation:
          "Negative symptoms represent a decrease or absence of normal functioning (emotional expression, motivation, social engagement), distinct from the positive symptoms of hallucinations/delusions.",
      },
      {
        id: "pd-q5",
        stem: "Antisocial personality disorder, characterized by disregard for others' rights, belongs to which personality disorder cluster?",
        choices: ["Cluster A (odd/eccentric)", "Cluster B (dramatic/erratic)", "Cluster C (anxious/fearful)", "It is not a personality disorder"],
        correctIndex: 1,
        explanation:
          "Antisocial, borderline, histrionic, and narcissistic personality disorders make up Cluster B, characterized by dramatic, emotional, or erratic behavior.",
      },
    ],
  },
  {
    id: "social-structures",
    title: "Social Structure, Demographics & Interaction",
    blurb: "Social institutions, stratification, and how groups influence individual behavior.",
    lesson: {
      paragraphs: [
        "Social structure refers to the organized pattern of relationships and institutions (family, education, religion, government, economy) that shape behavior within a society. Socioeconomic status (SES), typically measured through income, education, and occupation, is strongly associated with health outcomes - individuals with lower SES generally experience higher rates of chronic disease and lower life expectancy, due to factors like access to healthcare, environmental exposures, and chronic stress.",
        "Social stratification is the hierarchical arrangement of individuals into social classes, castes, or strata based on factors like wealth, power, and prestige. Social mobility describes movement between strata; societies with rigid stratification (e.g., caste systems) allow little mobility, while more open systems allow greater vertical mobility. Demographic shifts are described through concepts like the demographic transition (societies moving from high birth/death rates to low birth/death rates as they industrialize).",
        "Group dynamics influence individual behavior in predictable ways. Conformity is adjusting behavior/beliefs to match a group norm (demonstrated in Asch's line-judgment experiments), while obedience is complying with a direct command from an authority figure (demonstrated in Milgram's shock experiments). Group polarization describes how group discussion tends to strengthen the group's initial leaning, and groupthink describes a dysfunctional decision-making process where the desire for consensus overrides realistic appraisal of alternatives.",
        "Attribution theory examines how people explain the causes of behavior. The fundamental attribution error is the tendency to overemphasize dispositional (personality-based) explanations for others' behavior while underemphasizing situational factors - for example, assuming someone who cut in line is simply rude, rather than considering they may be late for an emergency.",
      ],
      keyConcepts: [
        "Lower socioeconomic status (SES) is associated with worse health outcomes and lower life expectancy.",
        "Social stratification: hierarchical arrangement by wealth/power/prestige; social mobility varies by system rigidity.",
        "Conformity (Asch) = matching group norms; obedience (Milgram) = complying with an authority figure's direct command.",
        "Groupthink: desire for consensus overrides critical, realistic evaluation of alternatives.",
        "Fundamental attribution error: overweighting dispositional causes, underweighting situational causes, for others' behavior.",
      ],
    },
    questions: [
      {
        id: "ss-q1",
        stem: "Lower socioeconomic status is most strongly and consistently associated with:",
        choices: [
          "Better access to preventive healthcare",
          "Higher rates of chronic disease and lower life expectancy",
          "No measurable difference in health outcomes",
          "Higher rates of health only in developed countries",
        ],
        correctIndex: 1,
        explanation:
          "Extensive research links lower SES with worse health outcomes overall, including higher chronic disease rates and reduced life expectancy, driven by factors like healthcare access, stress, and environmental exposure.",
      },
      {
        id: "ss-q2",
        stem: "In Asch's classic experiments, participants often gave an obviously incorrect answer about line length to match the group's incorrect answer. This demonstrates:",
        choices: ["Obedience", "Conformity", "Groupthink", "The fundamental attribution error"],
        correctIndex: 1,
        explanation:
          "Asch's line-judgment studies are the classic demonstration of conformity - adjusting one's own response to align with group norms, even when the group is clearly wrong.",
      },
      {
        id: "ss-q3",
        stem: "Milgram's experiments, in which participants administered what they believed were painful shocks because an experimenter instructed them to, primarily demonstrated:",
        choices: ["Conformity", "Obedience to authority", "Social loafing", "Diffusion of responsibility"],
        correctIndex: 1,
        explanation:
          "Milgram's studies specifically examined obedience - compliance with a direct command from a perceived authority figure - even when it conflicted with personal conscience.",
      },
      {
        id: "ss-q4",
        stem: "Assuming a classmate who submitted a late assignment is simply lazy, without considering that they may have had a family emergency, is an example of:",
        choices: ["Groupthink", "Social mobility", "The fundamental attribution error", "Group polarization"],
        correctIndex: 2,
        explanation:
          "This reflects the fundamental attribution error: attributing another person's behavior to their disposition (laziness) while discounting situational factors (a family emergency).",
      },
      {
        id: "ss-q5",
        stem: "A society's ability for individuals to move between social classes based on merit or circumstance is called:",
        choices: ["Social stratification", "Social mobility", "The demographic transition", "Groupthink"],
        correctIndex: 1,
        explanation:
          "Social mobility refers to the capacity of individuals or groups to move up or down the social hierarchy; it is constrained differently depending on how rigid a society's stratification system is.",
      },
    ],
  },
];
