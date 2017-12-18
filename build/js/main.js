'use strict';

// Валидация

function validateForm() {
    $('[data-validate]').each(function (i, e) {
        if (!$(this).hasClass('validate')) {
            $(this).addClass('validate').addClass('validate-' + i);
            $(".validate-" + i).validate({
                errorPlacement: function errorPlacement(error, element) {
                    //console.log(element);
                },
                submitHandler: function submitHandler(form) {
                    //console.log(form);
                    sendForm($(form).serialize(), $(form));
                }
            });
        }
    });
}

// отправка писем AJAX
function sendForm(dataSend, form) {
    $.ajax({
        type: "GET",
        url: "/ajax.php?ajax=Y",
        data: dataSend,
        dataType: "json",
        success: function success(data, type) {
            if (data.ERR == 1) {
                console.log(data.MESSAGE);
            } else if (data.ERR == 2) {
                // валидация выше, поэтому тут все норм
                console.log(data.MESSAGE);
            } else if (data.OK == 1) {
                //console.log(data.MESSAGE);
                $(form).find('.form__success').addClass('form__success-visible');
                if (CBHCore.init) {
                    CBHCore.api.sendCall({ phone: data.PHONE });
                }
            } else {
                alert("Произошла ошибка, попробуйте повторить позже.");
            }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidmFsaWRhdGVGb3JtIiwiJCIsImVhY2giLCJpIiwiZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ2YWxpZGF0ZSIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50Iiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJzZW5kRm9ybSIsInNlcmlhbGl6ZSIsImRhdGFTZW5kIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiRVJSIiwiY29uc29sZSIsImxvZyIsIk1FU1NBR0UiLCJPSyIsImZpbmQiLCJDQkhDb3JlIiwiaW5pdCIsImFwaSIsInNlbmRDYWxsIiwicGhvbmUiLCJQSE9ORSIsImFsZXJ0Iiwib3dsQ2Fyb3VzZWwiLCJtYXJnaW4iLCJsb29wIiwiYXV0b1dpZHRoIiwiaXRlbXMiLCJuYXYiLCJyZXNwb25zaXZlIiwib3dsIiwiY2xpY2siLCJ0cmlnZ2VyIiwiYWNjb3JkaW9uIiwiZG9jdW1lbnQiLCJvbiIsImlucHV0bWFzayIsInNob3dNYXNrT25Ib3ZlciIsImFyY3RpY09iamVjdCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiYnV0dG9uSWQiLCJhcmN0aWNtb2RhbCIsIm92ZXJsYXkiLCJjc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwiYWZ0ZXJPcGVuIiwiZWwiLCJhZnRlckNsb3NlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFJQTs7QUFDQSxTQUFTQSxZQUFULEdBQXdCO0FBQ3BCQyxNQUFFLGlCQUFGLEVBQXFCQyxJQUFyQixDQUEwQixVQUFVQyxDQUFWLEVBQVlDLENBQVosRUFBZTtBQUNyQyxZQUFHLENBQUNILEVBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLFVBQWpCLENBQUosRUFBaUM7QUFDN0JKLGNBQUUsSUFBRixFQUFRSyxRQUFSLENBQWlCLFVBQWpCLEVBQTZCQSxRQUE3QixDQUFzQyxjQUFZSCxDQUFsRDtBQUNBRixjQUFFLGVB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dGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuXHJcbi8vINCS0LDQu9C40LTQsNGG0LjRj1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS5lYWNoKGZ1bmN0aW9uIChpLGUpIHtcclxuICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygndmFsaWRhdGUnKSl7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhbGlkYXRlJykuYWRkQ2xhc3MoJ3ZhbGlkYXRlLScraSk7XHJcbiAgICAgICAgICAgICQoXCIudmFsaWRhdGUtXCIraSkudmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBzZW5kRm9ybSgkKGZvcm0pLnNlcmlhbGl6ZSgpLCAkKGZvcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vINC+0YLQv9GA0LDQstC60LAg0L/QuNGB0LXQvCBBSkFYXHJcbmZ1bmN0aW9uIHNlbmRGb3JtKGRhdGFTZW5kLCBmb3JtKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hamF4LnBocD9hamF4PVlcIixcclxuICAgICAgICBkYXRhOiBkYXRhU2VuZCxcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5FUlIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5NRVNTQUdFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLkVSUiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQstCw0LvQuNC00LDRhtC40Y8g0LLRi9GI0LUsINC/0L7RjdGC0L7QvNGDINGC0YPRgiDQstGB0LUg0L3QvtGA0LxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuTUVTU0FHRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5PSyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuTUVTU0FHRSk7XHJcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmZpbmQoJy5mb3JtX19zdWNjZXNzJykuYWRkQ2xhc3MoJ2Zvcm1fX3N1Y2Nlc3MtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgaWYoQ0JIQ29yZS5pbml0KXtcclxuICAgICAgICAgICAgICAgICAgICBDQkhDb3JlLmFwaS5zZW5kQ2FsbCh7cGhvbmU6IGRhdGEuUEhPTkUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtCy0YLQvtGA0LjRgtGMINC/0L7Qt9C20LUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgIC8vINGB0LvQsNC50LTQtdGAINGBINC60LDRgtC10LPQvtGA0LjRj9C80Lgg0LzQsNGI0LjQvVxyXG4gICAgJCgnLmNob2ljZScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiA2LFxyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDRgdC70LDQudC00LXRgCDRgSDQvtGC0LfRi9Cy0LDQvNC4XHJcbiAgICBsZXQgb3dsID0gJCgnLnJldmlld3NfaW5kZXhfX3NsaWRlcicpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiAxXHJcbiAgICB9KTtcclxuICAgIC8vINC60LDRgdGC0L7QvNC90LDRjyDQutC90L7Qv9C60LAgbmV4dCDRgyDRgdC70LDQudC00LXRgNCwINC+0YLQt9GL0LLQvtCyXHJcbiAgICAkKCcucmV2aWV3c19pbmRleF9fYXJyb3ctbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0LDQutC60L7RgNC00LjQvtC9XHJcbiAgICAkKCdbZGF0YS1hY2NvcmRpb25dJykuYWNjb3JkaW9uKCk7XHJcblxyXG4gICAgLy8g0LzQsNGB0LrQsCDRgtC10LvQtdGE0L7QvdCwXHJcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnaW5wdXRbdHlwZT10ZWxdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtzaG93TWFza09uSG92ZXI6IGZhbHNlfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0YHQv9C70YvQstCw0Y7RidC10LPQviDQvtC60L3QsFxyXG4gICAgbGV0IGFyY3RpY09iamVjdCA9IG51bGw7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbW9kYWxdJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGJ1dHRvbklkID0gYnV0dG9uLmRhdGEoJ21vZGFsJyksXHJcbiAgICAgICAgICAgIHVybCA9IGJ1dHRvbi5kYXRhKCd1cmwnKTtcclxuXHJcbiAgICAgICAgaWYoYnV0dG9uLmRhdGEoJ3VybCcpKXtcclxuICAgICAgICAgICAgJC5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjgpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWpheCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGFmdGVyT3BlbjogZnVuY3Rpb24oZGF0YSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcmN0aWNPYmplY3QgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmN0aWNPYmplY3QuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhcmN0aWNPYmplY3QgPT09IG51bGwpIHthcmN0aWNPYmplY3QgPSBlbDt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uKGRhdGEsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJjdGljT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKGJ1dHRvbklkKS5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjgpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZnRlck9wZW46IGZ1bmN0aW9uKGRhdGEsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjdGljT2JqZWN0LmFyY3RpY21vZGFsKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ID09PSBudWxsKSB7YXJjdGljT2JqZWN0ID0gZWw7fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbihkYXRhLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyY3RpY09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXX0=
