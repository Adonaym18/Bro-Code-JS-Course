//* IF STATEMENTS = If a condition is true, execute some code
                    // if not, do something else


//* Example 1 

  // let age = 17;  

  // if(age >= 21) {
  //   console.log("You may enter the club!")
  // }
  // else {
  //   console.log("Get tf OUT!!!")
  // }

//* Eample 2 

  // let isStudent = false; 

  // if(isStudent){
  //   console.log("You are a student!");
  // }
  // else {
  //   console.log("You are NOT a student!")
  // }

//* Eample 3 

  // let age = 19;
  // let hasLicense = true; 

  // if(age >= 16){
  //   console.log("You are old enough to drive");

  //     if(hasLicense) {
  //       console.log("And you have your license!");
  //     }
  //     else{
  //       console.log("You do not have your license yet");
  //     }
  // }
  // else {
  //   console.log("You are NOT old enought to drive"); 
  // }

//* Example 4 - else if staements

  const myText = document.getElementById("myText");
  const mySubmit = document.getElementById("mySubmit");
  const resultElement = document.getElementById("resultElement"); 
  let age;
  
  
mySubmit.onclick = function() {

  age = myText.value;
  age = Number(age); 

  if(age >= 100) {
    resultElement.textContent = `You are TOO OLD for this site`;
  }

  else if(age == 0) {
    resultElement.textContent = `come on bruh! you were just born`;

  }

  else if(age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
    
  }

  else if(age < 0) {
    resultElement.textContent = `Please enter real age number`;

  }

  else {
    resultElement.textContent = `You are not old enough to enter this site`;

  }
}




