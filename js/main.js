$(function() {

  // define global variables
  // let myScore = parseInt($("#humanScore").html());
  // let robotScore = parseInt($("#computerScore").html());
  let myScore = 0
  let computerScore = 0
  let userChoice
  let computerChoice = "rock"
  let choices = ["rock", "paper", "scissors"]
  let outcome 



  // user choice functions
  // rock
  $("#rock").click(() => {
    userChoice = "rock";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, computerScore)
    evaluateTurn()
  });

// paper
  $("#paper").click(() => {
    userChoice = "paper";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, computerScore)
    evaluateTurn()
  });

// scissors
  $("#scissors").click(() => {
    userChoice = "scissors";
    computerChoice = computerTurn()
    console.log(userChoice,computerChoice)
    console.log(myScore, computerScore)
    evaluateTurn()
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

  // turn
  function evaluateTurn() {
    // pasted from homework need to fix
    if (userChoice === computerChoice) {
      console.log('itsa tie oops')
      outcome = "It's a tie."
      changeStatus()
    } else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          console.log("player B wins!")
          outcome = "The bot won."
      changeStatus()
      scoreboardComputer()
        }
        else {
          console.log("player A wins!")
          outcome = "You win!"
      changeStatus()
      scoreboardUser()
        }
      }

      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          console.log("player B wins!")
          outcome = "The bot won."
      changeStatus()
      scoreboardComputer()
        }
        else {
          console.log("player A wins!")
          outcome = "You win!"
      changeStatus()
      scoreboardUser()
        }
      }

      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          console.log("player B wins!")
          outcome = "The bot won."
      changeStatus()
      scoreboardComputer()
        }
        else {
          console.log("player A wins!")
          outcome = "You win!"
      changeStatus()
      scoreboardUser()
        }
      }
    }

  }
  // turn function end

// look into changing CSS in this 
function changeStatus() {
  $('#status').html(`You played ${userChoice}. The bot played ${computerChoice}. ${outcome}`)
}
// end function

// scoreboard

function scoreboardUser() {
   myScore = myScore +1
   $("#humanScore").html(myScore)
}

function scoreboardComputer() {
   computerScore = computerScore +1
   $("#computerScore").html(computerScore)
}

});
