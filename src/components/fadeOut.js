const fadeOut = () => {
  const links = document.querySelectorAll('.nav__link, .nav__logo');

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      document.body.classList.remove('fade-out');
      document.body.style.opacity = '1'; // Przywraca widoczność, jeśli była pamięć podręczna
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      // Wyklucz linki prowadzące do "#"
      if (link.getAttribute('href') === '#') return;

      event.preventDefault();

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = link.href;
      }, 1000);
    });
  });
};

fadeOut();
