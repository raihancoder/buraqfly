$(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 10){
            $(".backtotop a").fadeIn()
        }else{
            $(".backtotop a").fadeOut()
        }
    })

    $(".backtotop a").click(function(){
        $("html,body").animate({
            scrollTop:0
        },50)
    })
    $(".market_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        nextArrow:".next",
        prevArrow:".prev",
        dots:false,
        centerMode:true,
        centerPadding:"0px"
    })