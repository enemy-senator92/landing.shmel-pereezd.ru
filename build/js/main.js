'use strict';

// Валидация

function validateForm() {
    $('[data-validate]').each(function (i, e) {
        if (!$(this).hasClass('validate')) {
            $(this).addClass('validate').addClass('validate-' + i);
            $(".validate-" + i).validate({
                errorPlacement: function errorPlacement(error, element) {
                    console.log(error);
                },
                submitHandler: function submitHandler(form) {
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
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });

    // слайдер с отзывами
    var owl = $('.reviews_index__slider');
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        items: 1
    });
    // кастомная кнопка next у слайдера отзывов
    $('.reviews_index__arrow-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // аккордион
    $('[data-accordion]').accordion();

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
    });

    // открытие всплывающего окна
    var arcticObject = null;
    $(document).on('click', '[data-modal]', function (e) {
        e.preventDefault();
        var button = $(this),
            buttonId = button.data('modal'),
            url = button.data('url');

        if (button.data('url')) {
            $.arcticmodal({
                overlay: {
                    css: {
                        backgroundColor: 'rgba(0,0,0,.8)',
                        opacity: 1
                    }
                },
                type: 'ajax',
                url: url,
                afterOpen: function afterOpen(data, el) {
                    if (arcticObject !== null) {
                        arcticObject.arcticmodal('close');
                    }

                    if (arcticObject === null) {
                        arcticObject = el;
                    }

                    validateForm();
                },
                afterClose: function afterClose(data, el) {
                    arcticObject = null;
                }
            });
        } else {
            $(buttonId).arcticmodal({
                overlay: {
                    css: {
                        backgroundColor: 'rgba(0,0,0,.8)',
                        opacity: 1
                    }
                },
                afterOpen: function afterOpen(data, el) {
                    if (arcticObject !== null) {
                        arcticObject.arcticmodal('close');
                    }

                    if (arcticObject === null) {
                        arcticObject = el;
                    }

                    validateForm();
                },
                afterClose: function afterClose(data, el) {
                    arcticObject = null;
                }
            });
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidmFsaWRhdGVGb3JtIiwiJCIsImVhY2giLCJpIiwiZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ2YWxpZGF0ZSIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwib3dsQ2Fyb3VzZWwiLCJtYXJnaW4iLCJsb29wIiwiYXV0b1dpZHRoIiwiaXRlbXMiLCJuYXYiLCJyZXNwb25zaXZlIiwib3dsIiwiY2xpY2siLCJ0cmlnZ2VyIiwiYWNjb3JkaW9uIiwiZG9jdW1lbnQiLCJvbiIsImlucHV0bWFzayIsInNob3dNYXNrT25Ib3ZlciIsImFyY3RpY09iamVjdCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiYnV0dG9uSWQiLCJkYXRhIiwidXJsIiwiYXJjdGljbW9kYWwiLCJvdmVybGF5IiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInR5cGUiLCJhZnRlck9wZW4iLCJlbCIsImFmdGVyQ2xvc2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUlBOztBQUNBLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEJDLE1BQUUsaUJBQUYsRUFBcUJDLElBQXJCLENBQTBCLFVBQVVDLENBQVYsRUFBWUMsQ0FBWixFQUFlO0FBQ3JDLFlBQUcsQ0FBQ0gsRUFBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsVUFBakIsQ0FBSixFQUFpQztBQUM3QkosY0FBRSxJQUFGLEVBQVFLLFFBQVIsQ0FBaUIsVUFBakIsRUFBNkJBLFFBQTdCLENBQXNDLGNBQVlILENBQWxEO0FBQ0FGLGNBQUUsZUFBYUUsQ0FBZixFQUFrQkksUUFBbEIsQ0FBMkI7QUFDdkJDLGdDQUFnQix3QkFBU0MsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUI7QUFDckNDLDRCQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDSCxpQkFIc0I7QUFJdkJJLCtCQUFlLHVCQUFTQyxJQUFULEVBQWU7QUFD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QUFlLElBQWY7QUFDSDtBQWxCbUIsYUFBeEI7QUFvQkg7QUFDSixLQXBERDtBQXFESCxDQXBHRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcblxyXG4vLyDQktCw0LvQuNC00LDRhtC40Y9cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoaSxlKSB7XHJcbiAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd2YWxpZGF0ZScpLmFkZENsYXNzKCd2YWxpZGF0ZS0nK2kpO1xyXG4gICAgICAgICAgICAkKFwiLnZhbGlkYXRlLVwiK2kpLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICAvLyDRgdC70LDQudC00LXRgCDRgSDQutCw0YLQtdCz0L7RgNC40Y/QvNC4INC80LDRiNC40L1cclxuICAgICQoJy5jaG9pY2UnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICBpdGVtczogNixcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczoyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczozXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0YHQu9Cw0LnQtNC10YAg0YEg0L7RgtC30YvQstCw0LzQuFxyXG4gICAgbGV0IG93bCA9ICQoJy5yZXZpZXdzX2luZGV4X19zbGlkZXInKTtcclxuICAgIG93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBpdGVtczogMVxyXG4gICAgfSk7XHJcbiAgICAvLyDQutCw0YHRgtC+0LzQvdCw0Y8g0LrQvdC+0L/QutCwIG5leHQg0YMg0YHQu9Cw0LnQtNC10YDQsCDQvtGC0LfRi9Cy0L7QslxyXG4gICAgJCgnLnJldmlld3NfaW5kZXhfX2Fycm93LW5leHQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvd2wudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCw0LrQutC+0YDQtNC40L7QvVxyXG4gICAgJCgnW2RhdGEtYWNjb3JkaW9uXScpLmFjY29yZGlvbigpO1xyXG5cclxuICAgIC8vINC80LDRgdC60LAg0YLQtdC70LXRhNC+0L3QsFxyXG4gICAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJ2lucHV0W3R5cGU9dGVsXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7c2hvd01hc2tPbkhvdmVyOiBmYWxzZX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstGB0L/Qu9GL0LLQsNGO0YnQtdCz0L4g0L7QutC90LBcclxuICAgIGxldCBhcmN0aWNPYmplY3QgPSBudWxsO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLW1vZGFsXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBidXR0b25JZCA9IGJ1dHRvbi5kYXRhKCdtb2RhbCcpLFxyXG4gICAgICAgICAgICB1cmwgPSBidXR0b24uZGF0YSgndXJsJyk7XHJcblxyXG4gICAgICAgIGlmKGJ1dHRvbi5kYXRhKCd1cmwnKSl7XHJcbiAgICAgICAgICAgICQuYXJjdGljbW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC44KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBhZnRlck9wZW46IGZ1bmN0aW9uKGRhdGEsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjdGljT2JqZWN0LmFyY3RpY21vZGFsKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ID09PSBudWxsKSB7YXJjdGljT2JqZWN0ID0gZWw7fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbihkYXRhLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyY3RpY09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChidXR0b25JZCkuYXJjdGljbW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC44KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJPcGVuOiBmdW5jdGlvbihkYXRhLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFyY3RpY09iamVjdCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyY3RpY09iamVjdC5hcmN0aWNtb2RhbCgnY2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFyY3RpY09iamVjdCA9PT0gbnVsbCkge2FyY3RpY09iamVjdCA9IGVsO31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24oZGF0YSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmN0aWNPYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il19
