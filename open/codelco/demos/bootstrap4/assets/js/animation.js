$(document).ready(function(){
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
});