  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var close = document.querySelector('.main-nav__button');

  if (navMain) {navMain.classList.add('main-nav--closed');
  };

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    };
  });

close.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  };
});
