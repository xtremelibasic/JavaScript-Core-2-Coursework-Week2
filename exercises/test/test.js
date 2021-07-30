
// document.addEventListener('input', function (event) {

// 	// Only run on our select menu
// 	if (event.target.id !== 'wizard') return;

// 	// The selected value
// 	console.log(event.target.value);

// 	// The selected option element
// 	console.log(event.target.options[event.target.selectedIndex]);
let username = 58;
let email = 0;
let description = 2;
let formFields = [username, email, description];
let noValues = formFields.filter(element => {
	return element > 0;
})
if(noValues){
	console.log(noValues.map(element => element*2));
}