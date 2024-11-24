export function sizeUpImage() {
  // Pobieramy wszystkie linki
  const links = document.querySelectorAll('.card__link');

  // Funkcja zmieniająca skalę obrazka
  function handleMouseEnter(event) {
    // Znajdujemy najbliższy kontener .card__content
    const cardContent = event.target.closest('.card__content');
    // Znajdujemy obrazek w kontenerze .card__image-wrapper
    const image = cardContent.querySelector('.card__image');
    // Zmieniamy transformację obrazka
    image.style.transform = 'scale(1.07)';
  }

  // Funkcja przywracająca oryginalną skalę obrazka
  function handleMouseLeave(event) {
    // Znajdujemy najbliższy kontener .card__content
    const cardContent = event.target.closest('.card__content');
    // Znajdujemy obrazek w kontenerze .card__image-wrapper
    const image = cardContent.querySelector('.card__image');
    // Przywracamy transformację obrazka do pierwotnego stanu
    image.style.transform = 'scale(1)';
  }

  // Dodajemy eventy do linków
  links.forEach((link) => {
    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);
  });
}
