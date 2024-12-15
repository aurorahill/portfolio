import '../components/fadeOut';
import '../components/nav';
import '../components/toggleMode';
import '../components/footer';
import { sizeUpImage } from '../components/sizeUpImage';
import '../sass/index.scss';
import projectImg1 from '../images/music-player_600.jpg';
import projectImg2 from '../images/cukiernia-malinka_600.jpg';
import projectImg3 from '../images/gemini-clone_600.jpg';
import projectImg4 from '../images/koryl-meble_600.jpg';
import projectImg5 from '../images/currency-converter_600.jpg';
import projectImg6 from '../images/to-do-list_600.jpg';
import projectImg7 from '../images/night-sky_600.jpg';
import projectImg8 from '../images/little-lemon_600.jpg';
import projectImg9 from '../images/color-board_600.jpg';
import projectImg10 from '../images/brainwave_600.jpg';
import projectImg11 from '../images/portfolio_600.jpg';
import projectImg12 from '../images/find-coach_600.jpg';
import '../components/handleScroll';
import { handleScroll } from '../components/handleScroll';
import { createProjectCard } from '../components/createProjectCard';

const projectList = [
  {
    title: 'Find a Coach',
    content:
      'SPA created in VUE curse using: Vue3, Vuex, Vue Router, Firebase Realtime Database, Firebase Authentication and Firebase Hosting',
    img: projectImg12,
    alt: 'Find a Coach',
    githubUrl: 'https://github.com/aurorahill/coach-list-project',
    url: 'https://coach-project-824fc.web.app/',
  },
  {
    title: 'Music Player',
    content: 'Beautiful music player created with React.js and Vite',
    img: projectImg1,
    alt: 'Music player website',
    githubUrl: 'https://github.com/aurorahill/music-player',
    url: 'https://aurorahill.github.io/music-player/',
  },
  {
    title: 'Malinka',
    content:
      'Multipage website for confectionery create using HTML, SASS, JavaScript and Webpack',
    img: projectImg2,
    alt: 'Malinka confectionery website',
    githubUrl: 'https://github.com/aurorahill/cukiernia-malinka',
    url: 'https://aurorahill.github.io/cukiernia-malinka/',
  },
  {
    title: 'Portfolio',
    content: 'My portfolio create using HTML, SASS, JavaScript and Webpack',
    img: projectImg11,
    alt: 'My portfolio',
    githubUrl: 'https://github.com/aurorahill/portfolio',
    url: '../index.html',
  },
  {
    title: 'Gemini Clone',
    content:
      'A simplified version of the Gemini chatbot was created using the Google Chat API, along with HTML, SASS, JavaScript, and Webpack',
    img: projectImg3,
    alt: 'Malinka confectionery website',
    githubUrl: 'https://github.com/aurorahill/gemini-clone',
    url: 'https://aurorahill.github.io/gemini-clone/',
  },
  {
    title: 'Koryl MEBLE',
    content:
      'Landing page for carpentry company create using HTML, SASS, JavaScript and Webpack',
    img: projectImg4,
    alt: 'Koryl Meble company website',
    githubUrl: 'https://github.com/aurorahill/koryl-meble',
    url: 'https://aurorahill.github.io/koryl-meble/',
  },
  {
    title: 'Currency Converter',
    content:
      'Web application using the free API of the National Bank of Poland create using React and Vite',
    img: projectImg5,
    alt: 'Currency converter application',
    githubUrl: 'https://github.com/aurorahill/currency-converter',
    url: 'https://aurorahill.github.io/currency-converter/',
  },
  {
    title: 'To Do App',
    content:
      'Classic "To do list" application created in React and Vite with the ability to add tasks to the appropriate group, edit tasks and search engine  ',
    img: projectImg6,
    alt: 'To do list application',
    githubUrl: 'https://github.com/aurorahill/to-do-app',
    url: 'https://aurorahill.github.io/to-do-app/',
  },
  {
    title: 'Brainwave',
    content:
      'Landing Page built to practice React components and Tailwind customization. Project was created from scratch following the JavaScript Mastery tutorial',
    img: projectImg10,
    alt: 'Brainwave',
    githubUrl: 'https://github.com/aurorahill/brainwave',
    url: 'https://aurorahill.github.io/brainwave/',
  },
  {
    title: 'Night Sky',
    content:
      'A simple night sky design with generating constellations made using canvas create using JavaScript',
    img: projectImg7,
    alt: 'Night sky',
    githubUrl: 'https://github.com/aurorahill/night-sky',
    url: 'https://aurorahill.github.io/night-sky/',
  },
  {
    title: 'Little Lemon',
    content:
      'SPA created in React with controlled form with validation, made for the Meta Front-End Developer professional course credit',
    img: projectImg8,
    alt: 'Little Lemon restaurant website',
    githubUrl: 'https://github.com/aurorahill/little-lemon',
    url: 'https://aurorahill.github.io/little-lemon/',
  },
  {
    title: 'Color board',
    content:
      'Move the mouse and color the board. An eye-pleasing JavaScript experience',
    img: projectImg9,
    alt: 'Color board application',
    githubUrl: 'https://github.com/aurorahill/color-board',
    url: 'https://aurorahill.github.io/color-board/',
  },
];

createProjectCard(projectList);

let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll('.projects-section__item');
      isScrolling = false;
    });
    isScrolling = true;
  }
});

sizeUpImage();
