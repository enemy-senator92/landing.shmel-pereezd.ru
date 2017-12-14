'use strict';


$(function () {

    // слайдер с категориями машин
    $('.choice').owlCarousel({
        margin: 0,
        loop: false,
        autoWidth: true,
        items: 6,
        nav: false,
        responsive: {
            0:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:5
            }
        }
    });

    // слайдер с отзывами
    let owl = $('.reviews_index__slider');
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        items: 1
    });
    // кастомная кнопка next у слайдера отзывов
    $('.reviews_index__arrow-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    // аккордион
    $('[data-accordion]').accordion();

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", {showMaskOnHover: false});
    });
});