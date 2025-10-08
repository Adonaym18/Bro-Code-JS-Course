// .filter() = creates a new array by filtering
//             out elements


//* Ex1 - filtering out odd numbers 

// let numbers = [1, 2, 3, 4, 5, 6, 7]; 
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);


// console.log(oddNums); 
 
// function isEven(element){
//   return element % 2 === 0; 
// }

// function isOdd(element){
//   return element % 2 !== 0; 
// }

//* Ex2  

// const ages = [16, 17, 18, 18, 19, 20, 60]; 
// const adults = ages.filter(isAdult); 
// const childern = ages.filter(isChild); 

// console.log(childern); 

// function isAdult(element){
//   return element >= 18; 
// }


// function isChild(element){
//   return element < 18; 
// }

//* Ex 3 
const words = ["apple", "orange", "banana", "kiwi", "pomegranted", "coconut"]; 

const shortWords = words.filter(getShortWords); 
const longWords = words.filter(getLongWords); 

console.log(longWords); 


function getShortWords(element) {
  return element.length <= 6; 
}

function getLongWords(element) {
  return element.length > 6; 
}

