function game() {
  //stops the from from refrehing, retaining the information displayed
  event.preventDefault();

  let userInput = document.forms["rpsForm"]["userInput"].value.toLowerCase();

  // call isValiddation function as a variable
  // this will return a boolean based off of the users input
  let isValid = isValidation(userInput);

  // if user is not validated then it will not continue by returning
  if (isValid === false) {
    return;
  }

  // this will generate a random number from 0 to 2
  // the math.floor is a buit in method that rounds the number to the lowest whole number
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

  //displays the final result withe message of string.
  // document.getElementById gets the id element within the html file.
  //innerText means getting the html text
  document.getElementById("displayResult").innerText =
    "Your opponent chose " + result + message;
}

// this ia a function that validates if the user input is what the program wants. If the input is not then we return a false and it will display an error message.
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
