// function = A section of reusable code. 
//            Declare code once, use it whenever you want. 
//            Call the function to execute that code

//*  EX. 1
// function happyBirthday(username, age) {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Adonay", 19);
// happyBirthday("spongebob", 30);

//* Ex. 2 - the return keyword

function add(x, y){
  let result = x + y; 
  return result; 

  // or you could just use return x + y 
  //  the console.log(add(2,3) outside the function
}

function subtract(x, y){
  return x - y;  
}

function multiply(x , y){
  return x * y; 
}

function divide( x , y){
  return x / y; 
}

function isEven(number){
   
  if(number % 2 === 0){
    return true; 
  }

  else{
    return false; 
  }
  
  //* using tenary operator 
  // return number & 2 === 0 ? true : false; 
}
// console.log(isEven(10));


//* Ex. 4

function isValidEmail(email){
  // if(email.includes("@")){
  //   return true; 
  // }

  // else {
  //   return false
  // }

  return email.includes("@") ? true : false; 
}

console.log(isValidEmail("adonay.mendez255@gmail.com"));






// let answer = add(2, 3); 
// console.log(answer)