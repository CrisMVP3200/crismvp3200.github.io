$("form").submit(function(){ 
    var primeContent = document.getElementById("primeContent")
    var formButton = document.getElementById("formButton");
    formButton.innerHTML = '<i class="fa fa-cog fa-spin"></i> Enviando...';
    //console.log("processPrice"); 
    //console.log($("form").serializeArray()); 
    
    var url = "processPrice.php";
    var data = $("form").serialize(); 
    
    $.post(
        url, 
        data, 
        function(data, status){ 
            //console.log(data);
            primeContent.innerHTML = data; 
        }
        
    );
});