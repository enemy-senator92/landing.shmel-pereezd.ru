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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm93bENhcm91c2VsIiwibWFyZ2luIiwibG9vcCIsImF1dG9XaWR0aCIsIml0ZW1zIiwibmF2IiwicmVzcG9uc2l2ZSIsIm93bCIsImNsaWNrIiwidHJpZ2dlciIsImFjY29yZGlvbiIsImRvY3VtZW50Iiwib24iLCJpbnB1dG1hc2siLCJzaG93TWFza09uSG92ZXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUdBQSxFQUFFLFlBQVk7O0FBRVY7QUFDQUEsTUFBRSxTQUFGLEVBQWFDLFdBQWIsQ0FBeUI7QUFDckJDLGdCQUFRLENBRGE7QUFFckJDLGNBQU0sS0FGZTtBQUdyQkMsbUJBQVcsSUFIVTtBQUlyQkMsZUFBTyxDQUpjO0FBS3JCQyxhQUFLLEtBTGdCO0FBTXJCQyxvQkFBWTtBQUNSLGVBQUU7QUFDRUYsdUJBQU07QUFEUixhQURNO0FBSVIsaUJBQUk7QUFDQUEsdUJBQU07QUFETixhQUpJO0FBT1Isa0JBQUs7QUFDREEsdUJBQU07QUFETDtBQVBHO0FBTlMsS0FBekI7O0FBbUJBO0FBQ0EsUUFBSUcsTUFBTVIsRUFBRSx3QkFBRixDQUFWO0FBQ0FRLFFBQUlQLFdBQUosQ0FBZ0I7QUFDWkMsZ0JBQVEsQ0FESTtBQUVaQyxjQUFNLElBRk07QUFHWkcsYUFBSyxLQUhPO0FBSVpELGVBQU87QUFKSyxLQUFoQjtBQU1BO0FBQ0FMLE1BQUUsNEJBQUYsRUFBZ0NTLEtBQWhDLENBQXNDLFlBQVc7QUFDN0NELFlBQUlFLE9BQUosQ0FBWSxtQkFBWjtBQUNILEtBRkQ7O0FBSUE7QUFDQVYsTUFBRSxrQkFBRixFQUFzQlcsU0FBdEI7O0FBRUE7QUFDQVgsTUFBRVksUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixpQkFBeEIsRUFBMkMsWUFBWTtBQUNuRGIsVUFBRSxJQUFGLEVBQVFjLFNBQVIsQ0FBa0Isb0JBQWxCLEVBQXdDLEVBQUNDLGlCQUFpQixLQUFsQixFQUF4QztBQUNILEtBRkQ7QUFHSCxDQTFDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vINGB0LvQsNC50LTQtdGAINGBINC60LDRgtC10LPQvtGA0LjRj9C80Lgg0LzQsNGI0LjQvVxyXG4gICAgJCgnLmNob2ljZScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zOiA2LFxyXG4gICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyNDp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczo1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDRgdC70LDQudC00LXRgCDRgSDQvtGC0LfRi9Cy0LDQvNC4XHJcbiAgICBsZXQgb3dsID0gJCgnLnJldmlld3NfaW5kZXhfX3NsaWRlcicpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiAxXHJcbiAgICB9KTtcclxuICAgIC8vINC60LDRgdGC0L7QvNC90LDRjyDQutC90L7Qv9C60LAgbmV4dCDRgyDRgdC70LDQudC00LXRgNCwINC+0YLQt9GL0LLQvtCyXHJcbiAgICAkKCcucmV2aWV3c19pbmRleF9fYXJyb3ctbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0LDQutC60L7RgNC00LjQvtC9XHJcbiAgICAkKCdbZGF0YS1hY2NvcmRpb25dJykuYWNjb3JkaW9uKCk7XHJcblxyXG4gICAgLy8g0LzQsNGB0LrQsCDRgtC10LvQtdGE0L7QvdCwXHJcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnaW5wdXRbdHlwZT10ZWxdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtzaG93TWFza09uSG92ZXI6IGZhbHNlfSk7XHJcbiAgICB9KTtcclxufSk7Il19
