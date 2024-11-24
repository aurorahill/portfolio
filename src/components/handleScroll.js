let viewportHeight = window.innerHeight;
let thresholdShow = viewportHeight * 0.1;
let thresholdHide = viewportHeight * 0.3;

window.addEventListener('resize', () => {
  viewportHeight = window.innerHeight;
  thresholdShow = viewportHeight * 0.1;
  thresholdHide = viewportHeight * 0.3;
});

export function handleScroll(boxClass) {
  const boxes = document.querySelectorAll(boxClass);
  const scrollPosition = window.scrollY;
  boxes.forEach((box) => {
    const boxPosition = box.getBoundingClientRect().top + window.scrollY;

    if (
      scrollPosition + viewportHeight > boxPosition + thresholdShow &&
      !box.classList.contains('visible')
    ) {
      box.classList.add('visible');
    }

    if (
      scrollPosition + viewportHeight < boxPosition + thresholdHide &&
      box.classList.contains('visible')
    ) {
      box.classList.remove('visible');
    }
  });
}
