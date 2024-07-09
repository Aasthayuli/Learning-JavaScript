//Building game: Rock, Paper, Scissors

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#computer-score");
const drawgame = () => {
  msg.innerText = "Game is Draw! Play again.";
  msg.style.backgroundColor = "darkgray";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const playGame = (userChoice) => {
  //computer knows user choice
  //Generated computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw game
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//Showing msg on the Browser Screen
