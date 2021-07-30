
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.style.listStyle = "none";

  todos.forEach(todo => {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = todo.task;
    list.append(todoItem);

    let iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    todoItem.append(iconsDiv);

    let tickIcon = document.createElement("i");
    tickIcon.classList.add("fa", "fa-check");
    iconsDiv.append(tickIcon);

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    iconsDiv.append(trashIcon);

    tickIcon.addEventListener("click", () => {
      todoItem.style.textDecoration = "line-through";
      todo.completed = true;
    })

    console.log(todo);

    trashIcon.addEventListener("click", () => {
      todoItem.remove();
    })
  })
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newTodo = document.getElementById("todoInput").value;
  let addTodoBtn = document.getElementById("addTodo");
  addTodoBtn.addEventListener("click", () => {
    if(newTodo.length > 0){
      let newArray= [];
      let newObject = {};
      newObject.task = newTodo;
      newObject.completed = false;
      newArray.push(newObject)
      populateTodoList(newArray);
      newTodo = "";
      console.log(newTodo);
    }
  })
  
}
console.log(todos);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(todosArray) {

}
deleteAllCompletedTodos(todos);
