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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidmFsaWRhdGVGb3JtIiwiJCIsImVhY2giLCJpIiwiZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ2YWxpZGF0ZSIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50Iiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJzZW5kRm9ybSIsInNlcmlhbGl6ZSIsImRhdGFTZW5kIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiRVJSIiwiY29uc29sZSIsImxvZyIsIk1FU1NBR0UiLCJPSyIsImZpbmQiLCJhbGVydCIsIm93bENhcm91c2VsIiwibWFyZ2luIiwibG9vcCIsImF1dG9XaWR0aCIsIml0ZW1zIiwibmF2IiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwidHJpZ2dlciIsImFjY29yZGlvbiIsImRvY3VtZW50Iiwib24iLCJpbnB1dG1hc2siLCJzaG93TWFza09uSG92ZXIiLCJhcmN0aWNPYmplY3QiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsImJ1dHRvbklkIiwiYXJjdGljbW9kYWwiLCJvdmVybGF5IiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsImFmdGVyT3BlbiIsImVsIiwiYWZ0ZXJDbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBSUE7O0FBQ0EsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQkMsTUFBRSxpQkFBRixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBVUMsQ0FBVixFQUFZQyxDQUFaLEVBQWU7QUFDckMsWUFBRyxDQUFDSCxFQUFFLElBQUYsRUFBUUksUUFBUixDQUFpQixVQUFqQixDQUFKLEVBQWlDO0FBQzdCSixjQUFFLElBQUYsRUFBUUssUUFBUixDQUFpQixVQUFqQixFQUE2QkEsUUFBN0IsQ0FBc0MsY0FBWUgsQ0FBbEQ7QUFDQUYsY0FBRSxlQUFhRSxDQUFmLEVBQWtCSSxRQUFsQixDQUEyQjtBQUN2QkMsZ0NBQWdCLHdCQUFTQyxL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QkFBTSxNQVBJO0FBUVZDLHFCQUFLQSxHQVJLO0FBU1ZtQywyQkFBVyxtQkFBU2xDLElBQVQsRUFBZW1DLEVBQWYsRUFBbUI7QUFDMUIsd0JBQUdWLGlCQUFpQixJQUFwQixFQUF5QjtBQUNyQkEscUNBQWFJLFdBQWIsQ0FBeUIsT0FBekI7QUFDSDs7QUFFRCx3QkFBR0osaUJBQWlCLElBQXBCLEVBQTBCO0FBQUNBLHVDQUFlVSxFQUFmO0FBQW1COztBQUU5Q3REO0FBQ0gsaUJBakJTO0FBa0JWdUQsNEJBQVksb0JBQVNwQyxJQUFULEVBQWVtQyxFQUFmLEVBQW1CO0FBQzNCVixtQ0FBZSxJQUFmO0FBQ0g7QUFwQlMsYUFBZDtBQXNCSCxTQXZCRCxNQXdCSztBQUNEM0MsY0FBRThDLFFBQUYsRUFBWUMsV0FBWixDQUF3QjtBQUNwQkMseUJBQVM7QUFDTEMseUJBQUs7QUFDREMseUNBQWlCLGdCQURoQjtBQUVEQyxpQ0FBUztBQUZSO0FBREEsaUJBRFc7QUFPcEJDLDJCQUFXLG1CQUFTbEMsSUFBVCxFQUFlbUMsRUFBZixFQUFtQjtBQUMxQix3QkFBR1YsaUJBQWlCLElBQXBCLEVBQXlCO0FBQ3JCQSxxQ0FBYUksV0FBYixDQUF5QixPQUF6QjtBQUNIOztBQUVELHdCQUFHSixpQkFBaUIsSUFBcEIsRUFBMEI7QUFBQ0EsdUNBQWVVLEVBQWY7QUFBbUI7O0FBRTlDdEQ7QUFDSCxpQkFmbUI7QUFnQnBCdUQsNEJBQVksb0JBQVNwQyxJQUFULEVBQWVtQyxFQUFmLEVBQW1CO0FBQzNCVixtQ0FBZSxJQUFmO0FBQ0g7QUFsQm1CLGFBQXhCO0FBb0JIO0FBQ0osS0FwREQ7QUFxREgsQ0FwR0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5cclxuLy8g0JLQsNC70LjQtNCw0YbQuNGPXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgICQoJ1tkYXRhLXZhbGlkYXRlXScpLmVhY2goZnVuY3Rpb24gKGksZSkge1xyXG4gICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCd2YWxpZGF0ZScpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndmFsaWRhdGUnKS5hZGRDbGFzcygndmFsaWRhdGUtJytpKTtcclxuICAgICAgICAgICAgJChcIi52YWxpZGF0ZS1cIitpKS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRGb3JtKCQoZm9ybSkuc2VyaWFsaXplKCksICQoZm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8g0L7RgtC/0YDQsNCy0LrQsCDQv9C40YHQtdC8IEFKQVhcclxuZnVuY3Rpb24gc2VuZEZvcm0oZGF0YVNlbmQsIGZvcm0pIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFwiL2FqYXgucGhwP2FqYXg9WVwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGFTZW5kLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLkVSUiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLk1FU1NBR0UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEuRVJSID09IDIpIHtcclxuICAgICAgICAgICAgICAgIC8vINCy0LDQu9C40LTQsNGG0LjRjyDQstGL0YjQtSwg0L/QvtGN0YLQvtC80YMg0YLRg9GCINCy0YHQtSDQvdC+0YDQvFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5NRVNTQUdFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLk9LID09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5NRVNTQUdFKTtcclxuICAgICAgICAgICAgICAgICQoZm9ybSkuZmluZCgnLmZvcm1fX3N1Y2Nlc3MnKS5hZGRDbGFzcygnZm9ybV9fc3VjY2Vzcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtCy0YLQvtGA0LjRgtGMINC/0L7Qt9C20LUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgIC8vINGB0LvQsNC50LTQtdGAINGBINC60LDRgtC10LPQvtGA0LjRj9C80Lgg0LzQsNGI0LjQvVxyXG4gICAgJCgnLmNob2ljZScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiA2LFxyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDRgdC70LDQudC00LXRgCDRgSDQvtGC0LfRi9Cy0LDQvNC4XHJcbiAgICBsZXQgb3dsID0gJCgnLnJldmlld3NfaW5kZXhfX3NsaWRlcicpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiAxXHJcbiAgICB9KTtcclxuICAgIC8vINC60LDRgdGC0L7QvNC90LDRjyDQutC90L7Qv9C60LAgbmV4dCDRgyDRgdC70LDQudC00LXRgNCwINC+0YLQt9GL0LLQvtCyXHJcbiAgICAkKCcucmV2aWV3c19pbmRleF9fYXJyb3ctbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0LDQutC60L7RgNC00LjQvtC9XHJcbiAgICAkKCdbZGF0YS1hY2NvcmRpb25dJykuYWNjb3JkaW9uKCk7XHJcblxyXG4gICAgLy8g0LzQsNGB0LrQsCDRgtC10LvQtdGE0L7QvdCwXHJcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnaW5wdXRbdHlwZT10ZWxdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtzaG93TWFza09uSG92ZXI6IGZhbHNlfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0YHQv9C70YvQstCw0Y7RidC10LPQviDQvtC60L3QsFxyXG4gICAgbGV0IGFyY3RpY09iamVjdCA9IG51bGw7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbW9kYWxdJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGJ1dHRvbklkID0gYnV0dG9uLmRhdGEoJ21vZGFsJyksXHJcbiAgICAgICAgICAgIHVybCA9IGJ1dHRvbi5kYXRhKCd1cmwnKTtcclxuXHJcbiAgICAgICAgaWYoYnV0dG9uLmRhdGEoJ3VybCcpKXtcclxuICAgICAgICAgICAgJC5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjgpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWpheCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGFmdGVyT3BlbjogZnVuY3Rpb24oZGF0YSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcmN0aWNPYmplY3QgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmN0aWNPYmplY3QuYXJjdGljbW9kYWwoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhcmN0aWNPYmplY3QgPT09IG51bGwpIHthcmN0aWNPYmplY3QgPSBlbDt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uKGRhdGEsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJjdGljT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKGJ1dHRvbklkKS5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjgpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZnRlck9wZW46IGZ1bmN0aW9uKGRhdGEsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjdGljT2JqZWN0LmFyY3RpY21vZGFsKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJjdGljT2JqZWN0ID09PSBudWxsKSB7YXJjdGljT2JqZWN0ID0gZWw7fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbihkYXRhLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyY3RpY09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXX0=
