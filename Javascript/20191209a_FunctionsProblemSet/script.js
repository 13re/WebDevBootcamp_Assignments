// Write a function isEven() which takes a single numberic argument and returns true if the number is even, and false otherwise

function isEven(num) {
	return num % 2 === 0;
}

// Write a function factorial() which takes a single numeric argument and returns the factorial of that number. 

function factorial(num) {
	// define a result variable
	var result = 1;
	// calculate factorial & store value in result
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	// return the result variable
	return result;
}

// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}


