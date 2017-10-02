/**
 * Created by Pompo on 22.09.2017.
 */
function mobileMenu(){
    var $mobileBtn = $('.js-menu'),
        $mobileMenu = $('.js-mobile-menu');

    $mobileBtn.click(function(){
        $(this).toggleClass('open');
        $mobileMenu.toggleClass('is-open');
    });

    $('#page-wrap').click(function(){
        $mobileBtn.removeClass('open');
        $mobileMenu.removeClass('is-open');
    })
}

function scrollDown(){
    var scrollBtn = $('.js-scroll-down');

    if(scrollBtn.length){
        scrollBtn.on('click', function(e){
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body, html').animate({scrollTop: top}, 1000);
        })
    }
    else return false;
}

$(document).ready(function(){
    mobileMenu();
    scrollDown();
});