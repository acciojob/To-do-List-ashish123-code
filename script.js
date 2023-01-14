//your code here
const inputField = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function() {
  // Get the value of the input field
  let todoItem = inputField.value;

  // Validate the input, do not allow empty submissions
  if (todoItem.trim() === "") {
    alert("Please enter a valid todo item");
    return;
  }

  // Create a new list item
  let newTodo = document.createElement("li");
  newTodo.innerHTML = todoItem;

  // Add the new list item to the todo list
  todoList.appendChild(newTodo);

  // Clear the input field
  inputField.value = "";
});


