$(function() {
    var lastScrollTop = 0;
    var delta = 15;

  $(window).scroll(function(event) {

    var st = $(this).scrollTop();
    var menu = $('.header nav ul.menu');
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      $(".header").css({
        "top": "-82px"
      });

      
    } else {
      $(".header").css({
        "top": "0"
      });
    }
    lastScrollTop = st;
  });
});