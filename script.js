// generate a random number between 0 and 1
// If number is < 0.33  rock
// else if number is < 0.66  paper
// else  scissor

// function getComputerChoice(num) {
//   if (num < 0.33) {
//      "Rock";
//   } else if (num < 0.66) {
//      "Paper";
//   } else {
//      "Scissor";
//   }
//   console.log(num);
// };
// getComputerChoice(0.2);

// function getComputerChoice() {

//     let num = Math.random();
//     console.log(num);

//     if (num < 0.33) {

//        "Rock";
//     } else if (num < 0.66) {
//        "Paper";
//     } else {
//        "Scissor";
//     }

//   };
//   getComputerChoice();

function getComputerChoice() {
  let num = Math.random();
  console.log(num);

  if (num < 0.33) {
    return "rock";
  } else if (num < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());
// getComputerChoice();

// Part 2 logic for getting human choice
// function getHumanChoice
// prompt user 'type rock, paper, or scissors to play'
// store choice
// End function

function getHumanChoice() {
  let choice;

  while (true) {
    choice = prompt("To play type rock, paper, or scissors").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      alert("Invalid choice! Please enter rock, paper, or scissors.");
    }
  }
}
// console.log(getHumanChoice());

// Part 3 declare players score variables

// let humanScore = 0;
// let computerScore = 0;

// part 4 write logic to play a single round
//
function playRound(humanChoice, computerChoice) {
  console.log(
    `playRound is running with Human: ${humanChoice}, Computer: ${computerChoice}`
  );

  if (humanChoice === computerChoice) {
    alert("It is a draw");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("you win, scissors beats paper!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("you lose, rock beats scissors!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("you lose, scissors beats paper!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("you win, paper beats rock!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("you lose, paper beats rock!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("you win, rock beats scissors!");
  } else {
    alert("Invalid choice! Please enter rock, paper, or scissors.");
  }
}
const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
