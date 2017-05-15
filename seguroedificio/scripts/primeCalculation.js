var calculatePrime; 

$(document).ready(function(){
    calculatePrime = document.getElementById("calculatePrime");

    calculatePrime.addEventListener("click", getPrimeRange);
    
    goToInsurance = document.getElementById("goToInsurance");
    
    goToInsurance.addEventListener("click", showInsuranceForm);

    function getPrimeRange(){
        var primeAmount = $("#primeAmount").val();
        var leftRange = parseInt(primeAmount);
        var rightRange = parseInt(primeAmount); 
        
        leftRange = Math.floor(leftRange * 0.0014);
        rightRange = Math.floor(rightRange * 0.00186);
        
        document.getElementById("leftRange").innerHTML = leftRange;
        document.getElementById("rightRange").innerHTML = rightRange;
        
        $(".prime-compute").css("display","block"); 
    }
    
    function showInsuranceForm() {
        if ($("#primeAmount").val() == "") {
            $("#primeToInsuranceError").modal(); 
            return; 
        }
        
        var primeAmount = $("#primeAmount").val(); 
        primeAmount = parseInt(primeAmount); 
        $("#amount").val(primeAmount);
        $(".prime").css("display", "none");
        $(".insurance").css("display","block");
    }
});
