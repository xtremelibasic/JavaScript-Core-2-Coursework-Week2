function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
var content = document.getElementById("content");
people.forEach(person => {
  var heading = document.createElement("h1");
  heading.innerHTML = person.name;
  content.appendChild(heading);
  var subHeading = document.createElement("h2");
  subHeading.innerHTML = person.job;
  content.appendChild(subHeading);
})
