// If age is negative, print an error message. 
// If age is 21, print "happy 21st birthday". 
// If age is odd, print "your age is odd!". 
// Super Bonue: if age is a perfect sqaure, print: "perfect square".


// Get age and covert it to a Number (prompt always returns a String)
var age = Number(prompt("Please enter your age in years"));

// If age is negative
if(age<0) {
	console.log("ERROR - You aren't born yet.")

// If age is odd
if(age % 2 !== 0)
	console.log("Your age is odd!")
}

// If age is perfect square
if(age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!")
}

// If age is 21
if(age == 21) {
	console.log("Happy belated 21st birthday!")
}

// If age is < 18
else if(age < 18) {
	console.log("Sorry, but you aren't old enough to enter.")
}

// If age is < 21
else if(age < 21) {
	console.log("You may enter, but not drink")
}

//
else {
	console.log("You may enter.")
}