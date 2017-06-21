var calculatePrime;
var primeAmount;
var primeAmountChars, primeAmountWithPointsReverse; 
var primeAmountString;
var reverse; 
var leftRange, rightRange;

$(document).ready(function(){
    calculatePrime = document.getElementById("calculatePrime");

    calculatePrime.addEventListener("click", getPrimeRange);
    
    goToInsurance = document.getElementById("goToInsurance");
    
    goToInsurance.addEventListener("click", showInsuranceForm);

    function getPrimeRange(){
        var primeAmount = $("#primeAmount").val();
        primeAmount = parseInt(primeAmount).toString();
        if (primeAmount === "") {
            $("#notANumberModal").modal(); 
        } else if (!isNaN(primeAmount)) {
            reverse = 1; 
            primeAmountChars = primeAmount.split("");
            primeAmountWithPointsReverse = "";
            for (var i=primeAmountChars.length-1; i >= 0; i--) { 
                primeAmountWithPointsReverse += primeAmountChars[i];
                if ((reverse % 3 == 0) && (i != 0)) {
                     primeAmountWithPointsReverse += ".";
                }
                reverse++; 
            }
        
            var primeAmountString = "";
            primeAmountReverseChars = primeAmountWithPointsReverse.split(""); 
            for (var i=primeAmountReverseChars.length-1; i >= 0; i--) {
                primeAmountString += primeAmountReverseChars[i];
            }
        
            $("#primeAmount").val(primeAmountString); 
        
            leftRange = parseInt(primeAmount, 10);
            rightRange = parseInt(primeAmount, 10); 
        
            leftRange = Math.floor(leftRange * 0.0014);
            rightRange = Math.floor(rightRange * 0.00186);
        
            document.getElementById("leftRange").innerHTML = leftRange;
            document.getElementById("rightRange").innerHTML = rightRange;
        
            $(".prime-compute").css("display","block"); 
        } else {
            $("#notANumberModal").modal(); 
        }
    }
    
    function showInsuranceForm() {
        if ($("#primeAmount").val() == "") {
            $("#primeToInsuranceError").modal(); 
            return; 
        }
        
        var primeAmount = $("#primeAmount").val(); 
        $("#amount").val(primeAmount);
        $(".prime").css("display", "none");
        $(".prime-compute").css("display", "none"); 
        $(".insurance").css("display","block");
    }
});
