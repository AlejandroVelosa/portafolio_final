import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEye,

} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/ModaFit.png';
import Work2 from './assets/rickmort.png';
import Work3 from './assets/pokedex1.png';
import Work4 from './assets/ecomerse.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 'home',
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 'about',
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 'portfolio',
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 'contact',
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Alejandro',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Velosa',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Colombia',
  },

  {
    id: 5,
    title: 'Full Stack developer',

  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bogota',
  },

  // {
  //   id: 7,
  //   title: 'Phone : ',
  //   description: '+21621184010',
  // },

  {
    id: 9,
    title: 'language : ',
    description: 'spanish, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '8+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '6+',
    title: 'Front End <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'backend <br /> Projects',
  },

  {
    id: 4,
    no: '4+',
    title: 'Full stack  <br /> Projects',
  },
];

export const resume = [
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2018 - PRESENT',
  //   title: 'Web Developer <span> Envato </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Front End Developer  <span> Academlo </span>',
    desc: 'Front-End developer specialized in React, with experience using libraries to enhance project quality and create optimized interfaces for an excellent user experience. Proficient in crafting custom hooks, CRUD operations, implementing React Router, and utilizing Redux.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Backend Developer  <span> Academlo </span>',
    desc: 'Backend developer proficient in Node.js, PostgreSQL, Express, and SQL, specialized in crafting robust server-side solutions and enhancing data management through well-structured databases.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Google UX Design Professional Certificate (Currently) <span> Google -Coursera </span>',
    desc: 'Currently pursuing the Google UX Design Professional Certificate in conjunction with my studies at Academlo bootcamp. Gaining comprehensive knowledge and skills in UX design, combining theory and practical application to create impactful and user-centered digital experiences',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'B2  ABA English <span> ABA English </span>',
    desc: 'I hold a B2 level certificate in English from ABA English, demonstrating proficiency in the language. This certification validates my ability to effectively communicate and comprehend English at an intermediate level.',
  },
];

import html from './assets/htmltotal.png'
import Js from './assets/java.png'
import css from './assets/css.png'
import redux from './assets/redux.png'
import react from './assets/react.png'
import notejs from './assets/node.png'
import git from './assets/git.png'
import gitHub from './assets/github.png'
import postgress from './assets/postgress.png'

export const skills = [
  {
    id: 1,
    title: 'Html',
    img: html,
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
    img: Js,
  },

  {
    id: 8,
    title: 'React',
    percentage: '85',
    img: react,
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
    img: css,
  },

  {
    id: 4,
    title: 'Redux',
    percentage: '60',
    img: redux,
  },

  {
    id: 5,
    title: 'Note Js',
    percentage: '30',
    img: notejs,
  },

  {
    id: 6,
    title: 'Git',
    percentage: '50',
    img: git,
  },

  {
    id: 7,
    title: 'GitHub',
    percentage: '65',
    img: gitHub,
  },


  {
    id: 9,
    title: 'PostgreSQL',
    percentage: '65',
    img: postgress,
  },

];


export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Moda Fit',
    link: 'https://peppy-faun-d39c6f.netlify.app/#products',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ModaFitAcademlo',
      },
      {
        icon: <FiUser />,
        title: 'personal proyect ',

      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript Css Html ',
      },
      {
        icon: <FaEye />,
        title: 'Preview : ',
        desc: 'https://peppy-faun-d39c6f.netlify.app/#products',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Rick and Morty App',
    link: 'https://rick-and-morty-alejandro.netlify.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'personal proyect ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FaEye />,
        title: 'Preview : ',
        desc: 'https://rick-and-morty-alejandro.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Pokedex App',
    link: 'https://pokedex-alejadro-velosa.netlify.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'personal proyect ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'react , css , javascript',
      },
      {
        icon: <FaEye />,
        title: 'Preview : ',
        desc: 'https://pokedex-alejadro-velosa.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Ecommerce',
    link: 'https://ecomerse-alejandro-velosa.netlify.app/#/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'personal proyect ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'react , css , javascript',
      },
      {
        icon: <FaEye />,
        title: 'Preview : ',
        desc: 'https://ecomerse-alejandro-velosa.netlify.app/#/',
      },
    ],
  },



  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  // {
  //   id: 1,
  //   img: Theme1,
  //   color: 'hsl(252, 35%, 51%)',
  // },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  // {
  //   id: 5,
  //   img: Theme5,
  //   color: 'hsl(43, 74%, 49%)',
  // },

  // {
  //   id: 6,
  //   img: Theme6,
  //   color: 'hsl(339, 81%, 66%)',
  // },

  // {
  //   id: 7,
  //   img: Theme7,
  //   color: 'hsl(80, 61%, 50%)',
  // },

  // {
  //   id: 8,
  //   img: Theme8,
  //   color: 'hsl(19, 96%, 52%)',
  // },

  // {
  //   id: 9,
  //   img: Theme9,
  //   color: '#00FF00',
  // },

  // {
  //   id: 10,
  //   img: Theme10,
  //   color: 'hsl(42, 100%, 50%)',
  // },
];
