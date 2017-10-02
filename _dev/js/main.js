/**
 * Created by Pompo on 22.09.2017.
 */
function mobileMenu(){
    var $mobileBtn = $('.js-menu'),
        $mobileMenu = $('.js-mobile-menu');

    $mobileBtn.on('click', function(){
        $(this).toggleClass('open');
        $mobileMenu.toggleClass('is-open');
    });

    $('#page-wrap').on('click', function(){
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

//animation hero banner
function animateHero(){
    var header = $('.header'),
        heroTitle = $('.hero__title'),
        heroBtn = $('.hero__btn'),
        heroList = $('.hero__list li'),
        tl = new TimelineLite();

    tl
        .from(header, 0.4, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(heroTitle, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(heroList, 0.4, {x: -50, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
        .from(heroBtn, 0.3, {y: 20, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');
}

$(document).ready(function(){
    mobileMenu();
    scrollDown();
    animateHero();
});