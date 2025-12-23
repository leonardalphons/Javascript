let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const paraUser = document.querySelector("#user-score");
const paraComp = document.querySelector("#comp-score");

const compChoice = () => {
  const potions = ["rock", "paper", "scissors"];
  const idxRan = Math.floor(Math.random() * 3);
  return options(idxRan);
};

const gameDraw = () => {
  msg.innerText = "Game Drawn...Play Again!!!";
};

const winner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    paraUser.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    paraComp.innerText = userScore;
    msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "     ";
  }
};

const play = (userChoice) => {
  console.log("UserChoice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showRes(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    play(userChoice);
  });
});

