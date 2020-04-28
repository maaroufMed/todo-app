// all variable
let theInput = document.querySelector(".add-item input");
let list = document.getElementById("list");
let noTask = document.querySelector(".todo-content .no-task");
let addItem = document.querySelector('.add-item i');





// auto fucos in input
window.onload = function () {
	theInput.focus();
}


// function add item to list
function addToDo(todo) {
	let item = `
				<li class="item">
				  <i class="far fa-circle co"></i>
				  <p class="text">${todo}</p>
				  <i class="far fa-trash-alt delete"></i>					  
				</li>
				`;
	let position = 'beforeend';
	list.insertAdjacentHTML(position, item);
}


// add item with evnt on keyup
theInput.onkeyup = function (e) {
	if (e.keyCode === 13) {
		let todo = theInput.value;
		if (theInput.value === "" ) {
			swal('sory this input field is empty');
		} else {
			
		test = [];
		test.push(todo);
		console.log(test);
			
		addToDo(todo);
		noTask.remove();
		theInput.value = "";
			
		console.log(test);	

		test.forEach(function() {
			if (theInput.value === test.textContent) {
				console.log('yes');
			}
		});

		}
	}

}

// add item with click on btn
addItem.onclick = function () {
	let todo = theInput.value;
	if (theInput.value === "" ) {
		swal('sory this input field is empty');
	} else {
		test = [];
		test.push(todo);
		console.log(test);
		addToDo(todo);
		noTask.remove();
		theInput.value = "";
		theInput.focus();
	}
}

document.addEventListener('click', function(e) {
	// check in item 
	if (e.target.classList.contains('co')) {
		// toggle class of icon
		e.target.classList.toggle("fa-check-circle");
		e.target.classList.toggle("fa-circle");
		// change style 
		e.target.style.color = "green";
		e.target.nextElementSibling.style.color = '#999';

	} 
	
	// return default style
	if (e.target.classList.contains("fa-circle")) {
		e.target.style.color = "#000";
		e.target.nextElementSibling.style.color = "#000";
	}
	

	
	// delete item
	if (e.target.classList.contains("delete")){
		e.target.parentNode.remove();
	}
	
});

