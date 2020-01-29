window.setTimeout(function() {
	var toDoList = [];

	var input = prompt("What would you like to do?");

	while (input !== "quit") {
		// handle input
		if (input === "list") {
			listToDos();
		} else if (input === "new") {
			addToDo();
		} else if (input === "delete") {
			deleteToDo();
		}
		// ask for new input
		input = prompt("What would you like to do?");
	}
	console.log("You have successfully quit the app.");

function listToDos() {
	console.log ("**********");
	toDoList.forEach (function(toDo, i) {
		console.log(i + ": " + toDo);
	});
	console.log ("**********");
}

function addToDo() {
	// ask for new to-do
	var toDoTask = prompt("Enter a new to-do task");
	// add to to-do array
	toDoList.push(toDoTask);
	console.log("Successfully added to-do: " + toDoTask);
}

function deleteToDo() {
	// ask for index of todo to be deleted
	var toDoIndex = prompt ("What number would you like to delete?");
	// delete that todo
	toDoList.splice(toDoIndex, 1);
	console.log("Successfully deleted to-do item #" + toDoIndex);
}
}, 500);