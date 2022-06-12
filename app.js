var plays = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", computerHand());
});
paperButton.addEventListener("click", () => {
  playRound("paper", computerHand());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerHand());
});

function computerHand() {
  var randomPlay = plays[Math.floor(Math.random() * plays.length)];
  return randomPlay;
}

function playRound(playerSelection, computerSelection) {
  if (playerScore <= 5 && computerScore <= 5) {
    console.log("Computer Hand:" + computerSelection);
    console.log("Player Hand:" + playerSelection);
    console.log("playerScore" + playerScore);
    console.log("computerScore" + computerScore);
    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      alert(
        "You fucking won." + playerSelection + " smashes " + computerSelection
      );
      return ++playerScore;
    } else if (
      (playerSelection == "scissors" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "rock" && computerSelection == "paper")
    ) {
      alert("You lost." + computerSelection + " detroys " + playerSelection);
      return ++computerScore;
    } else {
      alert("You drew with the bot.");
      return;
    }
  } else gameDecision(playerScore, computerScore);
}

function gameDecision(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert("You won");
    return;
  } else if (computerScore > playerScore) {
    alert("You lost");
    return;
  } else {
    alert("You drew");
    return;
  }
}

{
  /* // game()
  
       function game() 
      // //
  
      //         for (let i = 0; i < 5; i++) {
      //             playerHand()
      //             console.log('Player Score:' + playerScore)
      //             console.log('Computer Score:' + computerScore)
      //         }
      //         gameDecision(playerScore, computerScore)
      //     }
      // //' */
}
// function playerHand() {
//     var playerSelection = prompt("Select your hand").toLowerCase();
//     let computerSelection = computerHand();

//     if (
//       playerSelection.toLowerCase() == "rock" ||
//       playerSelection.toLowerCase() == "paper" ||
//       playerSelection.toLowerCase() == "scissors"
//     ) {
//       console.log(playRound(playerSelection, computerSelection));
//     } else {
//       alert("Spell it correctly, fuckface");
//       playerHand();
//     }
//   }
