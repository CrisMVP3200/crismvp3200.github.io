$("form").submit(function(){
    console.log("processContact"); 
    console.log($("form").serializeArray()); 
    
    var url = "processContact.php";
    var data = $("form").serialize(); 
    
    $.post(
        url, 
        data, 
        function(data, status){ 
            alert("Data: " + data + "\Estado: " + status);
        }
    );
});