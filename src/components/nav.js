const handleNav = () => {
  const navList = document.querySelector('.nav__links');

  document.querySelector('main').addEventListener('click', () => {
    if (navList.classList.contains('show')) {
      navList.classList.remove('show');
    }
  });

  const showMenu = () => {
    const isShowMenu = navList.classList.toggle('show');
    document.querySelector('.nav__menu-btn').innerText = isShowMenu
      ? 'Close'
      : 'Menu';
  };

  document.querySelector('.nav__menu-btn').addEventListener('click', showMenu);
};

handleNav();
