function calculation() {

    // call all the variables from the html forms and make sure to retrieve the value

    var loanBalance = document.getElementById("balanceOfLoan").value;
    var interestRate = document.getElementById("rateOfInterest").value;
    var loanTerm = document.getElementById("termLoan").value;
    var paymentsPerYear = document.getElementById("yearlyPayments");
    // use .selectedIndex to recieve the option selected in the drop down menu "paymentsPerYear"
    var paymentPeriod = paymentsPerYear.options[paymentsPerYear.selectedIndex].text;

    //convert interest rate to percentage befor deviding by the amount of payments per year
    var monthRate = (interestRate / 100) / paymentPeriod;

    //multipy the amount of years for the loan by the amount of payments per year
    var paymentAmount = loanTerm * paymentPeriod;

    // use Math.pow to make the paymentAmount an exponent
    var compoundedInterest = Math.pow((1 + monthRate), paymentAmount);

    var quotient = (monthRate * compoundedInterest) / (compoundedInterest - 1);

    var payment = loanBalance * quotient;

    // push the results back to index.html
    document.getElementById("monthlyPayment").innerHTML = (payment).toFixed(2);
}
// reviewed by tr ap
