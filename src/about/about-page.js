import '../components/fadeOut';
import '../components/nav';
import '../components/toggleMode';
import { handleScroll } from '../components/handleScroll';
import '../components/footer';
import '../sass/index.scss';

const copyLogos = document
  .querySelector('.about-tech__logos-slide')
  .cloneNode(true);
document.querySelector('.about-tech__logos').appendChild(copyLogos);

let viewportHeight = window.innerHeight;

window.addEventListener('resize', () => {
  viewportHeight = window.innerHeight;
});

function handlePhoto() {
  const photo = document.querySelector('.about-intro__photo');
  const scrollPosition = window.scrollY;
  const maxShift = 0.2 * viewportHeight;
  const newTop = Math.max(-scrollPosition, -maxShift);
  photo.style.top = `${newTop}px`;
}

let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll('.about-tech__text');
      handleScroll('.about-tech__resume');
      handlePhoto();
      isScrolling = false;
    });
    isScrolling = true;
  }
});
