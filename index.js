function calculation() {

    var loanBalance = document.getElementById("balanceOfLoan").value;
    var interestRate = document.getElementById("rateOfInterest").value;
    var loanTerm = document.getElementById("termLoan").value;
    var paymentsPerYear = document.getElementById("yearlyPayments");
    var paymentPeriod = paymentsPerYear.options[paymentsPerYear.selectedIndex].text;


    var monthRate = (interestRate / 100) / paymentPeriod;

    var paymentAmount = loanTerm * paymentPeriod;

    var compoundedInterest = Math.pow((1 + monthRate), paymentAmount);
    console.log(compoundedInterest);
    var quotient = (monthRate * compoundedInterest) / (compoundedInterest - 1);

    var payment = loanBalance * quotient;

    document.getElementById("monthlyPayment").innerHTML = (payment).toFixed(2);
}
