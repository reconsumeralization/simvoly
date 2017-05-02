/**
 * Created by we on 2017/4/30.
 */

window.onload = function () {

    //banner部分
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: 4000,
        speed: 1000,
        fade: {
            crossFade: false,
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false
    });

    $(function () {



        //info1p
        //操作精灵图的背景位置

        var $feaIcon = $('.features-icon');
        $.each($feaIcon, function (i, item) {
            var $item = $(item);
            $item.css({
                'background-position': '' + (-i * 44) + 'px 0'
            })

        })

        //操作case背景图
        var $infocaseImg = $('.info-3p>.container>div>a');
        $.each($infocaseImg, function (i, item) {
            var $item = $(item);
            $item.css({
                'background-image': 'url(images/case' + (i + 1) + (i == 6 ? '.jpg' : '.png)')
            })
        })


    })
}