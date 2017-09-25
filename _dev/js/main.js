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

$(document).ready(function(){
    mobileMenu();
});