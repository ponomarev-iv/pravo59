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
    var scrollBtn = $('.js-scroll-link');

    if(scrollBtn.length){
        scrollBtn.on('click', function(e){
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body, html').animate({scrollTop: top}, 900);
        })
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

function activateMenuLink(){
    $('a.nav-menu__link').each(function(){
        var location = window.location.href,
            link = this.href;

        if(location == link) {
            $(this).addClass('current');
        }
    })
}

function accordionInit(){
    var btn = $('.js-faq');

    if(btn.length){
        $(btn).on('click', function() {
            if($(this).hasClass('is-open')){
                $(this).removeClass('is-open')
            }
            else{
                $(btn).removeClass('is-open');
                $(this).addClass('is-open');
            }
            $(btn.next()).not($(this).next()).slideUp(400);
            $(this).next().slideToggle(400);
        })
    }
}

$(document).ready(function(){
    mobileMenu();
    scrollDown();
    magnificInit();
    dropMenu();
    activateMenuLink();
    accordionInit();
});