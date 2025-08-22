// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable base on a condition 
//                     condition ? codeIfTrue : codeIfFalse; 

// let age = 8; 
// let message = age >= 18 ? "You're an adult" : "You're a minor"; 
// console.log(message); 

// let time = 11; 
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!"; 
// console.log(greeting); 

// let isStudent = false; 
// let message = isStudent ? "You are a student" : "You are not a student"
// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0; 
console.log(`You're total is $${purchaseAmount - purchaseAmount * (discount/100) }`);




