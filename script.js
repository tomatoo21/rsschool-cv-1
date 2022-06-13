document.addEventListener('DOMContentLoaded', function(e){
  let button = document.querySelector('.header__burger');

  button.onclick = () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  }

  let item = document.querySelectorAll('.nav__item');
  for (var items of item) {
    items.onclick = () => {
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.header__nav').classList.remove('active');
      document.querySelector('body').classList.remove('lock');
      location.reload();
    };
  }
});
