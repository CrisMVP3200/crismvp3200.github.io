$(document).ready(function(){
    displayUpIcon = false;
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $(".upicon").fadeIn(); 
            displayUpIcon = true;
        } else {
            $(".upicon").fadeOut(); 
            displayUpIcon = false; 
        }
    });
    
    $(".upicon").on("mouseover", function(){
        $(".upicon").css("opacity", "1");
    });
    
    $(".upicon").on("mouseout", function(){
        $(".upicon").css("opacity", "0.5"); 
    });
    
    $(".upicon").on("click", function(){
        $("html, body").animate({scrollTop: $(".header").offset().top}, 200);
    });
}); 