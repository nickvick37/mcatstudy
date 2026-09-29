export const sectionId = "chem-physics";
export const sectionTitle = "Chemical & Physical Foundations of Biological Systems";
export const sectionBlurb =
  "General chemistry, organic chemistry, and physics concepts that explain biological systems.";

export const topics = [
  {
    id: "atomic-structure",
    title: "Atomic Structure & Periodic Trends",
    blurb: "Electron configuration, quantum numbers, and trends across the periodic table.",
    lesson: {
      paragraphs: [
        "An atom's electron configuration describes how electrons fill orbitals in order of increasing energy (the Aufbau principle), with each orbital holding a maximum of two electrons of opposite spin (Pauli exclusion principle), and electrons filling degenerate orbitals singly before pairing (Hund's rule). Four quantum numbers (n, l, ml, ms) uniquely describe each electron's energy level, subshell shape, orbital orientation, and spin.",
        "The periodic table is organized so that elements in the same column (group) share similar valence electron configurations and therefore similar chemical properties. Periodic trends arise from the balance between nuclear charge and electron shielding: atomic radius decreases across a period (increasing nuclear charge pulls electrons in) and increases down a group (additional electron shells).",
        "Ionization energy (energy to remove an electron) increases across a period and decreases down a group, following the inverse trend of atomic radius, since more tightly held electrons are harder to remove. Electronegativity (an atom's tendency to attract shared electrons in a bond) follows the same general trend as ionization energy, peaking near fluorine.",
        "Electron affinity describes the energy change when an atom gains an electron; most nonmetals have a strongly negative (favorable) electron affinity, especially halogens, which need only one more electron to achieve a noble gas configuration.",
      ],
      keyConcepts: [
        "Aufbau, Pauli exclusion, and Hund's rule govern how electrons fill orbitals.",
        "Atomic radius: decreases across a period, increases down a group.",
        "Ionization energy and electronegativity: increase across a period, decrease down a group.",
        "Valence electron configuration determines an element's chemical behavior and group placement.",
        "Noble gases have full valence shells and are (nearly) chemically inert.",
      ],
    },
    questions: [
      {
        id: "as-q1",
        stem: "Which principle states that no two electrons in the same atom can have identical values for all four quantum numbers?",
        choices: ["Aufbau principle", "Hund's rule", "Pauli exclusion principle", "Heisenberg uncertainty principle"],
        correctIndex: 2,
        explanation:
          "The Pauli exclusion principle requires every electron in an atom to have a unique set of four quantum numbers, which is why each orbital holds at most two electrons (with opposite spin).",
      },
      {
        id: "as-q2",
        stem: "Moving from left to right across a period, atomic radius generally:",
        choices: [
          "Increases, because more electrons are added",
          "Decreases, because increasing nuclear charge pulls valence electrons closer",
          "Stays the same across a period",
          "Increases only for metals, decreases only for nonmetals",
        ],
        correctIndex: 1,
        explanation:
          "Across a period, electrons are added to the same shell while protons (and nuclear charge) increase, pulling the electron cloud inward and shrinking atomic radius.",
      },
      {
        id: "as-q3",
        stem: "Which element would be expected to have the highest first ionization energy?",
        choices: ["Sodium (Na)", "Chlorine (Cl)", "Potassium (K)", "Aluminum (Al)"],
        correctIndex: 1,
        explanation:
          "Chlorine is farthest right and highest up among these choices (excluding noble gases), and ionization energy increases across a period and decreases down a group, so Cl has the highest ionization energy.",
      },
      {
        id: "as-q4",
        stem: "An electron configuration ending in 3p^3 indicates that the p subshell contains three electrons. According to Hund's rule, how are these three electrons arranged among the three 3p orbitals?",
        choices: [
          "All three paired in one orbital",
          "One electron in each of the three orbitals, all with parallel spin",
          "Two paired in one orbital, one unpaired in another",
          "Randomly distributed with no preferred arrangement",
        ],
        correctIndex: 1,
        explanation:
          "Hund's rule states that electrons occupy degenerate orbitals singly, with parallel spins, before any orbital gets a second electron, minimizing electron-electron repulsion.",
      },
      {
        id: "as-q5",
        stem: "Electronegativity generally follows which trend across the periodic table?",
        choices: [
          "Increases across a period, increases down a group",
          "Decreases across a period, decreases down a group",
          "Increases across a period, decreases down a group",
          "No consistent trend exists",
        ],
        correctIndex: 2,
        explanation:
          "Electronegativity increases across a period (higher nuclear charge, similar shielding) and decreases down a group (valence electrons farther from the nucleus, more shielded), the same general trend as ionization energy.",
      },
    ],
  },
  {
    id: "bonding",
    title: "Bonding, Molecular Structure & IMFs",
    blurb: "Ionic vs. covalent bonds, VSEPR geometry, and intermolecular forces.",
    lesson: {
      paragraphs: [
        "Ionic bonds form through the electrostatic attraction between oppositely charged ions, typically between a metal (which loses electrons) and a nonmetal (which gains electrons); they usually have large electronegativity differences (>1.7). Covalent bonds form when atoms share electron pairs, and can be nonpolar (electrons shared equally, small or no electronegativity difference) or polar (unequal sharing, creating partial charges).",
        "VSEPR (valence shell electron pair repulsion) theory predicts molecular geometry by minimizing repulsion between electron domains (bonding pairs and lone pairs) around a central atom. For example, four electron domains with no lone pairs gives a tetrahedral shape (109.5 degrees), while four domains with one lone pair gives a trigonal pyramidal shape with a slightly compressed bond angle.",
        "Intermolecular forces (IMFs) are attractions between separate molecules, weaker than covalent or ionic bonds but critical for determining physical properties like boiling point and solubility. London dispersion forces exist in all molecules and increase with molecular size/surface area. Dipole-dipole forces occur between polar molecules. Hydrogen bonding, a particularly strong dipole-dipole interaction, occurs when H is bonded directly to N, O, or F.",
        "Hydrogen bonding explains water's unusually high boiling point, high surface tension, and the fact that ice is less dense than liquid water. In biological systems, hydrogen bonds stabilize DNA's double helix (between complementary base pairs) and protein secondary structure (alpha helices and beta sheets).",
      ],
      keyConcepts: [
        "Ionic bonds: large electronegativity difference, electron transfer, form crystal lattices.",
        "VSEPR predicts geometry: e.g., linear (2 domains), trigonal planar (3), tetrahedral (4, no lone pairs).",
        "IMF strength order (typically): ionic/covalent bonds > hydrogen bonding > dipole-dipole > London dispersion.",
        "Hydrogen bonding requires H bonded to N, O, or F, and is key to water's properties and DNA/protein structure.",
        "Larger molecules have stronger London dispersion forces due to greater polarizability.",
      ],
    },
    questions: [
      {
        id: "bd-q1",
        stem: "A central atom has four bonding pairs and zero lone pairs. According to VSEPR theory, what is the expected molecular geometry?",
        choices: ["Trigonal pyramidal", "Bent", "Tetrahedral", "Trigonal bipyramidal"],
        correctIndex: 2,
        explanation:
          "Four bonding domains with no lone pairs arrange themselves as far apart as possible, giving a tetrahedral geometry with 109.5-degree bond angles.",
      },
      {
        id: "bd-q2",
        stem: "Which type of intermolecular force is uniquely responsible for water's unusually high boiling point relative to other molecules of similar molar mass?",
        choices: ["London dispersion forces", "Ionic bonding", "Hydrogen bonding", "Metallic bonding"],
        correctIndex: 2,
        explanation:
          "Water's H-O bonds allow extensive hydrogen bonding between molecules, an unusually strong IMF that requires more energy to break, raising the boiling point well above nonpolar molecules of similar size.",
      },
      {
        id: "bd-q3",
        stem: "Ammonia (NH3) has three bonding pairs and one lone pair around the central nitrogen. Its molecular geometry is:",
        choices: ["Tetrahedral", "Trigonal planar", "Trigonal pyramidal", "Linear"],
        correctIndex: 2,
        explanation:
          "With four total electron domains (3 bonding + 1 lone pair) arranged tetrahedrally, but only 3 atoms visible, the resulting molecular shape is trigonal pyramidal, with a bond angle slightly less than 109.5 degrees due to lone pair repulsion.",
      },
      {
        id: "bd-q4",
        stem: "Which best explains why larger, nonpolar molecules like I2 have higher boiling points than smaller nonpolar molecules like F2?",
        choices: [
          "I2 forms hydrogen bonds",
          "I2 has stronger London dispersion forces due to its larger, more polarizable electron cloud",
          "I2 is ionic while F2 is covalent",
          "I2 has a permanent dipole moment",
        ],
        correctIndex: 1,
        explanation:
          "Larger atoms/molecules have more electrons that are more easily polarized, creating stronger instantaneous dipoles and thus stronger London dispersion forces, raising the boiling point.",
      },
      {
        id: "bd-q5",
        stem: "An ionic bond is best described as forming through:",
        choices: [
          "Equal sharing of electrons between two nonmetals",
          "Unequal sharing of electrons within a single covalent bond",
          "Complete transfer of one or more electrons, creating oppositely charged ions that attract",
          "Overlap of metallic orbitals in a delocalized electron sea",
        ],
        correctIndex: 2,
        explanation:
          "Ionic bonding involves the transfer of electrons from a low-electronegativity atom (often a metal) to a high-electronegativity atom (often a nonmetal), forming a cation and anion held together by electrostatic attraction.",
      },
    ],
  },
  {
    id: "thermo-kinetics",
    title: "Thermodynamics, Kinetics & Equilibrium",
    blurb: "Enthalpy, entropy, Gibbs free energy, reaction rates, and Le Chatelier's principle.",
    lesson: {
      paragraphs: [
        "The first law of thermodynamics states that energy cannot be created or destroyed, only transferred or transformed (conservation of energy). Enthalpy (H) reflects heat content at constant pressure; a reaction is exothermic if it releases heat (negative delta H) and endothermic if it absorbs heat (positive delta H). Entropy (S) is a measure of disorder/randomness, and the second law of thermodynamics states that the total entropy of an isolated system tends to increase.",
        "Gibbs free energy (delta G = delta H - T delta S) determines reaction spontaneity: a negative delta G indicates a spontaneous (exergonic) reaction, while a positive delta G indicates a nonspontaneous (endergonic) reaction that requires energy input. Spontaneity depends on temperature when delta H and delta S have the same sign.",
        "Reaction kinetics describes how fast a reaction proceeds, which is independent of thermodynamic favorability - a reaction can be spontaneous (negative delta G) but very slow if it has a high activation energy. Catalysts (including enzymes) speed up reactions by lowering activation energy without being consumed and without changing delta G or the equilibrium position.",
        "At chemical equilibrium, the forward and reverse reaction rates are equal, and concentrations remain constant (though not necessarily equal). Le Chatelier's principle predicts how a system at equilibrium responds to a stress (change in concentration, pressure/volume, or temperature): the equilibrium shifts to partially counteract the imposed change. For example, increasing temperature on an exothermic reaction shifts equilibrium toward reactants (since heat acts like a product).",
      ],
      keyConcepts: [
        "Delta G = delta H - T delta S; negative delta G means spontaneous (exergonic).",
        "Thermodynamic favorability (delta G) is independent of reaction rate (kinetics).",
        "Catalysts lower activation energy, speeding up reactions without changing delta G or Keq.",
        "At equilibrium, forward rate = reverse rate; concentrations are constant, not necessarily equal.",
        "Le Chatelier's principle: a system at equilibrium shifts to counteract an applied stress.",
      ],
    },
    questions: [
      {
        id: "tk-q1",
        stem: "A reaction has delta H < 0 and delta S < 0. Under what temperature conditions is this reaction spontaneous?",
        choices: ["At all temperatures", "At no temperature", "Only at low temperatures", "Only at high temperatures"],
        correctIndex: 2,
        explanation:
          "With delta G = delta H - T delta S, negative delta H favors spontaneity while negative delta S opposes it (since -T delta S becomes positive). At low T, the T delta S term is small, so delta H dominates and delta G can be negative.",
      },
      {
        id: "tk-q2",
        stem: "Adding a catalyst to a reaction at equilibrium will:",
        choices: [
          "Shift the equilibrium toward products",
          "Increase the equilibrium constant Keq",
          "Speed up the time to reach equilibrium without changing the equilibrium position",
          "Make an endergonic reaction exergonic",
        ],
        correctIndex: 2,
        explanation:
          "Catalysts lower the activation energy for both forward and reverse reactions equally, so equilibrium is reached faster, but the equilibrium constant and position are unchanged.",
      },
      {
        id: "tk-q3",
        stem: "For the exothermic reaction N2(g) + 3H2(g) <-> 2NH3(g), increasing the temperature will shift the equilibrium:",
        choices: [
          "Toward products, increasing NH3 yield",
          "Toward reactants, decreasing NH3 yield",
          "No shift; temperature does not affect equilibrium position",
          "Toward products only if pressure is also increased",
        ],
        correctIndex: 1,
        explanation:
          "Since the reaction is exothermic, heat can be treated as a product. Increasing temperature adds 'product,' so by Le Chatelier's principle the equilibrium shifts left, toward reactants.",
      },
      {
        id: "tk-q4",
        stem: "A reaction is thermodynamically spontaneous (delta G < 0) but is observed to proceed extremely slowly at room temperature. This is best explained by:",
        choices: [
          "The reaction must actually have delta G > 0",
          "A high activation energy causing slow kinetics despite favorable thermodynamics",
          "The reaction is at equilibrium",
          "Entropy must be decreasing",
        ],
        correctIndex: 1,
        explanation:
          "Spontaneity (thermodynamics) only tells us the reaction is energetically favorable overall, not how fast it occurs. A high activation energy barrier can make an otherwise spontaneous reaction proceed very slowly.",
      },
      {
        id: "tk-q5",
        stem: "Increasing the volume of a rigid container holding a gas-phase equilibrium A(g) <-> 2B(g) will shift equilibrium toward:",
        choices: [
          "A, the side with fewer moles of gas",
          "B, the side with more moles of gas",
          "No shift occurs from a volume change",
          "It depends only on temperature, not volume",
        ],
        correctIndex: 1,
        explanation:
          "Increasing volume decreases pressure. By Le Chatelier's principle, the system shifts toward the side with more moles of gas to partially counteract the pressure decrease - here, toward B.",
      },
    ],
  },
  {
    id: "acids-bases",
    title: "Acids, Bases & Titrations",
    blurb: "Bronsted-Lowry theory, pH/pKa, buffers, and titration curves.",
    lesson: {
      paragraphs: [
        "Under the Bronsted-Lowry definition, an acid is a proton (H+) donor and a base is a proton acceptor. Strong acids and bases (e.g., HCl, NaOH) dissociate completely in water, while weak acids and bases (e.g., acetic acid, ammonia) only partially dissociate, establishing an equilibrium described by Ka or Kb. pH = -log[H+], and pKa = -log(Ka); a lower pKa indicates a stronger acid.",
        "The Henderson-Hasselbalch equation, pH = pKa + log([A-]/[HA]), relates the pH of a solution to the ratio of conjugate base to weak acid. When [A-] = [HA] (at the midpoint of a titration), pH = pKa, and the solution has maximum buffering capacity - it resists pH changes most effectively when it contains comparable amounts of a weak acid and its conjugate base.",
        "In a titration of a weak acid with a strong base, the curve shows a gradual pH rise (the buffering region) before a sharp jump at the equivalence point, where moles of acid equal moles of base added. The equivalence point of a weak acid/strong base titration occurs at a pH greater than 7, because the conjugate base produced is itself weakly basic.",
        "Amino acids are amphoteric (can act as both acid and base) and have multiple pKa values corresponding to their carboxyl and amino groups (and side chain, if ionizable). The isoelectric point (pI) is the pH at which a molecule carries no net charge, calculated as the average of the pKa values flanking the neutral (zwitterionic) form.",
      ],
      keyConcepts: [
        "Bronsted-Lowry: acid = proton donor, base = proton acceptor.",
        "pH = pKa when [conjugate base] = [weak acid]; this is the point of maximum buffering capacity.",
        "Strong acid/base fully dissociates; weak acid/base partially dissociates (equilibrium, Ka/Kb).",
        "Weak acid + strong base titration: equivalence point pH > 7.",
        "Buffers resist pH change best near their pKa, using a weak acid/conjugate base pair.",
      ],
    },
    questions: [
      {
        id: "ab-q1",
        stem: "A buffer solution contains equal concentrations of acetic acid (pKa = 4.76) and its conjugate base, acetate. What is the pH of this buffer?",
        choices: ["1.0", "4.76", "7.0", "9.24"],
        correctIndex: 1,
        explanation:
          "By the Henderson-Hasselbalch equation, when [A-] = [HA], the log term is log(1) = 0, so pH = pKa = 4.76.",
      },
      {
        id: "ab-q2",
        stem: "In a titration of a weak acid with a strong base, the pH at the equivalence point is:",
        choices: ["Always exactly 7", "Greater than 7", "Less than 7", "Equal to the pKa of the acid"],
        correctIndex: 1,
        explanation:
          "At the equivalence point, the weak acid has been fully converted to its conjugate base, which reacts with water to produce a slightly basic solution (pH > 7).",
      },
      {
        id: "ab-q3",
        stem: "Which best defines a Bronsted-Lowry base?",
        choices: ["A substance that donates a proton", "A substance that accepts a proton", "A substance that donates an electron pair", "A substance that accepts a hydroxide ion"],
        correctIndex: 1,
        explanation:
          "The Bronsted-Lowry definition specifically frames acid-base behavior in terms of proton transfer: a base accepts H+.",
      },
      {
        id: "ab-q4",
        stem: "A buffer is most effective at resisting pH changes when the pH of the solution is:",
        choices: [
          "Far above the pKa of the buffering acid",
          "Far below the pKa of the buffering acid",
          "Equal to (or near) the pKa of the buffering acid",
          "Equal to 7, regardless of pKa",
        ],
        correctIndex: 2,
        explanation:
          "Buffering capacity is maximal when pH is near the pKa, because at that point comparable concentrations of both the weak acid and conjugate base are present to neutralize added acid or base.",
      },
      {
        id: "ab-q5",
        stem: "An amino acid has pKa1 = 2.0 (carboxyl group) and pKa2 = 9.0 (amino group), with no ionizable side chain. What is its isoelectric point (pI)?",
        choices: ["2.0", "5.5", "7.0", "9.0"],
        correctIndex: 1,
        explanation:
          "For an amino acid with no ionizable side chain, pI is the average of the two flanking pKa values: (2.0 + 9.0) / 2 = 5.5.",
      },
    ],
  },
  {
    id: "physics-mechanics-electricity",
    title: "Mechanics, Energy & Electricity",
    blurb: "Newton's laws, work/energy, fluids, and circuits.",
    lesson: {
      paragraphs: [
        "Newton's laws of motion form the foundation of classical mechanics. The first law (inertia) states an object remains at rest or constant velocity unless acted on by a net external force. The second law states F = ma: net force equals mass times acceleration. The third law states that for every action force, there is an equal and opposite reaction force acting on the other object.",
        "Work is done when a force causes displacement: W = F * d * cos(theta), measured in joules. The work-energy theorem states that net work done on an object equals its change in kinetic energy. Mechanical energy (kinetic + potential) is conserved in the absence of non-conservative forces like friction; potential energy converts to kinetic energy as, for example, an object falls.",
        "Fluids exert pressure that increases with depth (P = P0 + rho*g*h). Pascal's principle states that pressure applied to an enclosed fluid is transmitted equally in all directions, the basis of hydraulic systems. The buoyant force on a submerged or floating object equals the weight of fluid displaced (Archimedes' principle); an object floats if its average density is less than the fluid's density.",
        "In electric circuits, current (I) is the flow of charge, voltage (V) is the electric potential difference driving that flow, and resistance (R) opposes it, related by Ohm's law: V = IR. In series circuits, current is the same through each component and resistances add directly; in parallel circuits, voltage is the same across each branch and the reciprocals of resistance add (1/Rtotal = sum of 1/Ri), making total resistance less than any individual branch.",
      ],
      keyConcepts: [
        "Newton's 2nd law: F = ma. Newton's 3rd law: forces come in equal, opposite action-reaction pairs.",
        "Work-energy theorem: net work = change in kinetic energy.",
        "Archimedes' principle: buoyant force = weight of fluid displaced.",
        "Series circuits: same current, resistances add. Parallel circuits: same voltage, reciprocal resistances add.",
        "Ohm's law: V = IR relates voltage, current, and resistance.",
      ],
    },
    questions: [
      {
        id: "px-q1",
        stem: "A 2 kg object experiences a net force of 10 N. What is its acceleration?",
        choices: ["0.2 m/s^2", "2 m/s^2", "5 m/s^2", "20 m/s^2"],
        correctIndex: 2,
        explanation:
          "Using Newton's second law, a = F/m = 10 N / 2 kg = 5 m/s^2.",
      },
      {
        id: "px-q2",
        stem: "A block floats in water with exactly half of its volume submerged. What can be concluded about the block's density relative to water?",
        choices: [
          "The block's density equals water's density",
          "The block's density is half of water's density",
          "The block's density is twice water's density",
          "No conclusion can be drawn without knowing the block's mass",
        ],
        correctIndex: 1,
        explanation:
          "By Archimedes' principle, at equilibrium the buoyant force (weight of displaced water) equals the block's weight. If only half the volume is submerged, the block's density must be half that of water.",
      },
      {
        id: "px-q3",
        stem: "Three identical resistors, each with resistance R, are connected in parallel. What is the total resistance of this combination?",
        choices: ["3R", "R/3", "R", "9R"],
        correctIndex: 1,
        explanation:
          "For resistors in parallel, 1/Rtotal = 1/R + 1/R + 1/R = 3/R, so Rtotal = R/3.",
      },
      {
        id: "px-q4",
        stem: "A ball is dropped from rest and falls freely under gravity, with air resistance negligible. As it falls, which statement is true?",
        choices: [
          "Kinetic energy decreases while potential energy increases",
          "Total mechanical energy increases",
          "Potential energy converts to kinetic energy, and total mechanical energy is conserved",
          "Both kinetic and potential energy remain constant",
        ],
        correctIndex: 2,
        explanation:
          "With no non-conservative forces (like air resistance) doing work, mechanical energy is conserved: as the ball falls, potential energy decreases and converts into an equal increase in kinetic energy.",
      },
      {
        id: "px-q5",
        stem: "According to Newton's third law, when a swimmer pushes backward against the water, what happens?",
        choices: [
          "The water pushes the swimmer forward with an equal and opposite force",
          "The swimmer accelerates backward",
          "No reaction force exists because water is a fluid",
          "The reaction force is smaller than the swimmer's push",
        ],
        correctIndex: 0,
        explanation:
          "Newton's third law guarantees that the water exerts a force on the swimmer equal in magnitude and opposite in direction to the force the swimmer exerts on the water, propelling the swimmer forward.",
      },
    ],
  },
];
