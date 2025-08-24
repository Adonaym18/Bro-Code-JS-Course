// string slicing = creating a subsrting 
//                   from a portion of another string

//                    string.slice(start, end)

//      Exmple 1 

// const fullName = "Adonay Mendez"

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);

// let firstChar = fullName.slice(0 , 1); 
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" ")); 
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName); 


// Example 2 

const email = "adonay.mendez255@gmail.com"; 

let username = email.slice(0, email.indexOf("@")); 
let extenstion = email.slice(email.indexOf("@") + 1); 

console.log(username); 
console.log(extenstion); 