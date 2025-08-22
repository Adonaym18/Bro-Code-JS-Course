// .checked = property that determines determines the checked state of an 
//            HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBbtn = document.getElementById("visaBbtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPallBtn = document.getElementById("payPallBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  
  if(myCheckbox.checked){
    subResult.textContent = `You are subscribed`;
  }

  else{
    subResult.textContent = `You are not subscribed`; 
  }

  if(visaBbtn.checked){
    paymentResult.textContent = `You are paying with visa`;
  }

  else if(masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  }

  else if(payPallBtn.checked) {
    paymentResult.textContent = `You are paying with PayPall`;
  }

  else {
    paymentResult.textContent = `You must select a payment type`;
  }
}






