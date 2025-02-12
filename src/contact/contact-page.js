import '../components/fadeOut';
import '../components/nav';
import '../components/toggleMode';
import '../sass/index.scss';
import '../components/handleScroll';
import { handleScroll } from '../components/handleScroll';

let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll('.contact-section__card');
      isScrolling = false;
    });
    isScrolling = true;
  }
});
