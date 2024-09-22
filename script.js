const billInput = document.getElementById("bill-input");
const fivePercentButton = document.getElementById("5-percent-btn");
const tenPercentButton = document.getElementById("10-percent-btn");
const fifteenPercentButton = document.getElementById("15-percent-btn");
const twentyFivePercentButton = document.getElementById("25-percent-btn");
const fiftyPercentButton = document.getElementById("50-percent-btn");
const customInput = document.getElementById("custom-percentage-input");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const tipAmountText = document.getElementById("tip-amount-text");
const totalText = document.getElementById("total-text");
const billOutputText = document.getElementById("bill-output-text");
const customOutputText = document.getElementById("custom-output-text");
const numberOfPeopleOutputText = document.getElementById("number-of-people-output-text");
const resetBtn = document.getElementById("reset-btn");
let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;


billInput.addEventListener("input", function() {
  bill = 0;
  if (this.value.length > 8) {
    this.value = this.value.slice(0, 8);
  }
  if (parseFloat(this.value) > 3000) {
    billOutputText.innerText = "Can't be bigger than 3000";
    billInput.style.border = "2px solid #ff474c";
  }
  else if (parseFloat(this.value) <= 0) {
    billOutputText.innerText = "Can't be smaller than 0";
    billInput.style.border = "2px solid #ff474c";
  }
  else {
    billOutputText.innerText = "";
    billInput.style.border = "2px solid var(--results-text-color)";
    bill = parseFloat(this.value);
    console.log(`This is the value of Bill: ${bill}`)

  }
})

customInput.addEventListener("input", function() {
  tipPercentage = 0;
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
  if (parseFloat(this.value) > 100) {
    customOutputText.innerText = "Invalid percentage";
    customInput.style.border = "2px solid #ff474c";
  }
  else if (parseFloat(this.value) < 5) {
    customOutputText.innerText = "Invalid percentage";
    customInput.style.border = "2px solid #ff474c";
  }
  else {
    customOutputText.innerText = "";
    customInput.style.border = "2px solid var(--results-text-color)";
    tipPercentage = parseFloat(this.value);
    console.log(`This is the value of TP: ${tipPercentage}`)

  }
})


numberOfPeopleInput.addEventListener("input", function() {
  numberOfPeople = 0;
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
  if (parseInt(this.value) > 20) {
    numberOfPeopleOutputText.innerText = "Input too high";
    numberOfPeopleInput.style.border = "2px solid #ff474c";
  }
  else if (parseInt(this.value) < 2) {
    numberOfPeopleOutputText.innerText = "Input too little";
    numberOfPeopleInput.style.border = "2px solid #ff474c";
  }
  else {
    numberOfPeopleOutputText.innerText = "";
    numberOfPeopleInput.style.border = "2px solid var(--results-text-color)";
    numberOfPeople = parseFloat(this.value);
    console.log(`This is the value of NOP: ${numberOfPeople}`)
  }
})

fivePercentButton.addEventListener("click", function() {
  tipPercentage = 5;
  console.log(`This is the value of TP: ${tipPercentage}`)

})

tenPercentButton.addEventListener("click", function() {
  tipPercentage = 10;
  console.log(`This is the value of TP: ${tipPercentage}`)

})

fifteenPercentButton.addEventListener("click", function() {
  tipPercentage = 15;
  console.log(`This is the value of TP: ${tipPercentage}`)

})

twentyFivePercentButton.addEventListener("click", function() {
  tipPercentage = 25;
  console.log(`This is the value of TP: ${tipPercentage}`)

})

fiftyPercentButton.addEventListener("click", function() {
  tipPercentage = 50;
  console.log(`This is the value of TP: ${tipPercentage}`)

})

resetBtn.addEventListener("click", function() {
  bill = 0;
  tipPercentage = 0;
  numberOfPeople = 0;
  customInput.value = "";
  billInput.value = "";
  numberOfPeopleInput.value = "";
  tipAmountText.innerText = "$0.00";
  totalText.innerText = "$0.00";

  console.log(`Bill: ${bill}, Tip percentage: ${tipPercentage}, Number of people: ${numberOfPeople}`);
})

function calculateTip() {
  if (bill > 0 && numberOfPeople > 0 && tipPercentage > 0) {
    let tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople;
    let totalAmount = bill / numberOfPeople;
    tipAmountText.innerText = `$${Math.round(tipAmount * 100) / 100}`;
    totalText.innerText = `$${Math.round(totalAmount * 100) / 100}`;
  } else {
    tipAmountText.innerText = `$0.00`;
    totalText.innerText = `$0.00`;
  }
}

billInput.addEventListener("input", calculateTip);
customInput.addEventListener("input", calculateTip);
numberOfPeopleInput.addEventListener("input", calculateTip);
fivePercentButton.addEventListener("click", calculateTip);
tenPercentButton.addEventListener("click", calculateTip);
fifteenPercentButton.addEventListener("click", calculateTip);
twentyFivePercentButton.addEventListener("click", calculateTip);
fiftyPercentButton.addEventListener("click", calculateTip);
