$("form").submit(function(){
    console.log("processContact"); 
    console.log($("form").serializeArray()); 
    
    var url = "processPrice.php";
    var data = $("form").serialize(); 
    
    $.post(
        url, 
        data, 
        function(data, status){ 
            alert("Data: " + data + "\Estado: " + status);
        }
    );
});