/* 
game rules with user selection 1st
// r + r = tie
// s + s =tie
// p + p =tie

// r + s = win
// s + p = win
// p + r = win

// r + p = lose
// s + p = lose
// p + s = lose

*/
let wins = 0;
let losses = 0;
let ties = 0;

let computerOptions = ["R", "P", "S"]

function playGame(){
  let playerSelection = prompt("Enter R, P, or S");

  confirm("You have selected " + playerSelection)

  let randomIndex = Math.floor(Math.random() * computerOptions.length)

  let computerSelection = computerOptions[randomIndex]

  confirm("Computer has selected " + computerSelection)

  if (playerSelection === computerSelection)


}



playGame();