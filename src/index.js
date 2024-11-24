import './components/fadeOut';
import './components/nav';
import './components/toggleMode';
import './components/footer';
import { sizeUpImage } from './components/sizeUpImage';
import './sass/index.scss';
import projectIntroImg1 from './images/currency-converter_600.jpg';
import projectIntroImg2 from './images/cukiernia-malinka_600.jpg';
import projectIntroImg3 from './images/to-do-list_600.jpg';
import projectIntroImg4 from './images/koryl-meble_600.jpg';
import { createProjectCard } from './components/createProjectCard';
import { handleScroll } from './components/handleScroll';

const projectIntroList = [
  {
    title: 'Currency Converter',
    content:
      'Web application using the free API of the National Bank of Poland create using React and Vite',
    img: projectIntroImg1,
    alt: 'Currency converter application',
    githubUrl: 'https://github.com/aurorahill/currency-converter',
    url: 'https://aurorahill.github.io/currency-converter/',
  },
  {
    title: 'Malinka',
    content:
      'Multipage website for confectionery create using HTML, SASS, JavaScript and Webpack',
    img: projectIntroImg2,
    alt: 'Malinka confectionery website',
    githubUrl: 'https://github.com/aurorahill/cukiernia-malinka',
    url: 'https://aurorahill.github.io/cukiernia-malinka/',
  },
  {
    title: 'To Do App',
    content:
      'Classic "To do list" application created in React and Vite with the ability to add tasks to the appropriate group, edit tasks and search engine  ',
    img: projectIntroImg3,
    alt: 'To do list application',
    githubUrl: 'https://github.com/aurorahill/to-do-app',
    url: 'https://aurorahill.github.io/to-do-app/',
  },
  {
    title: 'Koryl MEBLE',
    content:
      'Landing page for carpentry company create using HTML, SASS, JavaScript and Webpack',
    img: projectIntroImg4,
    alt: 'Koryl Meble company website',
    githubUrl: 'https://github.com/aurorahill/koryl-meble',
    url: 'https://aurorahill.github.io/koryl-meble/',
  },
];

createProjectCard(projectIntroList);

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
