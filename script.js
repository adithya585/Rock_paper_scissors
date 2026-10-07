const resultsDiv = document.querySelector("#results");
const buttons = document.querySelectorAll(".btn");

function getComputerChoice() {
  let randomValue = Math.random();

  if (randomValue < 0.33) {
    return "rock";
  } else if (randomValue < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let roundMessage = "";

    if (humanChoice === computerChoice) {
      roundMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Display the round outcome and running score
    resultsDiv.textContent = `${roundMessage}\nCurrent Score — You: ${humanScore} | Computer: ${computerScore}`;

    // Check if either player reached 5 points
    declareWinner();
  }

  function declareWinner() {
    if (humanScore === 5) {
      resultsDiv.textContent += "\n\n🎉 You won the game!";
      disableButtons();
    } else if (computerScore === 5) {
      resultsDiv.textContent += "\n\n💀 Computer won the game!";
      disableButtons();
    }
  }

  function disableButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
    });
  });
}

// Start the game
playGame();