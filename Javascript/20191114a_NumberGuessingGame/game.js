// create secret number
var secretNumber = 8;

// ask user for a guess
var guess = Number(prompt("Guess a number"));

// "Please refresh to try again"
var tryAgain = "Please refresh to try again."

// check guess
if(guess === secretNumber) {
	alert("You guessed it!")
}
// check if guess is too high
else if(guess > secretNumber) {
	alert("Your guess is too high. " + tryAgain)
}

// check if guess is too low
else {
	alert("Your guess is too low. " + tryAgain)
}
