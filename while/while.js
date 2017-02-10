// var n = 0;
//
// console.log("Start the count.");
//
// while (n <= 10) {
//   console.log(n, "this is a counter.");
//   n++;
// }
//
// console.log('fin!')

// Exercise 1
// Create a while loop that logs numbers 1 through 10 to the console


var n = 1;

var outputTarget = document.querySelector('#exercise-1');
// This sends the js to the HTML
var outputHtml = "<ul>";

while (n <= 10) {
  console.log(n);
  outputHtml += "<li>" + n + "</li>"
  n++;
}
outputHtml += "</ul>"
outputTarget.innerHTML = outputHtml;

// exercise 2
// create a while loop that logs every even number from 2 - 20 to the console
//
var i = 2;
var targetTwo = document.querySelector ('#exercise-2');
var outputTwo = "<ul>"



console.log(n);

while (i <= 20) {
  console.log(i);
  outputTwo += "<li>" + i + "</li>";
  i += 2;

}
outputTwo += "</ul>";
targetTwo.innerHTML = outputTwo;

// exercise 3
// create a while loop that console.logs a running total of the culative sum of nubers from 1 to n

// var i = 1;
// // Starting value for the counter is 1
// // we'll want this to change inside of our loop
//
// var n = 50;
// // variable that wont change throughout the loop
//
// var sum = 0;
// // the value we want to track and log
//
//
// while (i < n) {
//   // every time we go through the loop (the condition is met)
//   //add the value of counter to sum
//   sum += i;
//   // console.log the new value of sum
//   console.log(sum);
//   // increment the counter by 1, then reassign new value back into counter
//   i++;
//
//
// }
//
// console.log('fin!')


var p = 1;
var t = 50;
var sum = 0;

var targetThree = document.querySelector ('#exercise-3');
var outputThree = "<ul>"


while (p < t) {

  sum += p;
  console.log(sum);
  outputThree += "<li>" + sum + "</li>";
  p++;                               
}

outputThree += "</ul>";
targetThree.innerHTML = outputThree;

console.log('fin!')


// exercise 4
// in your HTML document, create a seperate div for each exercise. Then, in addition to console.loging each
// iteration append all of the results to ther respective divs using an unordered list.

// Counting down from 15 by ones. For each number, log "even" or "odd" to the console and to a new div

var c = 15;
var targetFive = document.querySelector ('#exercise-5')
var outputFive = "<ul>"

while (c > 0){
  console.log(c);
  if(c % 2 === 0){
    outputFive += "<li> even </li>"

  } else {
    outputFive += "<li> odd </li>"

  }
  c--;
}
outputFive += "</ul>";
targetFive.innerHTML = outputFive;
