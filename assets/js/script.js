//Used for time with MomentJS API.
let m = moment();

//Gets the current hour from the momentJS api to determine description colors.
let currentHour = m.hour();

//Changes header text to show current weekday, month, and day using moment.js
document.getElementById("currentDay").textContent = m.format("dddd, MMMM Do");

// setAllColors();

//This function changes the colors of entry based on current time.
//This uses JQuery, trying to avoid for performance.
// $(function() {

//     $(this).find(".description").addClass("present");

// });

const des = document.querySelectorAll(".description");

for (const desc of des) {
    desc.classList.add("past");
}