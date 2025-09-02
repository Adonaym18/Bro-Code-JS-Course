// rest parameters = (...rest) allow a funciton to work with a variable
//                    number of arguments by bundling then in an array

//                    spread =  expands an array into seprarte elements
//                    rest = bundles seperate elements into an array

//* Example 1

// function openFridge(...foods) {
//   console.log(...foods); // to expand the array back into separate elements
// }

// Stick all e
// function getFood(...foods){
//   return foods; 
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "suhsi";
// const food4 = "hotdog";
// const food5 = "ramen";


// openFridge(food1, food2, food3, food4, food5); // This is the step that places the variables into the array

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


//* Example 2 
// function sum(...numbers){
//   let result = 0;

//   for(let number of numbers) {
//     result += number; 
//   }
//   return result; 
// } 

// const total = sum(1, 2, 3, 4, 5); 

// console.log(`Your total is $${total}`); 

// function getAverage(...numbers){
//   let result = 0;

//   for(let number of numbers) {
//     result += number; 
//   }
//   return result / numbers.length; 
// } 

// const total = getAverage(75 , 100, 85, 90, 50);
// console.log(total); 

//* Example 3 = using the rest parameters to comine strings into one

function combineStrings(...strings){
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
