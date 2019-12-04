var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah" && answer !== "ya" && answer !== "yep") {
while (answer.indexOf("yes") === -1 
&& answer.indexOf("yeah") === -1 
&& answer.indexOf("ya") === -1 
&& answer.indexOf("yep") === -1) {
	var answer = prompt("Are we there yet?");
}

alert ("Yay!! We made it!");