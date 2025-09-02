//* Spread Operator = ... allows an iterable such as an 
//                      array or string to be expanded 
//                      into sperate elements 
//                      (unpacks the elements)

//* Example with numbers 

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers); 

// console.log(min);

//* Example with strings

// let username =  "Adonay"
// let letters = [...username].join("-")
// console.log(letters);

//* Example 1 
let fruits = ["apple", "orange", "banana"];
let vegatables = ["carrots", "celery", "potatoes"]; 
let foods = [...fruits, ...vegatables, "eggs", "milk"];

console.log(foods); 




