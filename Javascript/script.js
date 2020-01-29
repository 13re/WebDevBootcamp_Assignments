// While Loops Problem Set

console.log("Printing all numbers between -10 and 19");

for(i = -10; i < 20; i++) {
	console.log(i);
}

console.log("Printing all even numbers between 10 and 40");

for(i = 10; i <= 40; i+=2) {
	console.log(i);
}

console.log("Printing all odd numbers between 300 and 333.");

for(i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50.");

for(i = 5; i < 51; i+=5) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}