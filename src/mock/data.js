import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Audrey Kedzierski', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Sexologue - Services de relation d’aide sexologique et de suivi psychosocial', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Audrey Kedzierski',
  name: 'Sexologue',
  subtitle: 'Services de relation d’aide sexologique et de suivi psychosocial'
};

// ABOUT DATA
export const aboutData = {
  img: 'audrey.jpg',
  paragraphOne: 'Je suis diplômé en Sexologie de l’Université du Québec à Montréal. Membre en règle de l’Ordre des Sexologues du Québec, j’ai exercé dans plusieurs milieux : maison pour personnes âgées autonomes 55+, milieu scolaire, CLSC et bureau de pratique privé. Je cumule 4 ans d’expérience en intervention.',
  paragraphTwo: 'Mon emploi parmi le CISSSMO ainsi que mes expériences de travail antérieures m’ont aidée à approfondir les connaissances et les qualités nécessaires au domaine de la relation d’aide et de l’intervention.',
  paragraphThree: 'J’ai ainsi pu participer à plus de 80 heures de formations diversifiées. Découlant de ses opportunités, j’ai su assumer avec efficacité et dynamisme les différentes responsabilités qui m’ont été confiées telles que le poste de Coordonnatrice clinique. J’ai su me forger une réputation de continuellement aller au-delà des attentes de mes clients et de mes collègues.',
  paragraphFour: 'Dans mon entourage, je suis considérée comme une personne de confiance, dynamique, intellectuellement curieuse et disponible. J’estime que ces qualités sont certainement des atouts dans mon rôle de sexologue.',  
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'J’offre seulement les rencontres de suivi téléphoniques ou en téléconsultation pour l’instant. Il est possible de me contacter pour un rendez-vous au 438-872-5802 ou via ce site web.',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
