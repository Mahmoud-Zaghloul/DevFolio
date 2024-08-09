

let SectionTop = $("#About-me").offset().top
$(window).scroll(function(){
    let scrollTop=$(window).scrollTop()
    if (scrollTop >=SectionTop){
        $(".navbar").css("background-color", "teal")
        $(".iconUp").fadeIn(1000)
    }else{
        $(".navbar").css("background-color", "transparent")
        $(".iconUp").fadeOut(1000)
    }
})


$(".nav-link").click(function(){
    let hrefVal=$(this).attr("href")
    let SectionTop= $(hrefVal).offset().top
    $("body,html").animate({scrollTop:SectionTop},{duration:1000, queue:false})
    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")
})