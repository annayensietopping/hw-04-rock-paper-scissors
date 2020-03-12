$(function() {

  // define global variables
  let myScore = parseInt($("#humanScore").html());
  let robotScore = parseInt($("#computerScore").html());
  let userChoice
  let computerChoice = "rock"
  let choices = ["rock", "paper", "scissor"]



  // user choice functions
  // rock
  $("#rock").click(() => {
    userChoice = "rock";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
    evaluateTurn()
  });

// paper
  $("#paper").click(() => {
    userChoice = "paper";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
  });

// scissors
  $("#scissors").click(() => {
    userChoice = "scissors";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, robotScore)
  });
// end of user functions

// function to generate computer turn
function computerTurn() {
return choices[Math.floor(Math.random() * choices.length)]


  // $("button").click(() => {
  //   computerChoice = Math.random();
  //   if (computerChoice < 0.35) {
  //     computerChoice = "paper";
  //   } else if (computerChoice <= 0.66) {
  //     computerChoice = "scissors";
  //   } else {
  //     computerChoice = "rock";
  //   }
    // console.log(computerChoice);
  // });
}
// end of computer turn function

  // compare them
  // userChoice vs computerChoice
  function evaluateTurn() {
    // pasted from homework need to fix
    if (playerAChoice === playerBChoice) {
      console.log('itsa tie oops')
    } else {
      if (playerAChoice === "rock") {
        if (playerBChoice === "paper") {
          console.log("player B wins!")
        }
        else {
          console.log("player A wins!")
        }
      }

      if (playerAChoice === "scissors") {
        if (playerBChoice === "rock") {
          console.log("player B wins!")
        }
        else {
          console.log("player A wins!")
        }
      }

      if (playerAChoice === "paper") {
        if (playerBChoice === "scissors") {
          console.log("player B wins!")
        }
        else {
          console.log("player A wins!")
        }
      }
    }

  }
});
