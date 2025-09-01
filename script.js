// ROCK, PAPER, SCISSORS GAME (PRACTICE)
const options = ["ROCK" , "PAPER", "SCISSORS"]; 

let running = true;

while(running) {
  let playerScore = 0;
  let computerScore = 0;

  //Play until someone reaches 3
  //This inner loop controls what happens during the game while the score is less than 3
  while(playerScore < 3 && computerScore < 3) {
    // Choose a random array from the options variable
    let randomIndex = Math.floor(Math.random() * options.length); 
    let computer = options[randomIndex];
    //Eliminates extra space inside the input and sets the input to uppercase to match that of the arrarys.
    // This also prevents mistakes
    let player = window.prompt("Rock, Paper, Scissors").trim().toUpperCase(); 
    
    // Check for invalid input first
    // Checks if the player(the input of the prompt) does not match array list items in options and runs an alert
    if(!options.includes(player)){
      window.alert("Please enter ROCK, PAPER, or SCISSORS");
      continue; // skip to next loop iteration
    }

    if(player === computer) {
      window.alert("It's a tie! Computer also chose " + computer +  ` \n Current Score: \n You = ${playerScore} \n Computer = ${computerScore}`); 
    }else if(
      (player === "ROCK" && computer === "SCISSORS") ||
      (player === "PAPER" && computer === "ROCK") ||
      (player === "SCISSOR" && computer === "PAPER")
      ) {
      playerScore++;   
      window.alert(`You win this round! Computer chose ${computer}!\n Score: \n You = ${playerScore} \n Computer = ${computerScore}`); 
    }else {
      computerScore++; 
      window.alert(`You lose this round! Computer chose ${computer}! \n Score: You = ${playerScore} \n Computer = ${computerScore}`); 
    }
  }

  //* once score is no longer < 3 it will exit the loop 

    //Decide overall winner
    if (playerScore === 3) {
      window.alert("🎉 You win the best of 3!");
    }

    else {
      window.alert("💻 Computer wins the best of 3!"); 
    }

    //ask to play again
    if (!confirm("Play again")) {
      running = false; 
    }
    // let again = window.prompt("Play again? (yes/no)").toLowerCase(); 
    //   if (again !== "yes") {
    //     running = false; 
    //   }
}