export const sectionId = "bio-biochem";
export const sectionTitle = "Biological & Biochemical Foundations of Living Systems";
export const sectionBlurb =
  "Cells, molecules, genetics, and organ systems - the biology and biochemistry tested on the MCAT.";

export const topics = [
  {
    id: "cell-structure",
    title: "Cell Structure & Function",
    blurb: "Prokaryotes vs. eukaryotes, organelles, membranes, and transport.",
    lesson: {
      paragraphs: [
        "All cells are bounded by a phospholipid bilayer membrane that separates the internal environment from the extracellular space. Eukaryotic cells (animal, plant, fungal, protist) further compartmentalize their interior with membrane-bound organelles, while prokaryotic cells (bacteria, archaea) lack a true nucleus and internal membrane-bound organelles, keeping their DNA in a nucleoid region.",
        "The nucleus houses the genome and is the site of transcription; the rough endoplasmic reticulum (studded with ribosomes) synthesizes and folds secretory and membrane proteins, while the smooth ER handles lipid synthesis and detoxification. The Golgi apparatus modifies, sorts, and packages proteins into vesicles for secretion or delivery to other organelles.",
        "Mitochondria generate ATP via oxidative phosphorylation and carry their own circular DNA, consistent with their endosymbiotic origin from ancestral bacteria. Lysosomes contain hydrolytic enzymes for degrading macromolecules and worn-out organelles (autophagy), and peroxisomes break down fatty acids and detoxify reactive oxygen species.",
        "The plasma membrane is selectively permeable. Small nonpolar molecules (O2, CO2) diffuse freely; polar molecules and ions require channel or carrier proteins. Passive transport (simple diffusion, facilitated diffusion, osmosis) moves substances down their concentration gradient with no energy input, while active transport (e.g., the Na+/K+ ATPase) moves substances against their gradient and requires ATP.",
      ],
      keyConcepts: [
        "Prokaryotes: no nucleus, no membrane-bound organelles, circular DNA, smaller (70S) ribosomes.",
        "Eukaryotes: membrane-bound nucleus and organelles, linear DNA wrapped around histones, larger (80S) ribosomes.",
        "Mitochondria and chloroplasts have their own DNA and double membranes (endosymbiotic theory).",
        "Osmosis: water moves toward the higher solute concentration (hypertonic solution).",
        "Active transport requires ATP and moves solutes against their concentration gradient.",
      ],
    },
    questions: [
      {
        id: "cs-q1",
        stem: "Which organelle is primarily responsible for post-translational modification and sorting of proteins destined for secretion?",
        choices: ["Smooth endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Peroxisome"],
        correctIndex: 1,
        explanation:
          "The Golgi apparatus receives proteins from the rough ER, modifies them (e.g., glycosylation), and packages them into vesicles for secretion or delivery to their final destination.",
      },
      {
        id: "cs-q2",
        stem: "A red blood cell is placed in a hypertonic saline solution. What will happen to the cell?",
        choices: [
          "It will swell and may lyse",
          "It will shrink (crenate) as water leaves the cell",
          "No net water movement will occur",
          "It will actively pump water out using ATP",
        ],
        correctIndex: 1,
        explanation:
          "In a hypertonic solution, the extracellular solute concentration is higher than intracellular, so water moves out of the cell by osmosis, causing the cell to shrink (crenation).",
      },
      {
        id: "cs-q3",
        stem: "Which feature is shared by both mitochondria and chloroplasts and supports the endosymbiotic theory?",
        choices: [
          "A single surrounding membrane",
          "Their own circular DNA and ribosomes",
          "Direct connection to the nuclear envelope",
          "Synthesis of digestive enzymes",
        ],
        correctIndex: 1,
        explanation:
          "Both organelles contain their own circular DNA and prokaryote-like ribosomes, evidence that they originated from free-living bacteria engulfed by an ancestral eukaryotic cell.",
      },
      {
        id: "cs-q4",
        stem: "The Na+/K+ ATPase pumps 3 Na+ out of the cell and 2 K+ into the cell per ATP hydrolyzed. This is an example of:",
        choices: ["Simple diffusion", "Facilitated diffusion", "Primary active transport", "Osmosis"],
        correctIndex: 2,
        explanation:
          "This pump moves ions against their concentration gradients using energy directly from ATP hydrolysis, the definition of primary active transport.",
      },
      {
        id: "cs-q5",
        stem: "Which statement correctly distinguishes prokaryotic from eukaryotic cells?",
        choices: [
          "Only eukaryotes have a plasma membrane",
          "Prokaryotes lack membrane-bound organelles; eukaryotes have them",
          "Prokaryotes have linear DNA; eukaryotes have circular DNA",
          "Only prokaryotes contain ribosomes",
        ],
        correctIndex: 1,
        explanation:
          "Prokaryotic cells lack a nucleus and other membrane-bound organelles, while eukaryotic cells compartmentalize their contents into organelles like the nucleus, ER, and mitochondria.",
      },
    ],
  },
  {
    id: "molecular-biology",
    title: "DNA, RNA & Protein Synthesis",
    blurb: "Replication, transcription, translation, and the central dogma.",
    lesson: {
      paragraphs: [
        "DNA replication is semiconservative: each new double helix contains one original (parental) strand and one newly synthesized strand. DNA polymerase synthesizes new strands 5' to 3', reading the template 3' to 5', and requires a primer. Because the two template strands are antiparallel, replication is continuous on the leading strand and discontinuous (via Okazaki fragments) on the lagging strand.",
        "Transcription copies a DNA template into messenger RNA (mRNA) using RNA polymerase, which does not require a primer. In eukaryotes, the pre-mRNA transcript is processed: a 5' cap and poly-A tail are added, and introns are removed by the spliceosome while exons are joined together.",
        "Translation converts the mRNA sequence into a polypeptide at the ribosome. Transfer RNAs (tRNAs), each carrying a specific amino acid, recognize mRNA codons via complementary anticodons. The genetic code is read in triplets (codons), is degenerate (multiple codons can specify the same amino acid), and includes start (AUG) and stop codons that do not code for amino acids.",
        "Mutations are changes in the DNA sequence. Point mutations include silent (no change in amino acid, due to code degeneracy), missense (different amino acid), and nonsense (premature stop codon) mutations. Frameshift mutations, caused by insertions or deletions not in multiples of three, shift the reading frame and typically have severe effects on the resulting protein.",
      ],
      keyConcepts: [
        "DNA replication is semiconservative and proceeds 5' to 3' on the new strand.",
        "Leading strand: continuous synthesis. Lagging strand: Okazaki fragments joined by DNA ligase.",
        "mRNA processing in eukaryotes: 5' cap, poly-A tail, splicing out introns.",
        "The genetic code is degenerate, non-overlapping, and (nearly) universal.",
        "Frameshift mutations (indels not in multiples of 3) alter every downstream codon.",
      ],
    },
    questions: [
      {
        id: "mb-q1",
        stem: "Meselson and Stahl's experiment demonstrated that DNA replication is:",
        choices: ["Conservative", "Semiconservative", "Dispersive", "Random"],
        correctIndex: 1,
        explanation:
          "Their density-gradient centrifugation experiment showed each daughter DNA molecule contains one parental strand and one newly synthesized strand - semiconservative replication.",
      },
      {
        id: "mb-q2",
        stem: "Which enzyme is responsible for joining Okazaki fragments on the lagging strand?",
        choices: ["DNA polymerase III", "Primase", "DNA ligase", "Helicase"],
        correctIndex: 2,
        explanation:
          "DNA ligase seals the nicks between adjacent Okazaki fragments by forming phosphodiester bonds, creating a continuous lagging strand.",
      },
      {
        id: "mb-q3",
        stem: "A point mutation changes a codon from GAA (glutamate) to GAG, which still codes for glutamate. This is an example of a:",
        choices: ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frameshift mutation"],
        correctIndex: 2,
        explanation:
          "Because the genetic code is degenerate, some base changes do not alter the encoded amino acid. This is a silent mutation with no effect on the protein sequence.",
      },
      {
        id: "mb-q4",
        stem: "During eukaryotic mRNA processing, introns are removed by the:",
        choices: ["Ribosome", "Spliceosome", "RNA polymerase II", "Proteasome"],
        correctIndex: 1,
        explanation:
          "The spliceosome, composed of snRNPs, recognizes intron-exon boundaries and excises introns, joining exons together to form mature mRNA.",
      },
      {
        id: "mb-q5",
        stem: "A single nucleotide insertion near the start of a coding sequence would most likely cause a:",
        choices: [
          "Silent mutation with no effect",
          "Frameshift mutation altering the entire downstream sequence",
          "Missense mutation affecting only one amino acid",
          "Increase in mRNA stability only",
        ],
        correctIndex: 1,
        explanation:
          "Inserting one nucleotide (not a multiple of three) shifts the reading frame for every codon downstream of the insertion, usually producing a nonfunctional protein.",
      },
    ],
  },
  {
    id: "genetics-evolution",
    title: "Genetics & Evolution",
    blurb: "Mendelian inheritance, pedigrees, Hardy-Weinberg, and natural selection.",
    lesson: {
      paragraphs: [
        "Mendelian genetics describes how traits controlled by a single gene with two alleles are inherited. The law of segregation states that allele pairs separate during gamete formation, so each gamete carries only one allele per gene. The law of independent assortment states that genes on different chromosomes (or far apart on the same chromosome) are inherited independently of one another.",
        "A monohybrid cross between two heterozygotes (Aa x Aa) produces offspring in a 3:1 phenotypic ratio when A is completely dominant. Incomplete dominance produces a blended intermediate phenotype, while codominance results in both alleles being fully expressed simultaneously (e.g., AB blood type). Pedigree analysis uses inheritance patterns across generations to determine whether a trait is autosomal or X-linked, and dominant or recessive.",
        "The Hardy-Weinberg equilibrium model describes allele and genotype frequencies in a non-evolving population: p + q = 1 and p^2 + 2pq + q^2 = 1, where p and q are the frequencies of the two alleles. A population is in equilibrium only if there is no mutation, migration, genetic drift, or selection, and mating is random.",
        "Evolution by natural selection requires heritable variation in a trait that affects reproductive success (fitness). Directional selection favors one phenotypic extreme, stabilizing selection favors the intermediate phenotype, and disruptive selection favors both extremes over the intermediate. Genetic drift is a random change in allele frequency that has a disproportionately large effect in small populations.",
      ],
      keyConcepts: [
        "Law of segregation: allele pairs separate during meiosis into different gametes.",
        "Law of independent assortment: genes on different chromosomes assort independently.",
        "Hardy-Weinberg: p^2 + 2pq + q^2 = 1 describes a non-evolving population.",
        "Directional, stabilizing, and disruptive selection describe different pressures on a phenotype distribution.",
        "Genetic drift has the largest relative effect in small populations (e.g., founder effect, bottleneck).",
      ],
    },
    questions: [
      {
        id: "ge-q1",
        stem: "In a population, the frequency of the recessive allele (q) for a trait is 0.2. Assuming Hardy-Weinberg equilibrium, what fraction of the population is heterozygous?",
        choices: ["0.04", "0.32", "0.64", "0.20"],
        correctIndex: 1,
        explanation:
          "p = 1 - q = 0.8. Heterozygote frequency = 2pq = 2(0.8)(0.2) = 0.32.",
      },
      {
        id: "ge-q2",
        stem: "A cross between a pink-flowered plant and a pink-flowered plant produces offspring in a 1 red : 2 pink : 1 white ratio. This pattern is best explained by:",
        choices: ["Complete dominance", "Codominance", "Incomplete dominance", "X-linked inheritance"],
        correctIndex: 2,
        explanation:
          "The intermediate (blended) pink phenotype in heterozygotes, with a 1:2:1 ratio in offspring, is the hallmark of incomplete dominance.",
      },
      {
        id: "ge-q3",
        stem: "Which scenario would violate the assumptions required for Hardy-Weinberg equilibrium?",
        choices: [
          "A very large population with random mating",
          "No migration into or out of the population",
          "A predator selectively removes individuals with a certain phenotype",
          "No new mutations arise in the gene of interest",
        ],
        correctIndex: 2,
        explanation:
          "Selective predation based on phenotype is natural selection, which changes allele frequencies and violates Hardy-Weinberg equilibrium.",
      },
      {
        id: "ge-q4",
        stem: "A small group of birds is blown to a remote island and founds a new population with allele frequencies very different from the mainland. This is an example of:",
        choices: ["Directional selection", "The founder effect (a form of genetic drift)", "Gene flow", "Stabilizing selection"],
        correctIndex: 1,
        explanation:
          "The founder effect occurs when a small subset of a population establishes a new population, and by chance its allele frequencies differ from the source population - a type of genetic drift.",
      },
      {
        id: "ge-q5",
        stem: "Human birth weight shows highest survival at intermediate weights, with both very low and very high birth weights associated with increased mortality. This is an example of:",
        choices: ["Directional selection", "Disruptive selection", "Stabilizing selection", "Sexual selection"],
        correctIndex: 2,
        explanation:
          "Stabilizing selection favors intermediate phenotypes and selects against both extremes, reducing variance in the trait over time.",
      },
    ],
  },
  {
    id: "proteins-enzymes",
    title: "Amino Acids, Proteins & Enzymes",
    blurb: "Protein structure levels, enzyme kinetics, and regulation.",
    lesson: {
      paragraphs: [
        "Amino acids are the building blocks of proteins, joined by peptide bonds formed through dehydration synthesis. Protein structure is organized hierarchically: primary structure is the linear amino acid sequence; secondary structure refers to local folding patterns (alpha helices and beta pleated sheets) stabilized by hydrogen bonds between backbone atoms; tertiary structure is the overall 3D shape of a single polypeptide, stabilized by interactions among side chains (hydrophobic interactions, hydrogen bonds, ionic bonds, and disulfide bridges); and quaternary structure describes the arrangement of multiple polypeptide subunits (e.g., hemoglobin's four subunits).",
        "Enzymes are biological catalysts, typically proteins, that lower the activation energy of a reaction without being consumed. They achieve this by stabilizing the transition state. Enzyme activity is described by Michaelis-Menten kinetics: Km reflects the substrate concentration at which reaction velocity is half of Vmax, and is inversely related to the enzyme's apparent affinity for substrate (a lower Km means higher affinity).",
        "Enzyme inhibition can be competitive (inhibitor competes with substrate for the active site, increasing apparent Km but not changing Vmax) or noncompetitive (inhibitor binds a separate allosteric site, decreasing Vmax but not changing Km). Many enzymes are also regulated by allosteric activators/inhibitors, covalent modification (e.g., phosphorylation), or feedback inhibition, where the pathway's end product inhibits an upstream enzyme.",
        "Enzyme activity is sensitive to temperature and pH. Most human enzymes have an optimal temperature near 37 degrees C and a near-neutral pH optimum, though exceptions exist (e.g., pepsin functions best at the highly acidic pH of the stomach). Beyond the optimal range, proteins can denature, losing their functional 3D structure.",
      ],
      keyConcepts: [
        "Primary structure = amino acid sequence; quaternary structure = multiple subunits together.",
        "Enzymes lower activation energy by stabilizing the transition state; they are not consumed.",
        "Competitive inhibition: increases apparent Km, Vmax unchanged; overcome by excess substrate.",
        "Noncompetitive inhibition: decreases Vmax, Km unchanged; not overcome by excess substrate.",
        "Feedback inhibition: the end product of a pathway inhibits an earlier enzyme in that pathway.",
      ],
    },
    questions: [
      {
        id: "pe-q1",
        stem: "Which type of bond is primarily responsible for stabilizing the alpha helix and beta pleated sheet (secondary structure) of a protein?",
        choices: ["Disulfide bonds", "Ionic bonds between side chains", "Hydrogen bonds between backbone atoms", "Peptide bonds"],
        correctIndex: 2,
        explanation:
          "Secondary structure arises from regular hydrogen bonding patterns between the backbone carbonyl oxygen and amide hydrogen atoms, independent of the side chains.",
      },
      {
        id: "pe-q2",
        stem: "A competitive inhibitor is added to an enzyme reaction. Which of the following describes the expected effect on Km and Vmax?",
        choices: [
          "Km increases, Vmax unchanged",
          "Km unchanged, Vmax decreases",
          "Both Km and Vmax decrease",
          "Km decreases, Vmax increases",
        ],
        correctIndex: 0,
        explanation:
          "Competitive inhibitors compete with substrate for the active site. Adding enough substrate can outcompete the inhibitor, so Vmax is still achievable, but a higher substrate concentration is needed, raising the apparent Km.",
      },
      {
        id: "pe-q3",
        stem: "In a metabolic pathway, high levels of the final product bind to and inhibit the first enzyme in the pathway. This regulatory mechanism is called:",
        choices: ["Competitive inhibition", "Feedback (end-product) inhibition", "Zymogen activation", "Cofactor regulation"],
        correctIndex: 1,
        explanation:
          "Feedback inhibition is a common regulatory strategy in which pathway output directly suppresses an upstream (often the first, rate-limiting) enzyme, preventing overproduction.",
      },
      {
        id: "pe-q4",
        stem: "Hemoglobin, made of four polypeptide subunits held together noncovalently, illustrates which level of protein structure?",
        choices: ["Primary", "Secondary", "Tertiary", "Quaternary"],
        correctIndex: 3,
        explanation:
          "Quaternary structure refers specifically to the assembly of two or more separate polypeptide chains (subunits) into a functional protein complex.",
      },
      {
        id: "pe-q5",
        stem: "Heating an enzyme well above its optimal temperature typically causes a sharp decrease in activity because:",
        choices: [
          "The active site becomes more flexible, increasing Km",
          "The enzyme is degraded into amino acids",
          "The enzyme denatures, losing the tertiary structure needed for substrate binding",
          "The reaction becomes exergonic instead of endergonic",
        ],
        correctIndex: 2,
        explanation:
          "Excess heat disrupts the noncovalent interactions maintaining tertiary structure, denaturing the enzyme and destroying the active site's shape.",
      },
    ],
  },
  {
    id: "metabolism",
    title: "Bioenergetics & Metabolism",
    blurb: "Glycolysis, the citric acid cycle, oxidative phosphorylation, and energy coupling.",
    lesson: {
      paragraphs: [
        "Cellular respiration extracts energy from glucose in stages. Glycolysis occurs in the cytoplasm and splits one glucose (6 carbons) into two pyruvate (3 carbons each), net yielding 2 ATP (substrate-level phosphorylation) and 2 NADH, without requiring oxygen. Under anaerobic conditions, pyruvate is instead converted to lactate (in animals) or ethanol and CO2 (in yeast) to regenerate NAD+ so glycolysis can continue.",
        "If oxygen is available, pyruvate enters the mitochondrial matrix and is converted to acetyl-CoA, which feeds into the citric acid (Krebs) cycle. Each turn of the cycle produces 3 NADH, 1 FADH2, and 1 GTP/ATP, while releasing 2 CO2. Because 2 pyruvate are produced per glucose, the cycle turns twice per glucose molecule.",
        "NADH and FADH2 carry electrons to the electron transport chain (ETC) embedded in the inner mitochondrial membrane. As electrons pass through complexes I-IV, protons are pumped into the intermembrane space, creating an electrochemical gradient. ATP synthase uses this gradient (chemiosmosis) to phosphorylate ADP to ATP as protons flow back into the matrix. Oxygen is the final electron acceptor, forming water.",
        "Overall, complete aerobic oxidation of one glucose yields approximately 30-32 ATP, far more than the 2 ATP from glycolysis alone, which is why aerobic respiration is so much more efficient than fermentation. Metabolism is regulated by hormones like insulin (promotes glucose uptake and storage as glycogen) and glucagon (promotes glycogen breakdown and gluconeogenesis) to maintain blood glucose homeostasis.",
      ],
      keyConcepts: [
        "Glycolysis: glucose -> 2 pyruvate, net 2 ATP and 2 NADH, occurs in the cytoplasm, no O2 required.",
        "Citric acid cycle (per glucose, 2 turns): 6 NADH, 2 FADH2, 2 ATP/GTP, 4 CO2 released.",
        "Electron transport chain uses NADH/FADH2 to pump protons; O2 is the final electron acceptor, forming H2O.",
        "ATP synthase generates ATP via chemiosmosis, using the proton gradient built by the ETC.",
        "Without oxygen, fermentation regenerates NAD+ so glycolysis can continue, but yields far less ATP.",
      ],
    },
    questions: [
      {
        id: "met-q1",
        stem: "Which process occurs in the cytoplasm and does not require oxygen?",
        choices: ["Citric acid cycle", "Oxidative phosphorylation", "Glycolysis", "Electron transport chain"],
        correctIndex: 2,
        explanation:
          "Glycolysis takes place in the cytosol and proceeds regardless of oxygen availability, producing a net 2 ATP and 2 NADH per glucose.",
      },
      {
        id: "met-q2",
        stem: "In the electron transport chain, what is the direct role of oxygen?",
        choices: [
          "It phosphorylates ADP directly",
          "It serves as the final electron acceptor, combining with electrons and protons to form water",
          "It pumps protons across the inner mitochondrial membrane",
          "It is oxidized to produce NADH",
        ],
        correctIndex: 1,
        explanation:
          "Oxygen accepts electrons at the end of the ETC (Complex IV) and combines with protons to form water, allowing electron flow (and proton pumping) to continue.",
      },
      {
        id: "met-q3",
        stem: "A muscle cell undergoing intense exercise with insufficient oxygen supply will convert pyruvate to lactate. The primary purpose of this reaction is to:",
        choices: [
          "Produce additional ATP directly",
          "Regenerate NAD+ so glycolysis can continue",
          "Feed directly into the citric acid cycle",
          "Generate FADH2 for the electron transport chain",
        ],
        correctIndex: 1,
        explanation:
          "Lactate fermentation regenerates NAD+ from NADH, which is required as an electron acceptor in glycolysis; without it, glycolysis (and its 2 ATP) would halt.",
      },
      {
        id: "met-q4",
        stem: "Approximately how many total ATP are produced from the complete aerobic breakdown of one glucose molecule?",
        choices: ["2", "8", "~30", "100"],
        correctIndex: 2,
        explanation:
          "Combining glycolysis, the citric acid cycle, and oxidative phosphorylation yields approximately 30-32 ATP per glucose under aerobic conditions.",
      },
      {
        id: "met-q5",
        stem: "ATP synthase produces ATP by harnessing energy from:",
        choices: [
          "Direct transfer of a phosphate from NADH",
          "The flow of protons down their electrochemical gradient through the enzyme",
          "Substrate-level phosphorylation in the citric acid cycle",
          "The reduction of oxygen to water",
        ],
        correctIndex: 1,
        explanation:
          "ATP synthase is a molecular motor: protons flowing down their gradient (built by the ETC) through the enzyme drive rotation that catalyzes ADP + Pi -> ATP, i.e., chemiosmosis.",
      },
    ],
  },
];
