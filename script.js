// variable scope = where a variable is recongnized 
//                  and accessible (local vs global); 


// Global Scope - could be accessed from anywhere 
let x = 3;
function2();


// Local Scope - stricly private to its function 
//               which is why you can create to with similiar variable 
//               names and not cause an error. 

function function1(){
  // let x = 1; 
  console.log(x);
}
function function2(){
  // let x = 2; 
  console.log(x);
}


