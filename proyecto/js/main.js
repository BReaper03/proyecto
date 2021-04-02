$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });

});

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).ready(function(){
    $('.zoom2').hover(function() {
        $(this).addClass('transition2');
    }, function() {
        $(this).removeClass('transition2');
    });
});