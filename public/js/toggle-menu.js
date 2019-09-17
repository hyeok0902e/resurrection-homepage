$(function() {
    var trigger = $('#trigger');
    var menu = $('.header nav ul.menu');

    $(trigger).on('click', function(e) {
        e.preventDefault(); // trigger의 기본기능 취소
        menu.slideToggle();
    });
    
    $(window).resize(function() {
        var w = $(window).width();
        if (w>320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});