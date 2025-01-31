function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    // convert number of years into actual year
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    //modify the text when the compute button is pressed
    var result = document.getElementById("result");
    // validation for the principal input box
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}