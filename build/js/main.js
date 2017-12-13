'use strict';

// мобильное меню

var mobileMenu = function mobileMenu() {
    var menu = $('.menu__wrap'),
        header = $('.header');

    $('.btn_menu').on('click', function () {
        if (menu.css('opacity') === '0') {
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
var serviceMenu = function serviceMenu() {
    var menu = $('.menu_services__wrap'),
        header = $('.menu_services');

    $('.btn_services').on('click', function () {
        if (menu.css('opacity') === '0') {
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

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            if (menu.css('opacity') === '0') {
                menu.removeClass('menu_services__wrap-opend');
                header.removeClass('menu_services-opend');
                $('body').removeClass('lock');
                $('.btn_services').removeClass('btn_services-trigger');
            }
        }
    });

    $('.menu_services__close').on('click', function (e) {
        e.preventDefault();
        if (menu.css('opacity') === '1') {
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
        $(this).addClass('slides__one-' + index);

        $('.slides__one-' + index + ' .big_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slides__one-' + index + ' .small_slider__wrap'
        });
        $('.slides__one-' + index + ' .small_slider__wrap').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slides__one-' + index + ' .big_slider',
            dots: false,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '.slides__one-' + index + ' .small_slider__arrow-prev',
            nextArrow: '.slides__one-' + index + ' .small_slider__arrow-next',
            responsive: [{
                breakpoint: 1024,
                settings: {

                    slidesToShow: 5
                }
            }, {
                breakpoint: 768,
                settings: {

                    slidesToShow: 4
                }
            }, {
                breakpoint: 478,
                settings: {

                    slidesToShow: 3
                }
            }]
        });
    });
}

$(function () {
    mobileMenu();
    serviceMenu();
    sliderMain();

    $(window).on('resize', function () {}).trigger('resize');

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibW9iaWxlTWVudSIsIm1lbnUiLCIkIiwiaGVhZGVyIiwib24iLCJjc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2VydmljZU1lbnUiLCJkb2N1bWVudCIsImtleWRvd24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic2xpZGVyTWFpbiIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImZhZGUiLCJhc05hdkZvciIsImRvdHMiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwiaW5wdXRtYXNrIiwic2hvd01hc2tPbkhvdmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJQyxPQUFPQyxFQUFFLGFBQUYsQ0FBWDtBQUFBLFFBQ0lDLFNBQVNELEVBQUUsU0FBRixDQURiOztBQUdBQSxNQUFFLFdBQUYsRUFBZUUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ25DLFlBQUdILEtBQUtJLEdBQUwsQ0FBUyxTQUFULE1BQXdCLEdBQTNCLEVBQStCO0FBQzNCSixpQkFBS0ssUUFBTCxDQUFjLGtCQUFkO0FBQ0FILG1CQUFPRyxRQUFQLENBQWdCLGNBQWhCO0FBQ0FKLGNBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLGtCQUFqQjtBQUNILFNBSkQsTUFJTztBQUNITCxpQkFBS00sV0FBTCxDQUFpQixrQkFBakI7QUFDQUosbUJBQU9JLFdBQVAsQ0FBbUIsY0FBbkI7QUFDQUwsY0FBRSxJQUFGLEVBQVFLLFdBQVIsQ0FBb0Isa0JBQXBCO0FBQ0g7QUFDSixLQVZE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O0FBVWxEZSx3QkFBWSxDQUNSO0FBQ0lDLDRCQUFZLElBRGhCO0FBRUlDLDBCQUFVOztBQUVOWixrQ0FBYztBQUZSO0FBRmQsYUFEUSxFQVFSO0FBQ0lXLDRCQUFZLEdBRGhCO0FBRUlDLDBCQUFVOztBQUVOWixrQ0FBYztBQUZSO0FBRmQsYUFSUSxFQWVSO0FBQ0lXLDRCQUFZLEdBRGhCO0FBRUlDLDBCQUFVOztBQUVOWixrQ0FBYztBQUZSO0FBRmQsYUFmUTtBQVZzQyxTQUF0RDtBQWtDSCxLQTdDRDtBQThDSDs7QUFFRG5CLEVBQUUsWUFBWTtBQUNWRjtBQUNBUTtBQUNBTTs7QUFFQVosTUFBRWdDLE1BQUYsRUFBVTlCLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVUsQ0FFaEMsQ0FGRCxFQUVHK0IsT0FGSCxDQUVXLFFBRlg7O0FBSUE7QUFDQWpDLE1BQUVPLFFBQUYsRUFBWUwsRUFBWixDQUFlLE9BQWYsRUFBd0IsaUJBQXhCLEVBQTJDLFlBQVk7QUFDbkRGLFVBQUUsSUFBRixFQUFRa0MsU0FBUixDQUFrQixvQkFBbEIsRUFBd0MsRUFBQ0MsaUJBQWlCLEtBQWxCLEVBQXhDO0FBQ0gsS0FGRDtBQUdILENBYkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5jb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgbGV0IG1lbnUgPSAkKCcubWVudV9fd3JhcCcpLFxyXG4gICAgICAgIGhlYWRlciA9ICQoJy5oZWFkZXInKTtcclxuXHJcbiAgICAkKCcuYnRuX21lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYobWVudS5jc3MoJ29wYWNpdHknKSA9PT0gJzAnKXtcclxuICAgICAgICAgICAgbWVudS5hZGRDbGFzcygnbWVudV9fd3JhcC1vcGVuZCcpO1xyXG4gICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci1vcGVuZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdidG5fbWVudS10cmlnZ2VyJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5yZW1vdmVDbGFzcygnbWVudV9fd3JhcC1vcGVuZCcpO1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2hlYWRlci1vcGVuZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdidG5fbWVudS10cmlnZ2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyDRg9GB0LvRg9Cz0Lgg0LzQtdC90Y5cclxuY29uc3Qgc2VydmljZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWVudSA9ICQoJy5tZW51X3NlcnZpY2VzX193cmFwJyksXHJcbiAgICAgICAgaGVhZGVyID0gJCgnLm1lbnVfc2VydmljZXMnKTtcclxuXHJcbiAgICAkKCcuYnRuX3NlcnZpY2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKG1lbnUuY3NzKCdvcGFjaXR5JykgPT09ICcwJyl7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkQ2xhc3MoJ21lbnVfc2VydmljZXNfX3dyYXAtb3BlbmQnKTtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdtZW51X3NlcnZpY2VzLW9wZW5kJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdidG5fc2VydmljZXMtdHJpZ2dlcicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MoJ21lbnVfc2VydmljZXNfX3dyYXAtb3BlbmQnKTtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdtZW51X3NlcnZpY2VzLW9wZW5kJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdidG5fc2VydmljZXMtdHJpZ2dlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmtleWRvd24oZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKCBlLmtleUNvZGUgPT09IDI3ICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKG1lbnUuY3NzKCdvcGFjaXR5JykgPT09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNsYXNzKCdtZW51X3NlcnZpY2VzX193cmFwLW9wZW5kJyk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ21lbnVfc2VydmljZXMtb3BlbmQnKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJ0bl9zZXJ2aWNlcycpLnJlbW92ZUNsYXNzKCdidG5fc2VydmljZXMtdHJpZ2dlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1lbnVfc2VydmljZXNfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYobWVudS5jc3MoJ29wYWNpdHknKSA9PT0gJzEnKXtcclxuICAgICAgICAgICAgbWVudS5yZW1vdmVDbGFzcygnbWVudV9zZXJ2aWNlc19fd3JhcC1vcGVuZCcpO1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ21lbnVfc2VydmljZXMtb3BlbmQnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJyk7XHJcbiAgICAgICAgICAgICQoJy5idG5fc2VydmljZXMnKS5yZW1vdmVDbGFzcygnYnRuX3NlcnZpY2VzLXRyaWdnZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG4vLyDQv9C10YDQtdCx0L7RgCDRgdC70LDQudC00LXRgNC+0LIg0L3QsCDQs9C70LDQstC90L7QuVxyXG5mdW5jdGlvbiBzbGlkZXJNYWluKCkge1xyXG4gICAgJCgnLnNsaWRlc19fb25lJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzbGlkZXNfX29uZS0nK2luZGV4KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWRlc19fb25lLScraW5kZXgrJyAuYmlnX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVzX19vbmUtJytpbmRleCsnIC5zbWFsbF9zbGlkZXJfX3dyYXAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnNsaWRlc19fb25lLScraW5kZXgrJyAuc21hbGxfc2xpZGVyX193cmFwJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogJy5zbGlkZXNfX29uZS0nK2luZGV4KycgLmJpZ19zbGlkZXInLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuc2xpZGVzX19vbmUtJytpbmRleCsnIC5zbWFsbF9zbGlkZXJfX2Fycm93LXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuc2xpZGVzX19vbmUtJytpbmRleCsnIC5zbWFsbF9zbGlkZXJfX2Fycm93LW5leHQnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0NzgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIG1vYmlsZU1lbnUoKTtcclxuICAgIHNlcnZpY2VNZW51KCk7XHJcbiAgICBzbGlkZXJNYWluKCk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIH0pLnRyaWdnZXIoJ3Jlc2l6ZScpO1xyXG5cclxuICAgIC8vINC80LDRgdC60LAg0YLQtdC70LXRhNC+0L3QsFxyXG4gICAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJ2lucHV0W3R5cGU9dGVsXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7c2hvd01hc2tPbkhvdmVyOiBmYWxzZX0pO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
