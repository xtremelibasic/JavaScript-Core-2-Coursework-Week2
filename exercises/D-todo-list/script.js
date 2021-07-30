//Accessing the content div
let content = document.getElementById("content");

//Heading
let heading = document.createElement("h1");
heading.innerHTML = "ToDo List";
content.appendChild(heading);

//Creating an unordered list
let ulElement = document.createElement("ul");

function todoList(todos) {
  //looping through the given array
  todos.forEach(todo => {
    let listItem = document.createElement("li");
    listItem.innerHTML = todo.todo;
    ulElement.appendChild(listItem);

    //Adding  an event listener
    listItem.addEventListener("click", () => {
      if(listItem.style.textDecoration === "line-through"){
        listItem.style.textDecoration = "none";
      } else {
        listItem.style.textDecoration = "line-through"
      }
    })
  })

  //Appending the ul element to the content div
  content.appendChild(ulElement);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);