function game() {
  //stops the from from refrehing, retaining the information displayed
  event.preventDefault();

  let userInput = document.forms["rpsForm"]["userInput"].value.toLowerCase();

  let isValid = isValidation(userInput);

  if (isValid === false) {
    return;
  }

  const computer = [Math.floor(Math.random() * 3)];
  let result = "";
  let message = "";
  if (computer === 0) {
    result = "rock";
  } else if (computer === 1) {
    result = "paper";
  } else {
    result = "scissor";
  }

  if (userInput === result) {
    message = " its a tie!";
  } else if (
    (userInput === "rock" && result === "paper") ||
    (userInput === "paper" && result === "scissor") ||
    (userInput === "scissor" && result === "rock")
  ) {
    message = " you lost!";
  } else if (
    (result === "rock" && userInput === "paper") ||
    (result === "paper" && userInput === "scissor") ||
    (result === "scissor" && userInput === "rock")
  ) {
    message = " you win!";
  }
  document.getElementById("displayResult").innerText =
    "Your opponent chose " + result + message;
}

function isValidation(userInput) {
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return true;
  } else {
    document.getElementById("displayResult").innerText =
      "Please enter a valid choice: Rock, Paper, or Scissors";
    return false;
  }
}
