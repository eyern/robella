// Template slider jQuery script

$(document).on('ready', function () {
    "use strict";
    $(".slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 3000,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        addClassActive: true,



        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});


// homepage slider
$(".homepage-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1,
            nav:true,
            loop:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});


// homepage slides animations
$(".homepage-slider").on("translate.owl.carousel", function () {
    $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({ 'opacity': '0' });
    $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.3s' });
    $(".hero-btns").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
});

$(".homepage-slider").on("translated.owl.carousel", function () {
    $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({ 'opacity': '0' });
    $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.3s' });
    $(".hero-btns").addClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
});
