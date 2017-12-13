'use strict';

$(function () {

    $('.choice').owlCarousel({
        margin: 0,
        loop: false,
        autoWidth: true,
        items: 6,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            1024: {
                items: 5,
                nav: false
            }
        }
    });

    $(window).on('resize', function () {}).trigger('resize');

    // маска телефона
    $(document).on('focus', 'input[type=tel]', function () {
        $(this).inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm93bENhcm91c2VsIiwibWFyZ2luIiwibG9vcCIsImF1dG9XaWR0aCIsIml0ZW1zIiwicmVzcG9uc2l2ZSIsIm5hdiIsIndpbmRvdyIsIm9uIiwidHJpZ2dlciIsImRvY3VtZW50IiwiaW5wdXRtYXNrIiwic2hvd01hc2tPbkhvdmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFHQUEsRUFBRSxZQUFZOztBQUVWQSxNQUFFLFNBQUYsRUFBYUMsV0FBYixDQUF5QjtBQUNyQkMsZ0JBQVEsQ0FEYTtBQUVyQkMsY0FBSyxLQUZnQjtBQUdyQkMsbUJBQVcsSUFIVTtBQUlyQkMsZUFBTyxDQUpjO0FBS3JCQyxvQkFBWTtBQUNSLGVBQUU7QUFDRUQsdUJBQU0sQ0FEUjtBQUVFRSxxQkFBSTtBQUZOLGFBRE07QUFLUixpQkFBSTtBQUNBRix1QkFBTSxDQUROO0FBRUFFLHFCQUFJO0FBRkosYUFMSTtBQVNSLGtCQUFLO0FBQ0RGLHVCQUFNLENBREw7QUFFREUscUJBQUk7QUFGSDtBQVRHO0FBTFMsS0FBekI7O0FBcUJBUCxNQUFFUSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVUsQ0FFaEMsQ0FGRCxFQUVHQyxPQUZILENBRVcsUUFGWDs7QUFJQTtBQUNBVixNQUFFVyxRQUFGLEVBQVlGLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlCQUF4QixFQUEyQyxZQUFZO0FBQ25EVCxVQUFFLElBQUYsRUFBUVksU0FBUixDQUFrQixvQkFBbEIsRUFBd0MsRUFBQ0MsaUJBQWlCLEtBQWxCLEVBQXhDO0FBQ0gsS0FGRDtBQUdILENBL0JEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJCgnLmNob2ljZScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbG9vcDpmYWxzZSxcclxuICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IDYsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICAgICAgICBuYXY6dHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOjUsXHJcbiAgICAgICAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9KS50cmlnZ2VyKCdyZXNpemUnKTtcclxuXHJcbiAgICAvLyDQvNCw0YHQutCwINGC0LXQu9C10YTQvtC90LBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICdpbnB1dFt0eXBlPXRlbF0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIiwge3Nob3dNYXNrT25Ib3ZlcjogZmFsc2V9KTtcclxuICAgIH0pO1xyXG59KTsiXX0=
