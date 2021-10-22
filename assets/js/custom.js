$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
});


$(".hamburger_menu").click(function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
    $("header").toggleClass("overite");
});



jQuery(window).scroll(function () {
    inViewport();
});

jQuery(window).resize(function () {
    inViewport();
});


// on scroll animation
function inViewport() {
    jQuery('.trigger').each(function () {
        var divPos = jQuery(this).offset().top,
            topOfWindow = jQuery(window).scrollTop();

        if (divPos < topOfWindow + 400) {
            jQuery(this).addClass('start');
            console.log('animation Start');
        }
        else {
            jQuery(this).removeClass('start');
            console.log('animation Finish');
        }
    });
}


// blog_slider
$('.blog_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1000,
    dots: false,
    arrows: true,

});

// collabs_slider
$('.collabs_slider').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 2000,
 dots: false,
   arrows: false,
    slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 0,
speed: 3000,
pauseOnHover: false,
cssEase: 'linear'

});




// 
// $(document).on("click mousemove", ".speak_section", function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var newposX = x - 50;
//     var newposY = y - 50; $(".circle").css("transform", "translate3d(" + newposX + "px," + newposY + "px,0px)");
// });


$(document).ready(function () {
    if ($(window).width() > 767) {
        $("#looking").attr("src", "assets/images/lookin-for.gif");
    } else {
        $("#looking").attr("src", "assets/images/lookin-for2.gif");
    }
});


var inc_val = 1;
setInterval(function(){ 

    $("#animate-1, #animate-2, #animate-3").removeClass('animation');

   if(inc_val>3) {
    inc_val = 1;
   }

   $("#animate-"+inc_val).addClass('animation');

   inc_val++;
    
}, 3000);

