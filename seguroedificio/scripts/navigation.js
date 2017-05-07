$(document).ready(function(){
    if ($(window).scrollTop() > 50) {
        $(".upicon").css("display", "block");
    } else {
        $(".upicon").css("display", "none"); 
    }
    
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50) {
            $(".upicon").fadeIn(); 
        } else {
            $(".upicon").fadeOut(); 
        }
    });
    
    $(".upicon").on("mouseover", function(){
        $(".upicon").animate({opacity:"1"},100); 
    });
    
    $(".upicon").on("mouseout", function(){
        $(".upicon").animate({opacity:"0.5"},100);
    });
    
    $(".link-upicon").on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});

