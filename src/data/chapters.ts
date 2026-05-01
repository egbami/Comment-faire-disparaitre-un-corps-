import type { Chapter } from '../types'

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: '01',
    title: 'La Décomposition',
    subtitle: 'Ce que la mort fait à la chair',
    tag: 'Biologie post-mortem',
    body: [
      "Commençons par l'évidence. Ce qui meurt se défait. Mais la façon dont un corps humain se défait est d'une précision presque indécente — comme si la biologie avait tout prévu, jusqu'au dernier atome.",
      "Deux processus entrent en jeu : d'abord l'autolyse, cette auto-digestion cellulaire qui commence dès que le cœur s'arrête. Sans oxygène, sans ATP pour alimenter les pompes ioniques, les cellules s'effondrent de l'intérieur. Elles libèrent leurs propres enzymes digestives — les lysosomes — qui dévorent les membranes depuis le dedans.",
      "Puis vient la putréfaction. Les bactéries intestinales, libérées de leurs contraintes habituelles, colonisent le reste du corps. Champignons, micro-organismes extérieurs prennent le relais. En quelques semaines à quelques mois selon la chaleur, l'humidité, l'exposition, un corps de 70 kg se réduit à ses composants essentiels.",
      "Les médecins légistes utilisent précisément cette chronologie pour dater les morts. Chaque stade est une horloge. La science de la mort est aussi la science du temps."
    ],
    fact: "Un corps enterré sans cercueil peut se décomposer complètement en 8 à 12 ans. En milieu humide, en quelques mois."
  },
  {
    id: 2,
    number: '02',
    title: 'La Crémation',
    subtitle: 'Réduire 70 kg à une poignée de cendres',
    tag: 'Thermochimie',
    body: [
      "La crémation, c'est la version accélérée et contrôlée de ce que la nature fait en des années. Entre 800 et 1 000 °C, les tissus mous s'évaporent en vapeur d'eau, en gaz carbonique, en composés azotés. Là où la biologie prend des mois, la chaleur prend quelques heures.",
      "Ce qu'il reste après ? Entre 2 et 3,5 kg de fragments osseux. Principalement du phosphate de calcium et du carbonate de calcium — les mêmes minéraux que dans les os vivants, désormais cristallisés et friables. Ces fragments sont ensuite broyés en poudre fine, ce qu'on appelle communément les cendres.",
      "La matière n'a pas disparu. Elle s'est juste redistribuée : une partie dans l'air que vous respirez maintenant, une partie dans ces quelques kilos de sels minéraux que la famille rapporte chez elle dans une urne.",
      "La crémation n'efface rien. Elle transforme."
    ],
    fact: "Les 2 à 3,5 kg de restes osseux sont surtout composés de phosphate de calcium (Ca₃(PO₄)₂) — le même sel que dans vos os en ce moment."
  },
  {
    id: 3,
    number: '03',
    title: 'La Dissolution Alcaline',
    subtitle: "L'aquamation, ou disparaître en liquide",
    tag: 'Chimie industrielle',
    body: [
      "Moins connue que la crémation mais tout aussi fascinante : l'hydrolyse alcaline, aussi appelée aquamation ou résomation. Le principe ? Dissoudre le corps dans une solution chaude de soude (NaOH) ou de potasse (KOH), sous pression.",
      "Les conditions opératoires sont précises : eau chauffée à 150-180 °C, pression maintenue autour de 10 bars pour que le liquide ne s'évapore pas. Durée du processus : 3 à 6 heures. Ce qui sort de la cuve ? Un liquide stérile, légèrement ambré, et des fragments osseux friables — plus doux encore qu'après crémation.",
      "Le liquide résultant est chimiquement neutre : des acides aminés, des peptides, des sucres. Rien de toxique. Certains systèmes l'utilisent comme fertilisant. Le corps redevient littéralement nourriture pour la terre.",
      "C'est la méthode la plus douce thermiquement, la plus discrète chimiquement, et paradoxalement la plus complète : elle dissout même les prions, ces protéines pathologiques que la crémation ne détruit pas toujours."
    ],
    fact: "L'aquamation utilise 90% moins d'énergie que la crémation traditionnelle. Elle est légale dans plusieurs États américains et en voie de légalisation dans de nombreux pays."
  },
  {
    id: 4,
    number: '04',
    title: 'Lavoisier & la Conservation',
    subtitle: 'Rien ne se perd, rien ne se crée',
    tag: 'Chimie fondamentale',
    body: [
      "Antoine Lavoisier, chimiste français du XVIIIe siècle, a posé le principe qui rend toute disparition impossible. Sa loi de conservation de la matière est d'une brutalité élégante : lors de toute transformation chimique, le nombre d'atomes reste absolument identique.",
      "\"Rien ne se perd, rien ne se crée, tout se transforme.\" Cette formule lapidaire résume l'impossibilité fondamentale de faire disparaître quoi que ce soit. Brûler un corps, le dissoudre, le laisser pourrir — à chaque fois, on ne fait que réarranger des atomes. Les mêmes atomes. Toujours.",
      "Le carbone d'une flamme devient CO₂ dans l'atmosphère. L'azote d'un muscle rejoint le cycle de l'azote des sols. L'hydrogène de votre eau corporelle s'évapore, monte, redescend sous forme de pluie. Vos atomes sont en circulation perpétuelle depuis la formation de la Terre.",
      "Vous n'avez pas de corps. Vous êtes un passage temporaire pour des atomes qui vous ont précédé et vous survivront de milliards d'années."
    ],
    fact: "Lavoisier a formulé cette loi en 1789, l'année même où la Révolution française lui coûtera la tête — une ironie que l'histoire n'a pas raté."
  },
  {
    id: 5,
    number: '05',
    title: 'La Composition du Corps',
    subtitle: 'Six éléments. C\'est tout.',
    tag: 'Biochimie',
    body: [
      "Regardez-vous. Toute cette complexité — 37 000 milliards de cellules, 200 types tissulaires différents, un cerveau capable de lire ces mots et de se demander ce qu'ils signifient — est construite à partir de six éléments seulement.",
      "Oxygène, Carbone, Hydrogène, Azote, Calcium, Phosphore. Ces six-là constituent 99 % de votre masse corporelle. Les 1 % restants ? Du soufre, du potassium, du sodium, du magnésium, du fer, du zinc... des traces de molybdène, de vanadium, d'étain.",
      "Ce que vous êtes en termes chimiques : principalement de l'eau (65 % du poids — environ 45,5 kg pour un adulte de 70 kg), du carbone organique dans les protéines et lipides, de l'azote dans vos acides aminés, du calcium dans vos os.",
      "La vie, c'est de la chimie ordinaire arrangée de manière extraordinaire. Et quand cette organisation s'effondre, les éléments retournent là où ils étaient avant d'être vous."
    ],
    fact: "L'hydrogène représente près de 60 % des atomes de votre corps — et il a été formé dans les 3 premières minutes après le Big Bang, il y a 13,8 milliards d'années."
  },
  {
    id: 6,
    number: '06',
    title: "L'Énergie Cachée",
    subtitle: 'Ce que votre eau vaut en joules',
    tag: 'Thermodynamique',
    body: [
      "Votre corps est une bombe chimique qui s'ignore. Pas de façon métaphorique — de façon littéralement calculable. Pour briser toutes les liaisons moléculaires d'un corps humain de 70 kg, il faut mobiliser une énergie précise.",
      "Commençons par l'eau : l'énergie de liaison pour briser une mole d'eau est d'environ 923 kJ/mol. Votre corps contient 65 % d'eau — soit 45,5 kg d'eau pour 70 kg. Cette masse représente 2 528 moles d'eau (masse molaire = 18 g/mol). Multipliez par l'énergie de liaison : 2,3 milliards de joules — et ce rien que pour l'eau.",
      "Pour tout le reste — protéines, lipides, ADN, membranes cellulaires — l'addition monte encore. L'énergie totale contenue dans les liaisons chimiques de votre corps est colossal. C'est cette énergie que les processus de décomposition, crémation ou dissolution libèrent progressivement.",
      "La vie n'est pas qu'une organisation — c'est une réserve d'énergie maintenue sous forme de liaisons chimiques. La mort, c'est la libération de cette énergie dans le temps."
    ],
    fact: "2,3 milliards de joules — rien que pour l'eau corporelle. C'est l'équivalent d'environ 550 tonnes de TNT. Vous êtes plus puissant que vous ne le croyez."
  },
  {
    id: 7,
    number: '07',
    title: 'Les Fours Industriels',
    subtitle: 'Quand la chaleur industrielle entre en scène',
    tag: 'Génie industriel',
    body: [
      "Si la crémation ne suffit pas à vos ambitions de disparition totale, il existe une gamme d'équipements industriels capables d'aller beaucoup plus loin. Les fours métallurgiques opèrent à des températures autrement plus sérieuses.",
      "Trois grandes familles : les fours à combustion (gaz ou fuel, jusqu'à 1 700 °C), utilisés pour fondre des métaux comme l'acier ou la fonte. Les fours à résistance électrique, plus précis et propres, capables d'atteindre 3 000 °C pour des applications céramiques ou spécialisées. Les fours à arc électrique, les monstres de la catégorie : un arc entre des électrodes peut générer des températures supérieures à 3 500 °C.",
      "À ces températures, les os eux-mêmes — qui résistent à la crémation standard — se vitrifiaient, se fondent, disparaissent dans les fumées. Même les métaux d'implants dentaires, les prothèses articulaires, ne résistent plus.",
      "L'industrie a développé ces outils pour fondre de l'acier, pas des corps. Mais la physique ne fait pas de distinction entre les matériaux."
    ],
    fact: "Un four à arc électrique d'aciérie peut fondre 150 à 300 tonnes d'acier en moins d'une heure à plus de 1 600 °C. La barrière entre industriel et existentiel est souvent plus mince qu'on croit."
  },
  {
    id: 8,
    number: '08',
    title: 'Nucléosynthèse Stellaire',
    subtitle: "Vos atomes sont nés dans des étoiles mortes",
    tag: 'Astrophysique',
    body: [
      "On recule maintenant très loin. Pas quelques siècles — quelques milliards d'années. Pour comprendre d'où viennent les atomes de votre corps, il faut comprendre comment les étoiles meurent.",
      "Les éléments légers — hydrogène, hélium, traces de lithium — ont été forgés dans les premières minutes après le Big Bang, lors de la nucléosynthèse primordiale. Mais tout le reste — carbone, oxygène, azote, calcium, phosphore, fer — a été synthétisé à l'intérieur d'étoiles, par fusion nucléaire.",
      "Quand une étoile massive arrive en fin de vie et explose en supernova, elle disperse dans l'espace ces atomes fraîchement synthétisés. Des nuages de gaz et de poussières se contractent sous la gravité, forment de nouvelles étoiles, de nouveaux systèmes planétaires. Sur l'une de ces planètes, ces atomes se sont assemblés en vous.",
      "Vous n'êtes pas faits de poussière d'étoiles de façon poétique. Vous l'êtes de façon littérale et chimiquement précise. Vos atomes de carbone ont été forgés dans le cœur d'une étoile morte il y a des milliards d'années."
    ],
    fact: "L'hydrogène, qui forme 60 % des atomes de votre corps, a 13,8 milliards d'années. Il a existé avant les étoiles, avant la Terre, avant la vie. Il existera après."
  },
  {
    id: 9,
    number: '09',
    title: "L'Antimatière",
    subtitle: "La disparition absolue existe. Elle a un prix.",
    tag: 'Physique des particules',
    body: [
      "On entre dans la science-fiction rendue réelle. L'antimatière est la seule méthode connue capable d'effacer réellement de la matière — de la convertir intégralement en énergie, sans laisser de résidu matériel.",
      "Le principe : chaque particule de matière a son antiparticule de masse identique mais de charge opposée. Quand une particule rencontre son antiparticule, elles s'annihilent mutuellement en libérant des photons gamma. Zéro matière résiduelle. Uniquement de l'énergie.",
      "Le problème ? Produire de l'antimatière est astronomiquement difficile. Le LHC (Grand Collisionneur de Hadrons) au CERN dépense environ 130 000 francs suisses par an pour produire... 12 picogrammes d'antiprotons. Un picogramme, c'est 10⁻¹² grammes. Une multiplication rapide donne le coût pour un gramme d'antimatière : 8 000 trillions de francs suisses.",
      "Pour annihiler 70 kg de corps humain, il faudrait 70 kg d'antimatière. Le coût serait de l'ordre de 10²⁶ francs suisses. Le PIB mondial annuel est d'environ 10¹³ dollars. Le calcul est sans appel."
    ],
    fact: "8 000 trillions de CHF pour un gramme d'antimatière. Il faudrait la production économique de l'humanité pendant des millions d'années pour en produire assez pour une seule personne."
  },
  {
    id: 10,
    number: '10',
    title: 'E = mc²',
    subtitle: "200 000 bombes d'Hiroshima, encapsulées en vous",
    tag: 'Relativité restreinte',
    body: [
      "Einstein, 1905. Quatre caractères qui résument la relation entre matière et énergie : E = mc². L'énergie au repos d'un objet est égale à sa masse multipliée par la vitesse de la lumière au carré. Et c, 300 000 km/s, est un nombre tellement grand que même une masse infime renferme une énergie colossale.",
      "Calculons. Si on annihilait 70 kg de matière avec 70 kg d'antimatière correspondante, l'énergie libérée serait : 140 × (300 000 000)² = 1,26 × 10¹⁹ joules.",
      "Pour comparer : une tonne de TNT libère environ 4,158 × 10⁹ joules. L'énergie d'annihilation d'un corps de 70 kg équivaut donc à 3 milliards de tonnes de TNT. La bombe d'Hiroshima libérait l'équivalent de 15 000 tonnes. Notre calcul représente 200 000 bombes d'Hiroshima.",
      "Votre corps ne pèse pas 70 kg. Il vaut 200 000 bombes atomiques. La matière est la forme la plus dense d'énergie que l'univers ait inventée."
    ],
    fact: "E = mc² signifie que la masse est de l'énergie comprimée. 1 kg de matière converti en énergie pure libèrerait l'équivalent de 21,5 mégatonnes de TNT."
  },
  {
    id: 11,
    number: '11',
    title: 'Le Rayonnement Gamma',
    subtitle: "Le rayon de la mort à 33 000 km",
    tag: 'Physique des rayonnements',
    body: [
      "Hypothèse de travail : on annihile un corps à une altitude quelconque. L'énergie libérée part en photons gamma dans toutes les directions. Question : à quelle distance est-on encore en danger ?",
      "Calculons la sphère de danger. À 33 000 km de rayon, la surface est de 4π × 33 000 000² ≈ 1,37 × 10¹⁶ m². En divisant l'énergie totale d'annihilation par cette surface, on obtient une densité énergétique d'environ 920 J/m².",
      "Un être humain de face expose environ 0,7 m² de surface. Il absorberait donc 0,7 × 920 ≈ 644 joules. Divisés par sa masse de 70 kg : 9,2 gray. L'unité gray mesure l'énergie de rayonnement absorbée par kilogramme de tissu.",
      "5 gray, c'est déjà une dose létale à 50 %. À 9,2 gray — qui correspond à la dose reçue à 33 000 km de l'annihilation — la mortalité est de 100 %. À 33 000 km. L'annihilation d'un seul corps irradierait fatalement toute vie dans une sphère de 33 000 km de rayon."
    ],
    fact: "33 000 km, c'est presque le diamètre de la Terre (12 742 km). L'annihilation d'un seul corps tuerait par radiation toute vie sur la planète entière."
  },
  {
    id: 12,
    number: '12',
    title: 'Le Trou Noir',
    subtitle: "La seule prison dont rien ne revient",
    tag: 'Relativité générale',
    body: [
      "Dernière option. Celle qui semble la plus radicale, la plus définitive. Le trou noir — une région de l'espace où la courbure gravitationnelle est telle que rien, pas même la lumière, ne peut s'en échapper au-delà de l'horizon des événements.",
      "Mais même là, la disparition n'est pas complète. Première subtilité : la masse d'un objet qui tombe dans un trou noir s'ajoute à sa masse totale. La matière n'est pas détruite — elle est piégée. Concentrée. Inaccessible, mais existante.",
      "Deuxième paradoxe : pour un observateur extérieur, à cause de la dilatation gravitationnelle du temps, on ne voit jamais réellement un corps franchir l'horizon. Sa lumière se décale vers le rouge, ralentit, s'estompe infiniment sans jamais tout à fait s'éteindre. L'image du corps reste, en théorie, gravée sur le bord du trou noir pour l'éternité.",
      "Troisième mystère : le paradoxe de l'information. Les trous noirs s'évaporent lentement par rayonnement de Hawking. Quand ils disparaissent, que devient l'information de tout ce qu'ils ont avalé ? C'est l'une des grandes questions ouvertes de la physique théorique. Rien ne se perd — mais où va l'information ?"
    ],
    fact: "Vu de l'extérieur, un objet qui tombe dans un trou noir ne le franchit jamais vraiment — il ralentit infiniment, rougit, s'estompe. L'horizon des événements est la prison parfaite : on y entre mais on n'en sort pas."
  }
]
