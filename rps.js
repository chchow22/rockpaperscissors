var choices = ["rock", "paper", "scissors"];
var player = prompt();
var computer = choices[Math.floor(Math.random() * choices.length)];
console.log("Computer chose " + computer);
console.log("You chose " + player);

if (player == computer) {
  console.log("tie");
}
else if (player == "rock") {
  if (computer == "scissors") {
    console.log("you win");
  }
  else {
    console.log("you lose");
  }
}
else if (player == "paper") {
  if (computer == "rock") {
    console.log("you win");
  }
  else {
    console.log("you lose");
  }
}
else if (player == "scissors") {
  if (computer == "paper") {
    console.log("you win");
  }
  else {
    console.log("you lose");
  }
}
