//* Method Chaining = Calling one method after another
//*                   in one continous line of code. 

let username = window.prompt("Enter your username: ");


//* EX - NO METHOD CHAINING 

// username = username.trim();
// let letter = username.charAt(0); 
// letter = letter.toUpperCase(); 

// let extraChar = username.slice(1); 
// extraChar = extraChar.toLowerCase(); 
// username = letter + extraChar;

// console.log(username); 

//* EX - WITH METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 
console.log(username)