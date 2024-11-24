const toggleMode = () => {
  const loadLocalStorageData = () => {
    const isLightMode = localStorage.getItem('themeColor') === 'light_mode';
    document.body.classList.toggle('light_mode', isLightMode);
    toggleModeButton.innerHTML = isLightMode
      ? `Mode <i class="far fa-moon"></i>`
      : `Mode <i class="main-btn__icon far fa-circle"></i>`;
  };

  const toggleModeButton = document.querySelector('.nav__mode-btn');

  toggleModeButton.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light_mode');
    localStorage.setItem(
      'themeColor',
      isLightMode ? 'light_mode' : 'dark_mode'
    );
    toggleModeButton.innerHTML = isLightMode
      ? `Mode <i class="far fa-moon"></i>`
      : `Mode <i class="main-btn__icon far fa-circle"></i>`;
  });
  loadLocalStorageData();
};

toggleMode();
