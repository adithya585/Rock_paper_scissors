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

function getHumanChoice() {
  let choice = prompt("Please choose rock, paper, or scissors:");
  return choice ? choice.toLowerCase() : "";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Current Score — You: ${humanScore} | Computer: ${computerScore}\n`);
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare final winner
  console.log("===============================");
  console.log(`Final Result — You: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over, the computer won!");
  } else {
    console.log("The entire match ended in a tie!");
  }
  console.log("===============================");
}

// Start the game
playGame();