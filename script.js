$(document).ready(function() {
   $('.header__burger').click(function() {
      $('.header__burger,.header__nav,.main__search-parameters').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
