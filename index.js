const payment = document.getElementById("payment");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", () => {
calculateLoan();
});

function calculateLoan(){
  let loanAmount = parseFloat(document.getElementById("loan-amount").value);

  let interestRate = parseFloat(document.getElementById("interest-rate").value);

  let monthsToPay = parseInt(document.getElementById("months-to-pay").value);

  let interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;

  let monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

  payment.innerHTML = 
  `Monthly Payment: $${monthlyPayment}`;
}
