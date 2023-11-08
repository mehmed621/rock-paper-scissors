let computerScore = 0;
let playerScore = 0;
document.getElementById("restartall").style.display = "none";

function getComputerChoice() {
    let num = Math.ceil(Math.random() * 3);
    let result = num === 1 ? "rock" : num === 2 ? "paper" : "scissors";
    document.getElementById("pc1").innerHTML = "Computer has chosen " + result;
    return result;
  }


function resetTheGame() {
  computerScore = 0;
  playerScore = 0;
  document.getElementById("comscore").innerHTML = computerScore;
  document.getElementById("plascore").innerHTML = playerScore;
  document.getElementById("restartall").style.display = "none";
  document.getElementById("announcer").innerHTML = "";
  document.getElementById("demo").innerHTML = "";
  document.getElementById("pc1").innerHTML = "";
  document.getElementById("bayern").innerHTML = "";
  document.getElementById("scissors").disabled = false;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
}

document.getElementById("rock").addEventListener("click", () => {
  let ccc = getComputerChoice();
  document.getElementById("demo").innerHTML = "You choose Rock";
  document.getElementById("pc1").innerHTML = "Computer has chosen " + ccc;
  if (ccc === "rock") {
    document.getElementById("bayern").innerHTML = "It's a Tie!";
  }

  if (ccc === "paper") {
    document.getElementById("bayern").innerHTML = "You lose! Paper beats Rock.";
    computerScore++;
    document.getElementById("comscore").innerHTML = computerScore;
  }

  if (ccc === "scissors") {
    document.getElementById("bayern").innerHTML =
      "You win! Rock beats Scissors.";
    playerScore++;
    document.getElementById("plascore").innerHTML = playerScore;
  }

  scoreChecker();
});

document.getElementById("scissors").addEventListener("click", () => {
  let ccc = getComputerChoice();
  document.getElementById("demo").innerHTML = "You choose Scissors";
  document.getElementById("pc1").innerHTML = "Computer has chosen " + ccc;
  if (ccc === "scissors") {
    document.getElementById("bayern").innerHTML = "It's a Tie!";
  }

  if (ccc === "rock") {
    document.getElementById("bayern").innerHTML =
      "You lose! Rock beats Scissors.";
    computerScore++;
    document.getElementById("comscore").innerHTML = computerScore;
  }

  if (ccc === "paper") {
    document.getElementById("bayern").innerHTML =
      "You win! Scissors beats Paper.";
    playerScore++;
    document.getElementById("plascore").innerHTML = playerScore;
  }

  scoreChecker();
});

document.getElementById("paper").addEventListener("click", () => {
  let ccc = getComputerChoice();
  document.getElementById("demo").innerHTML = "You choose Paper";
  document.getElementById("pc1").innerHTML = "Computer has chosen " + ccc;
  if (ccc === "paper") {
    document.getElementById("bayern").innerHTML = "It's a Tie!";
  }

  if (ccc === "scissors") {
    document.getElementById("bayern").innerHTML =
      "You lose! Scissors beats Paper.";
    computerScore++;
    document.getElementById("comscore").innerHTML = computerScore;
  }

  if (ccc === "rock") {
    document.getElementById("bayern").innerHTML = "You win! Paper beats Rock.";
    playerScore++;
    document.getElementById("plascore").innerHTML = playerScore;
  }

  scoreChecker();
});

function scoreChecker(){
    if(computerScore == 5) {
        document.getElementById("announcer").innerHTML = "Game over! You Lose.";
        document.getElementById("restartall").style.display = "block";
        document.getElementById("scissors").disabled = true;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
      }
      
      if(playerScore == 5) {
        document.getElementById("announcer").innerHTML = "You Win!";
        document.getElementById("restartall").style.display = "block";
        document.getElementById("scissors").disabled = true;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
      }
}