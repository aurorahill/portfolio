export const createProjectCard = (listName) => {
  const list = document.querySelector('.projects-section__list');
  listName.forEach((project) => {
    const card = document.createElement('li');
    card.classList.add('projects-section__item', 'card');
    card.innerHTML = `
              <h3 class="card__title">${project.title}</h3>
              <p class="card__text">
                ${project.content}
              </p>
              <div class="card__content">
              <div class="card__image-wrapper">
                <img
                  src=${project.img}
                  alt=${project.alt}
                  class="card__image"
                />
                </div>
                <div class="card__links">
                  <a href=${project.githubUrl} target='_blank' rel='noopener' class="card__link"><i class="fab fa-github"></i></a>
                  <a href=${project.url}  target='_blank' rel='noopener' class="card__link"><i class="fas fa-link"></i></a>
                </div>
              </div>
      `;
    list.appendChild(card);
  });
};
