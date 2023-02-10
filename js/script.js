$(document).ready(function(){
    // var swiper = new Swiper(".mySwiper", {
    //     direction: "vertical",
    //     loop: true,
    //     speed:2500,
    //     // touchRatio: 0,
    //     resistance : false,
    //     allowTouchMove : false,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },

    // });
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1800){
            var swiper = new Swiper(".mySwiper", {
                direction: "vertical",
                loop: true,
                speed:2500,
                // touchRatio: 0,
                resistance : false,
                allowTouchMove : false,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
             });
        }else{
            
        }
        // 스와이퍼 없애려면 else에 아무것도 안넣으면 됨.
    };

    $('.btn li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const result = $(this).attr('data-alt');

        $('.tabs > div').removeClass('active');
        $(`#${result}`).addClass('active');

    });

    $('.nav-wrap').click(function(){
        $(this).toggleClass('active');
    });
    $('.section-wrap').click(function(){
        $('.nav-wrap').removeClass('active');
    });


});//end
