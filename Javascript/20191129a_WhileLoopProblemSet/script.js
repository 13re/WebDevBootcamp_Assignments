// While Loops Problem Set

console.log("Printing all numbers between -10 and 19")

num = -10;

while(num < 20) {
	console.log(num);
	num++;
}

console.log("Printing all even numbers between 10 and 40") 

num = 10;

while(num <= 40) {
	console.log(num);
	num+=2;
}

console.log("Printing all odd numbers between 300 and 333.") 

num = 300;

while(num <= 333) {
	if(num % 2 !== 0) {
		console.log(num);
	}
	num+=1;
}

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50.")

num = 5;

while(num < 51) {
	if(num % 3 === 0 && num % 5 === 0){
		console.log(num)
	}
	num+=5;
}
