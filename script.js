// array = a variable like structure that can hold more than 1 value

let fruits = ["apple" , "orange", "banana", "mango"]; 

// fruits[3] = "mango"; 
// fruits.push("cocnut"); - To push/add an element to the end of the array 
// fruits.pop(); - removes the last element
// fruits.unshift("mango"); - Adds element to the beginning of an array
// fruits.shift(); - Removes an element from the beginning of an array

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOffruits = fruits.length; - To get the length of an array; 
// let index = fruits.indexOf("apple"); - To find a particular fruit in array 
// console.log(index); 

// To loop through elements and display them

// for(let i = 1; i < fruits.length; i+=2) {
//   console.log(fruits[i]);
// }


// to do it in reverse
// for(let i = fruits.length - 1; i >= 0; i--){
//   console.log(fruits[i]);
// }


// fruits.sort(); - to sort in alphabetical order
// fruits.sort().reverse(); - to sort in reverse alphabetical order


// enchanced for loop (short cut)
for(let fruit of fruits){
  console.log(fruit);
}




