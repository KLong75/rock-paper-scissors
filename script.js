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
    if (!playerSelection) {
        return;
    }
  playerSelection = playerSelection.toUpperCase();

  confirm("You have selected " + playerSelection)

  let randomIndex = Math.floor(Math.random() * computerOptions.length)

  let computerSelection = computerOptions[randomIndex]

  confirm("Computer has selected " + computerSelection)

  if (playerSelection === computerSelection) {
    alert("This round was a tie.")
    ties++
    

  } else if (
    (playerSelection === "R" && computerSelection === "S") ||
    (playerSelection === "P" && computerSelection === "R") ||
    (playerSelection === "S" && computerSelection === "P")
    ) {
        alert("You have won this round!")
        wins++
    } else {
        alert("The computer has won this round.")
        losses++
    }

    alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " +ties)

    let playAgain = confirm("Would you like to play again?")
      if (playAgain){
        playGame();
      } else {
        return;
      }


}



playGame();