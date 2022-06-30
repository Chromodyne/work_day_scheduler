//Used for time with MomentJS API.
let m = moment();

//Gets the current time from the momentJS api.
let currentTime = m.format("LT");

//Changes header text to show current weekday, month, and day using moment.js
document.getElementById("currentDay").textContent = m.format("dddd, MMMM Do");

console.log(currentTime);