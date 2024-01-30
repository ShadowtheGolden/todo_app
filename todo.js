 const todoForm = document.querySelector("#newTodoForm");
 const todoList = document.querySelector("#todoList");

 todoForm.addEventListener("submit", function(event) {
	event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.querySelector("#task").value;

    newTodo.appendChild(removeButton);
	todoList.appendChild(newTodo);

    todoForm.reset();
  });

todoList.addEventListener("click", function(event) {
    let clickTarget = event.target.tagName;
    if (clickTarget === "LI") {
		if (event.target.style.textDecoration === "line-through"){
			event.target.style.textDecoration = "";
		}else {
			event.target.style.textDecoration = "line-through";
		}	
    } else if (clickTarget === "BUTTON") {
      event.target.parentElement.remove();
    }
});
