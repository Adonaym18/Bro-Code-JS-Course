// function declaration = define a resuable block of code 
//                        that performes a specific task


// function hello(){
//   console.log("Hello"); 
// }


// function expressions = a way to define function as 
//                        values or varibales

//  1. Callbacks in asynchronus operations 
//  2. Higher-Order functions 
//  3. Closures 
//  4. Event Listeners



//* Ex1 - As a variable

// const hello = function () {
//   console.log("Hello");
// }

// hello();

//* Ex2 - As a value 

// const hello = function () {
//   console.log("Hello");
// }

// setTimeout(hello, 3000);

//* Ex3 - Passing a function as an argument

// setTimeout(function(){
//   console.log("Hello"); 
// }, 3000); 

//* Ex4 - Passing a function as an argument

//* Using a function declaration 

    // const numbers = [1, 2, 3, 4, 5, 6]; 

    // const sqaured = numbers.map(sqaure)

    // function sqaure(element){
    //    return Math.pow(element, 2); 
    // }


    // console.log(sqaured); 

//* Using a function expression

    // const numbers = [1, 2, 3, 4, 5, 6]; 

    // const sqaured = numbers.map(function(element){
    //        return Math.pow(element, 2); 
    //     }); 

    // console.log(sqaured); 

//* Ex - Cubed / Practice using .map(), .filter(), .reduce()

    const numbers = [1, 2, 3, 4, 5, 6]; 
    const cubed = numbers.map(function(element){
      return Math.pow(element, 3); 
    }); 

    const evenNums = numbers.filter(function(element) {
      return element % 2 === 0;
    }); 

    const oddNums = numbers.filter(function(element) {
      return element % 2 !== 0;
    }); 

    const total = numbers.reduce(function(acumulator, element){
      return acumulator + element;
    })

    console.log(total); 