$(function() {

  // define global variables
  let myScore = parseInt($("#humanScore").html());
  let robotScore = parseInt($("#computerScore").html());
  let userChoice
  let computerChoice = "rock"



  // user choice functions
  // rock
  $("#rock").click(() => {
    userChoice = "rock";
    computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
    evaluateTurn()
  });

// paper
  $("#paper").click(() => {
    userChoice = "paper";
    computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
  });

// scissors
  $("#scissors").click(() => {
    userChoice = "scissors";
    computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
  });
// end of user functions

// function to generate computer turn
function computerTurn() {
  $("button").click(() => {
    computerChoice = Math.random();
    if (computerChoice < 0.35) {
      computerChoice = "paper";
    } else if (computerChoice <= 0.66) {
      computerChoice = "scissors";
    } else {
      computerChoice = "rock";
    }
    // console.log(computerChoice);
  });
}
// end of computer turn function

  // compare them
  // userChoice vs computerChoice
  function evaluateTurn() {
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "paper wins";
      } else {
        return "scissors wins";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "rock wins";
      } else {
        return "scissors wins";
      }
    }

  }
});
