let currentYear = 2025; 
let running = true; 

while(running){

  let ques = window.prompt("Enter your birth year: ");
  ques = Number(ques);
  let year = ques; 

  if(isNaN(year)){
    window.alert("Please enter a valid number"); 
  }

  else if(year > currentYear){
    window.alert("please enter a valid year"); 
  }

  else{
    let age = currentYear - year; 
    window.alert(`You are ${age} years old`); 
    running = false; 
  }
}





