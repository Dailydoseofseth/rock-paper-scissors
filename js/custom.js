const form = document.querySelector("#rps-form");
const dropdown = document.querySelector("#choice");

// arrow func stored in var so listener must go below for initilization process
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  const userChoice = dropdown.value;
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(`Winner: 🏆${winner}!!`);
  form.reset();
};

form.addEventListener("submit", handleSubmit);

//randomly picks a number out of the length (here is: 3) & thqt corresponds to which number each STRING is..
const getComputerChoice = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

// have to know the outcomes of the RPS Game to know which IF & ELSE-IF statements equals TRUE/TRUTHY. All vice-versa conditions ENDS UP the computer WINNING.
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
