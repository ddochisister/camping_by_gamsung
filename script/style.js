$(function(){
    //메뉴
    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown("slow");
    },function(){
        $(".sub").stop().slideUp("slow");
    })

    //main_visual
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:4000,
        fade:true,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    })

    //sub_visu
    $(".sub_visu").slick({
        autoplay:true,
        autoplaySpeed:4000,        
        fade:true,
        pauseOnHover:false,
        arrows:false,
        dots:false,
    })

    //cont2
    $(".camp_pkg").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        arrows:true,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[{
                        breakpoint:768,
                        settings:{
                            slidesToShow:2,
                            slidesToScroll:1,
                        }
                    }]
    })

    //cont3
    $(".xmas,.halloween,.black").slick({
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        arrows:false,
        slidesToShow:1,
        fade:true,
    })

    //cont4
    $(".yong").slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        swipe:true,
        arrows:false,
        slidesToShow:5,
        centerMode:true,
        centerPadding:"-200px",
        responsive:[{
                        breakpoint:768,
                        settings:{
                            slidesToShow:3,
                            slidesToScroll:1,
                        }
                    }]
    })



    //popup

    $(".close").click(function(){
        $(this).parent("div").hide()
    })





    //반응형
    $(".m_btn").click(function(){
        if( $(".m_nav").hasClass("act") == true ){
            $(".m_nav").removeClass("act");
        } else{
            $(".m_nav").addClass("act");
        }
    })


})  //jquery