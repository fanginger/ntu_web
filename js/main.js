$(window).on("scroll", function() {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");
    navbar.addClass("nav-scroll");
    $('.navbar-logo img').attr('src', 'images/logo-black.png');

});
$(window).on("load", function() {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

    /* smooth scroll
      -------------------------------------------------------*/
    $.scrollIt({

        easing: 'swing', // the easing function for animation
        scrollTime: 900, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -63
    });

    /* isotope
    -------------------------------------------------------*/
    var $gallery = $('.gallery').isotope({});
    $('.gallery').isotope({

        // options
        itemSelector: '.item-img',
        transitionDuration: '0.5s',

    });


    $(".gallery .single-image").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });


    /* filter items on button click
    -------------------------------------------------------*/
    $('.filtering').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });
    $('.filtering').on('click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');

    });

})

$(function() {
    $(".cover-bg").each(function() {
        var attr = $(this).attr('data-image-src');

        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }

    });

    /* sections background color from data background
    -------------------------------------------------------*/
    $("[data-background-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-background-color"));
    });


    /* Owl Caroursel testimonial
      -------------------------------------------------------*/

    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        margin: 30,
        dots: true,
        nav: false,

    });

});
$(document).ready(function() {
    var filterValue = '.rainy';
    var $gallery = $('.gallery').isotope({});
    $('.btn-1').addClass('active')
    $gallery.isotope({
        filter: filterValue
    });
});

function ChangeActive() {
    var temp = 1
    setInterval(function() {
        $('.filtering button').removeClass('active');
        $('.gallery').isotope({
            filter: $('.btn-' + temp).attr('data-filter')
        });
        $('.btn-' + temp).addClass('active')
        if (temp < 4) {
            temp += 1
        } else {
            temp = 1
        }
    }, 3000);
};
ChangeActive()