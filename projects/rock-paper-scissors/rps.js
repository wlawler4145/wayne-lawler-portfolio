var userChoice = prompt("Choose Rock, Paper or Scissors by typing 'R', 'P', or 'S'");

var rng = Math.random();
var computerChoice = "R";

if (rng > 0.66) {
  computerChoice = "P";
} else if(rng > 0.33) {
  computerChoice = "S";
}
console.log(computerChoice);
// R beats S, S beats paper, P beats Rock
var userWins = "Fatality!"
var computerWins = "You randomly suck!"

if(computerChoice !== userChoice){
  if(computerChoice === "R"){
    if(userChoice === "S"){
      alert(computerWins);
    } else {
      alert(userWins);
    }
  } else if(computerChoice === "P") {
    if(userChoice === "R"){
      alert(computerWins);
      } else {
        alert(userWins);
      }

  } else {
      if (userChoice === "P") {
      alert(computerWins);
  } else {
    alert(userWins);
  }
  }

} else {
  alert('Tie!')
}
