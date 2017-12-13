'use strict';


$(function () {

    $('.choice').owlCarousel({
        margin: 0,
        loop:false,
        autoWidth: true,
        items: 6,
        responsive: {
            0:{
                items:2,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            1024:{
                items:5,
                nav:false
            }
        }
    });

    $(window).on('resize', function(){

    }).trigger('resize');

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", {showMaskOnHover: false});
    });
});