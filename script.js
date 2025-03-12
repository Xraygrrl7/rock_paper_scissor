// generate a random number between 0 and 1
// If number is < 0.33 return rock
// else if number is < 0.66 return paper
// else return scissor

// function getComputerChoice(num) {
//   if (num < 0.33) {
//     return "Rock";
//   } else if (num < 0.66) {
//     return "Paper";
//   } else {
//     return "Scissor";
//   }
//   console.log(num);
// };
// getComputerChoice(0.2);


// function getComputerChoice() {
    
//     let num = Math.random();
//     console.log(num);

//     if (num < 0.33) {
      
//       return "Rock";
//     } else if (num < 0.66) {
//       return "Paper";
//     } else {
//       return "Scissor";
//     }
    
//   };
//   getComputerChoice();

  function getComputerChoice() {
    
    let num = Math.random();
    console.log(num);

    if (num < 0.33) {
      
      return "Rock";
    } else if (num < 0.66) {
      return "Paper";
    } else {
      return "Scissor";
    }
    
  }
  console.log(getComputerChoice());
  getComputerChoice();