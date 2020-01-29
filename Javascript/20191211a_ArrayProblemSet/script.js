
/********************************************************************\
printReverse()
* Write a function printReverse() that takes an array as an argument 
* & prints out the elements in the array in reverse order
* (don't actually reverse the array itself)
\********************************************************************/

function printReverse(numArray) { 
	for (i = 0; i <= numArray.length; i++) {
		var reverseIndex = numArray.length - i;
		console.log(numArray[reverseIndex]);
	}
}

printReverse([2, 4, 6, 8, 10]);

/********************************************************************\
isUniform() 
* write a function isUniform() which takes an array as an argument 
* and returns true if all elements in the array are identical
\********************************************************************/

function isUniform(anArray) {
	var first = anArray[0];
	for(i = 1; i < anArray.length; i++) {
		if(anArray[i] !== first) {
			return false;
		}
	}
	return true;
}

/********************************************************************\
sumArray() 
* write a function sumArray() that accepts an array of numbers 
* and returns the sum of all numbers in the array. 
\********************************************************************/

function sumArray(arrayToSum) {
	var total = 0; 
	arrayToSum.forEach(function(num) {
		total += num;
	});
	return total;
}

/********************************************************************\
max() 
* write a function max() that accepts an array of numbers 
* and returns the maximum number in the array.
\********************************************************************/

function max(givenArray) {
	var top = givenArray[0];
	givenArray.forEach(function(numToCheck) {
		if (numToCheck > top) {
			top = numToCheck;
		}
	});
	return top;
}

