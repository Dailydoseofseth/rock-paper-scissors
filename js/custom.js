const form = document.querySelector("#rps-form");
const dropdown = document.querySelector("#choice");

const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultDiv = document.querySelector("#result");
const scoreboard = document.querySelector(".scoreboard");

let userScore = 0;
let computerScore = 0;

// Found out event listener must go AFTER SUBMIT when using an arrow function stored in a const variable.
// If ABOVE, console will throw "Cannot access 'handleSubmit' before initialization" ERROR,
// bc const variables (incl ARROW func) are not "hoisted" like regular function declarations.
const handleSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  const userChoice = dropdown.value;

  const computerChoice = getComputerChoice();

  const winner = determineWinner(userChoice, computerChoice);

  //   if (winner === "User Wins") {
  //     userScore++;
  //   } else if (winner === "Computer Wins") {
  //     computerScore++;
  //   }

  //   userScoreSpan.textContent = userScore;
  //   computerScoreSpan.textContent = computerScore;

  updateScoreboard(winner);

  resultDiv.textContent = `User chose ${userChoice}. Computer chose ${computerChoice}. ${winner}!`;

  form.reset();
};

form.addEventListener("submit", handleSubmit);

// randomly picks a number out of the length (here is: 3)
// that corresponds to which number each STRING is
const getComputerChoice = () => {
  const weapons = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * weapons.length);

  return weapons[randomIndex];
};

// have to know the outcomes of the RPS Game to know which IF statements are TRUE
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Draw";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "User Wins";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "User Wins";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "User Wins";
  } else {
    return "Computer Wins";
  }
};

const updateScoreboard = (winner) => {
  if (winner === "User Wins") {
    userScore++;

    scoreboard.classList.add("win");

    setTimeout(() => {
      scoreboard.classList.remove("win");
    }, 1500);
  } else if (winner === "Computer Wins") {
    computerScore++;

    scoreboard.classList.add("loss");

    setTimeout(() => {
      scoreboard.classList.remove("loss");
    }, 1500);
  } else {
    scoreboard.classList.add("draw");

    setTimeout(() => {
      scoreboard.classList.remove("draw");
    }, 1500);
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
};
