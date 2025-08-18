//! How to accept user input 

/* 
  1. Easy Way =  window prompt 
    
    let username = window.prompt("What's your username")
    console.log(username); 
*/

/*2. Professional Way = HTML textbox 

let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("H1").textContent = `Hello ${username}`;

}

*/
