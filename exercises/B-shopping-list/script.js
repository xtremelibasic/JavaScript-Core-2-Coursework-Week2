function shoppingList(arrayOfPeople) {
  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

var content = document.getElementById("content");

var list = document.createElement("ul");

shopping.forEach(item => {
  var listItem = document.createElement("li");
  listItem.innerHTML = item;
  list.append(listItem);
})

content.append(list);