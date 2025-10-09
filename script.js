// Arrow functions = a concise way to writte function expressions  
//                  good for simple functions that you use only once    
//                  (parameters) => some code

//* Ex 1

//* Traditional way or Function Declaration
    // function hello(){
    //   console.log("Hello")
    // }
    // hello(); 
  
//*  Function expression way

    // const hello = function(){
    //   consosle.log("Hello"); 
    // }

    // hello(); 

//* Using Arrow Functions 

    // const hello = (name, age) => {console.log(`Hello ${name}`)
    //                               console.log(`You are ${age} years old`)};  
    // hello("Adonay", 19); 

//* Ex2 

  //* Function Declaration
    // setTimeout(hello, 3000); 

    // function hello (){
    //   console.log("Hello"); 
    // }

    // 

  //* Function Expression
    // setTimeout(function (){
    //   console.log("Hello"); 
    // }, 3000);

  //*Arrow Function 
    // setTimeout( () => console.log("Hello"), 3000);


//* Ex3 

// Using Arrow functions with .map() .filter() .reduce() methods

const numbers = [1, 2, 3, 4, 5, 6]; 

const squares = numbers.map((element => Math.pow(element, 2)));
const cubed = numbers.map((element => Math.pow(element, 3)));
const oddNums = numbers.filter((element) => element % 2 !== 0);
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((acumulator, element) => acumulator + element); 

console.log(total); 


