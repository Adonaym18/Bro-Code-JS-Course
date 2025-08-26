// while loop = repeat some code WHILE some condition is true 


//* Example 1 - while loop 

// let username = "";

//   while(username === "" || username === null) {
//   username = window.prompt("Enter your name"); 
// }
// console.log(`Hello ${username}`);


//* Example 2 - do while loop 

// let username; 

// do {
//     username = window.prompt("Enter your name"); 
// }while(username === "" || username === null)
// console.log(`Hello ${username}`);

//* Example 3 

// let loggedIn = false; 
// let username; 
// let password; 

// while(!loggedIn){
//   username = window.prompt("Enter your username: ");
//   password = window.prompt("Enter your password: ");

//   if(username === "myUsername"  && password == "myPassowrd"){
//     loggedIn = true; 
//     console.log("You are logged in!")
//   }
//   else{
//     console.log("Invalid credentials! Please try again"); 
//   }
// }


//* Example 3 - using do while loop

let loggedIn = false; 
let username; 
let password; 

do{
  username = window.prompt("Enter your username: ");
  password = window.prompt("Enter your password: ");

  if(username === "myUsername"  && password == "myPassowrd"){
    loggedIn = true; 
    console.log("You are logged in!")
  }
  else{
    console.log("Invalid credentials! Please try again"); 
  }
}while(!loggedIn);