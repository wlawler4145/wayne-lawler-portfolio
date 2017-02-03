var firstName = prompt('What is your first name?') || "Vistor";

var lastName = prompt('What is your last name?') || "McDefaultson";

var output = document.querySelector('#greeting');

if(firstName && lastName) {
  output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
} else {
  output.innerHTML ="<p>Please tell us your name!</p>"

}



var richardFood = "sushi";
var simoneFood = "Pho";
var genaFood = "pasta";

var myFoodArray = ["Tacos", "Burriotos", richardFood, "curry", simoneFood, genaFood];

var classCity =
{
  "gena": "Ashland", "rebecca": "Memphis", "wayne": "Manchester", "richard": "Galveston", "simone": "Louisville"
}

var cityOutput = document.querySelector('#myCity')

cityOutput.innerHTML = "<p></p>"
