$(document).ready(function(){
    start(); 
});

function start() {
    animation();
    scroll(); 
}

function animation() {
    $(".headeranim").each(function(){ 
        $(this).addClass("headerslide"); 
    }); 
                         
    $(window).scroll(function(){
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop(); 
            if (pos < winTop + 600) {
                $(this).addClass("slide"); 
            }
        });
    });
}

function scroll() {
    $(".goDown a, .sectionExit a").on("click", function(event) {
       if (this.hash !== "") {
           event.preventDefault();
           var hash = this.hash; 
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 1000, function(){
               window.location.hash = hash;
           });
       }
    });
}