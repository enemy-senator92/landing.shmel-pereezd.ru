'use strict';



// Валидация
function validateForm() {
    $('[data-validate]').each(function (i,e) {
        if(!$(this).hasClass('validate')){
            $(this).addClass('validate').addClass('validate-'+i);
            $(".validate-"+i).validate({
                errorPlacement: function(error, element) {
                    console.log(error);
                },
                submitHandler: function(form) {
                    console.log(form);
                }
            });
        }
    });
}

$(function () {

    validateForm();

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

    // открытие всплывающего окна
    let arcticObject = null;
    $(document).on('click', '[data-modal]', function (e) {
        e.preventDefault();
        let button = $(this),
            buttonId = button.data('modal'),
            url = button.data('url');

        if(button.data('url')){
            $.arcticmodal({
                overlay: {
                    css: {
                        backgroundColor: 'rgba(0,0,0,.8)',
                        opacity: 1
                    }
                },
                type: 'ajax',
                url: url,
                afterOpen: function(data, el) {
                    if(arcticObject !== null){
                        arcticObject.arcticmodal('close');
                    }

                    if(arcticObject === null) {arcticObject = el;}

                    validateForm();
                },
                afterClose: function(data, el) {
                    arcticObject = null;
                }
            });
        }
        else {
            $(buttonId).arcticmodal({
                overlay: {
                    css: {
                        backgroundColor: 'rgba(0,0,0,.8)',
                        opacity: 1
                    }
                },
                afterOpen: function(data, el) {
                    if(arcticObject !== null){
                        arcticObject.arcticmodal('close');
                    }

                    if(arcticObject === null) {arcticObject = el;}

                    validateForm();
                },
                afterClose: function(data, el) {
                    arcticObject = null;
                }
            });
        }
    });
});