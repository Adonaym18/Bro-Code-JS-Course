// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array 

//          forEach() vs map() = The for each loops through each element of the array changing them one by one
//                               The map() function creates a new array with the affected changes rather than altering the original one 


//* Ex 1
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square); 
// const cubes = numbers.map(cube); 
// console.log(cubes); 

// function square(element){
//   return Math.pow(element , 2); 
// }

// function cube(element){
//   return Math.pow(element , 3); 
// }

//* Ex2 

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"]; 

// const upper = students.map(upperCase); 
// const lower = students.map(lowerCase); 
// console.log(lower); 

// function upperCase(element){
//   return element.toUpperCase();  
// }

// function lowerCase(element){
//   return element.toLowerCase();  
// }

//* Ex3 
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]; 
const formattedDates = dates.map(formatDates); 
console.log(formattedDates); 

function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;  
}