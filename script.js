// for loop = repeat some code a LIMITED amount of times 


// * Example 1 
// for(let i = 10; i > 0; i--){
//     console.log(i); 
// }

// console.log("HAPPY NEW YEAR"); 

// * Example 2 - Countinue & Break 

for(let i = 1; i <= 20; i++){

    if(i == 13) {
      continue;  // to skip over the number 13
      // break;    to end the for loop before the number 13 
    }

    else {
      console.log(i);
    }
}