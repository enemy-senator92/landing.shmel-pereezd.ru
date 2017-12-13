'use strict';

// мобильное меню
const mobileMenu = () => {
    let menu = $('.menu__wrap'),
        header = $('.header');

    $('.btn_menu').on('click', function () {
        if(menu.css('opacity') === '0'){
            menu.addClass('menu__wrap-opend');
            header.addClass('header-opend');
            $(this).addClass('btn_menu-trigger');
        } else {
            menu.removeClass('menu__wrap-opend');
            header.removeClass('header-opend');
            $(this).removeClass('btn_menu-trigger');
        }
    });
};

// услуги меню
const serviceMenu = () => {
    let menu = $('.menu_services__wrap'),
        header = $('.menu_services');

    $('.btn_services').on('click', function () {
        if(menu.css('opacity') === '0'){
            menu.addClass('menu_services__wrap-opend');
            header.addClass('menu_services-opend');
            $('body').addClass('lock');
            $(this).addClass('btn_services-trigger');
        } else {
            menu.removeClass('menu_services__wrap-opend');
            header.removeClass('menu_services-opend');
            $('body').removeClass('lock');
            $(this).removeClass('btn_services-trigger');
        }
    });

    $(document).keydown(function(e) {
        if( e.keyCode === 27 ) {
            e.preventDefault();
            if(menu.css('opacity') === '0'){
                menu.removeClass('menu_services__wrap-opend');
                header.removeClass('menu_services-opend');
                $('body').removeClass('lock');
                $('.btn_services').removeClass('btn_services-trigger');
            }
        }
    });

    $('.menu_services__close').on('click', function (e) {
        e.preventDefault();
        if(menu.css('opacity') === '1'){
            menu.removeClass('menu_services__wrap-opend');
            header.removeClass('menu_services-opend');
            $('body').removeClass('lock');
            $('.btn_services').removeClass('btn_services-trigger');
        }
    });

};

// перебор слайдеров на главной
function sliderMain() {
    $('.slides__one').each(function (index, element) {
        console.log(element);
        $(this).addClass('slides__one-'+index);

        $('.slides__one-'+index+' .big_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slides__one-'+index+' .small_slider__wrap'
        });
        $('.slides__one-'+index+' .small_slider__wrap').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slides__one-'+index+' .big_slider',
            dots: false,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '.slides__one-'+index+' .small_slider__arrow-prev',
            nextArrow: '.slides__one-'+index+' .small_slider__arrow-next',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {

                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {

                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 478,
                    settings: {

                        slidesToShow: 3,
                    }
                }
            ]
        });
    });
}

$(function () {
    mobileMenu();
    serviceMenu();
    sliderMain();

    $(window).on('resize', function(){

    }).trigger('resize');

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", {showMaskOnHover: false});
    });
});