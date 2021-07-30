//Accessing the content div
let  content = document.getElementById("content");

//Creating a paragraph
let paragraph = document.createElement("p");
content.appendChild(paragraph);

//Creating a select element
let dropDown = document.createElement("select");
dropDown.name = "colours";
dropDown.id="dropDown"

//Adding a label for the dropdown
let dropDownLabel = document.createElement("label");
dropDownLabel.for = "colours";
dropDownLabel.innerHTML = "Colours: ";
content.appendChild(dropDownLabel);


function listOfColours(colours) {
  // Looping through the given array of colours
  colours.forEach(colour => {
    let option = document.createElement("option");
    option.value = colour;
    option.innerHTML = colour;
    dropDown.appendChild(option);
  })
  content.appendChild(dropDown);

  //Adding an event listener
  dropDown.addEventListener("change", (event) => { 
    paragraph.innerHTML = `You have selected: ${event.target.value}`;
    paragraph.style.color = event.target.value;
    //console.log(event.target.options[event.target.selectedIndex]);
  }) 
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
