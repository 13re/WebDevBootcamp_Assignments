
/********************************************************************\
movieDB 
* Create an array of movie objects. 
* Each movie should have a title, rating, and hasWatched properties. 
* Iterate through the array and print out something that looks like this: 

You have watched "Patch Adams" - 5 stars 
You have not seen "Lord of the Rings" - 4.5 stars
\********************************************************************/

var movieDB = [
	{
		title: "Bharath Ane Nenu",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Oh Baby",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Ninnu Kori",
		rating: 4.7,
		hasWatched: true
	},
	{
		title: "Star Trek: Next Generation",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Dangal",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Laagan",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Cosmos",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Drop Dead Diva",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Laakhon Mein Ek",
		rating: 4.2,
		hasWatched: true
	},
	{
		title: "The Matrix",
		rating: 4,
		hasWatched: false
	}
]

movieDB.forEach(function(movie){
	console.log(buildString(movie));
});

function buildString(movie){
		var result = "You have ";
	if(movie.hasWatched) {
	result += "watched ";
	} else {
	result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result; 
}


