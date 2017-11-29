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
                top = $(id).offset().top - 90;

            $('body, html').animate({scrollTop: top}, 1000);
        })
    }
    else return false;
}

//animation hero banner
function animateHero(){
    if($('.hero__title').length){
        var header = $('.header'),
            heroTitle = $('.hero__title'),
            heroSubtitle = $('.hero__subtitle'),
            heroBtn = $('.hero__btn'),
            heroList = $('.hero__list li'),
            tl = new TimelineLite();

        tl
            .from(header, .6, {y: -35, autoAlpha: 0, ease:Power1.easeOut})
            .from(heroTitle, 0.4, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
            .from(heroSubtitle, 0.4, {y: -30, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
            .from(heroList, 0.4, {x: -50, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
            .from(heroBtn, 0.4, {y: 20, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');
    }
    else return false;
}

function magnificInit() {

    if($('.js-open-popup').length){
        $('.js-open-popup').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
    else return false;
}

function dropMenu(){
    var btn = $('.js-drop-link');

    if(btn.length){
        $(btn)
            .mouseenter(function(){
                $('.js-drop-menu').addClass('is-view')
            })
            .mouseleave(function(){
                $('.js-drop-menu').removeClass('is-view')
            })
    }
}

$(document).ready(function(){
    mobileMenu();
    scrollDown();
    animateHero();
    magnificInit();
    dropMenu();
});