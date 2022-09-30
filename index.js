// Passenger Counter App
// A javascript app that counts the the number of people on the subway.

// creating a variable that stores the number of passengers and initializing it as 0
let count = 0;

// creating a variable that refers to an html tag by its id(count) and assigning it as countTag variable 
let currentCount = document.getElementById("currentCount");
// creating a variable that refers to an html tag by its id(save) and assigning it as saveTag variable 
let previousEntries = document.getElementById("previousEntries");

/* a function that increments that count variable by 1 and display the number on html. The function is executed when the INCREMENT button is pressed */
function increment() {
    // adding one to the count variable
    count += 1;
    // displying the count value to the html tag
    currentCount.textContent = count
}

// a function that saves the last count value before each save button is clicked.
function save() {
    // a string that accumulates the count values when the save button is clicked, so that it could be displayed
    let countStr = count + " - "
    // adding the new accumulated string to the previousEntries html element
    previousEntries.textContent += countStr
    // setting the count to 0 to startover, since the passenger count is already saved
    count = 0
    // setting the currentCount's textContent to the count value, so that we see 0 value on screen
    currentCount.textContent = count
}
