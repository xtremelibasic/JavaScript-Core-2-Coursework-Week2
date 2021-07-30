//Accessing all the elements
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let Jumbotron = document.getElementById("jumbotron");
let donate = document.getElementById("donate");
let volunteer = document.getElementById("volunteer");
let email = document.getElementById("exampleInputEmail1");
let username = document.getElementById("example-text-input");
let description = document.getElementById("exampleTextarea");
let submitBtn = document.getElementById("form-submit");


//Adding event listeners
blueBtn.addEventListener("click", () => {
    Jumbotron.style.backgroundColor = "#588fbd";
    donate.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "#ffffff";
})

orangeBtn.addEventListener("click", () => {
    Jumbotron.style.backgroundColor = "#f0ad4e";
    donate.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
})

greenBtn.addEventListener("click", () => {
    Jumbotron.style.backgroundColor = "#87ca8a";
    donate.style.backgroundColor = "#000000";
    volunteer.style.backgroundColor = "#8c9c08";
})

submitBtn.addEventListener("click", (event) => {  
    //putting the form fields in an array
    let formFields = [email, username, description];

    //Check if all fields contain a value
    let containsValues = formFields.every(element => {
        return element.value.length > 0 ;
    })

    //Filter out all fields that do not contain values
    let noValues = formFields.filter(element => {
        return element.value.length === 0;
    })

    //Checks if the value of the email field contains "@"
    if(!email.value.includes("@")){
        //fix here
        email.style.backgroundColor = "#ff7e7e";
    }

    //Checks if all fields contains valid values
    if(containsValues && email.value.includes("@")){
        alert("Thank you for filling out the form");
    }

    //Turns fields without values red
    else if(noValues) {
        event.preventDefault();
        noValues.forEach(element => {
            element.placeholder = "*Invalid field*"
            element.style.backgroundColor = "#ff7e7e";
        })
    }
})
