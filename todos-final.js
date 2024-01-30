const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");

// retrieve from localStorage
console.log(localStorage);

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

console.log(savedTodos);

for (let taskdetails of savedTodos){
	let newTodo = document.createElement("li");
	let newButton = document.createElement("button");
	newButton.innerText = "X";
	
	newTodo.innerText = taskdetails.task;
	if (taskdetails.strike === true){
		newTodo.style.textDecoration = "line-through";
	} else {
		newTodo.style.textDecoration = "";
	}
	
	newTodo.appendChild(newButton);
	todoList.appendChild(newTodo);
	
	todoForm.reset();
}
	
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let removeButton = document.createElement("button");
  removeButton.innerText = "X";

  let newTodo = document.createElement("li");
  newTodo.innerText = document.querySelector("#task").value;
  
  newTodo.appendChild(removeButton);
  todoList.appendChild(newTodo);
  
  todoForm.reset();

  // save to localStorage
  savedTodos.push({'task': newTodo.innerText.slice(0, -1), 'strike': false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
  let clickTarget = event.target.tagName;
  if (clickTarget === "LI") {
	  if(event.target.style.textDecoration === "line-through"){
		  event.target.style.textDecoration = "";
		  for (let i = 0; i < savedTodos.length; i++) {
			  if (savedTodos[i]['task'] === event.target.innerText.slice(0, -1)){
				  savedTodos[i]['strike'] = false;
			  }
		  }
	  } else {
		  event.target.style.textDecoration = "line-through";
		  for (let i = 0; i < savedTodos.length; i++) {
			  if (savedTodos[i]['task'] === event.target.innerText.slice(0, -1)){
				  savedTodos[i]['strike'] = true;
			  }
		  }
	  }
	  localStorage.setItem("todos", JSON.stringify(savedTodos));
  }
  if (clickTarget === "BUTTON"){
	  for (let i = 0; i < savedTodos.length; i++) {
		  if (savedTodos[i]['task'] === event.target.parentElement.innerText.slice(0, -1)){
			  savedTodos.splice(i, 1);
		  }
	  }
	  event.target.parentElement.remove();
	  localStorage.setItem("todos", JSON.stringify(savedTodos));
  }  
});