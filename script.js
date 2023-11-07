

let computerScore = 0;
let playerScore = 0;
document.getElementById("restartall").style.display = "none";

function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  let result = (num === 1) ? "rock" : (num === 2) ? "paper" : "scissors";
    document.getElementById("pc1").innerHTML = "Computer has chosen " + result;
  return result;
}

function playRound(computer, player) {
  let tlcPlayer = player.toLowerCase();
  if (computer === "rock" && tlcPlayer === "scissors") {
    computerScore++;
    return "You lose, rock beats scissors";
  } else if (computer === "paper" && tlcPlayer === "rock") {
    computerScore++;
    return "You lose, paper beats rock";
  } else if (computer === "scissors" && tlcPlayer === "paper") {
    computerScore++;
    return "You lose, scissors beats paper";
  } else if (computer === "paper" && tlcPlayer === "scissors") {
    playerScore++;
    return "You win, scissors beats paper";
  } else if (computer === "scissors" && tlcPlayer === "rock") {
    playerScore++;
    return "You win, rock beats scissors";
  } else if (computer === "rock" && tlcPlayer === "paper") {
    playerScore++;
    return "You win, paper beats rock";
  } else {
    return computer + " " + tlcPlayer + " it's a tie!";
  }
}

function resetTheGame() {
  computerScore = 0;
  playerScore = 0;
  document.getElementById("comscore").innerHTML = computerScore;
  document.getElementById("plascore").innerHTML = playerScore;
  document.getElementById("restartall").style.display = "none";
  document.getElementById("announcer").innerHTML = "";
}



function startTheGame() {
  let playerChoice = prompt("Enter your choice", "Rock / Paper / Scissors");
  if (playerChoice != null) {
    document.getElementById("demo").innerHTML = "You choose " + playerChoice;
  }
  const computerSelection = getComputerChoice();
  console.log(playRound(computerSelection, playerChoice));

  document.getElementById("comscore").innerHTML = computerScore;
  document.getElementById("plascore").innerHTML = playerScore;

  if (computerScore === 5) {
    document.getElementById("announcer").innerHTML = "Game Over, You Lose!";
    document.getElementById("restartall").style.display = "block";
  }

  if (playerScore === 5) {
    document.getElementById("announcer").innerHTML = "You Win!";
    document.getElementById("restartall").style.display = "block";
  }
}


