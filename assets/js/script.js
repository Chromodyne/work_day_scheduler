//Used for time with MomentJS API.
let m = moment();

//Gets the current hour from the momentJS api to determine description colors.
let currentHour = m.hour();

//Changes header text to show current weekday, month, and day using moment.js
document.getElementById("currentDay").textContent = m.format("dddd, MMMM Do");



//This function changes the colors of entry based on current time.
//This uses JQuery, trying to avoid for performance.
// $(function() {

//     $(this).find(".description").addClass("present");

// });

// const descriptions = document.querySelectorAll(".description");

// for (const description of descriptions) {
//     description.classList.add("past");
// }

changeColorByTime();

//This function changes the colors of the description field based on the current hour.
function changeColorByTime() {

    switch (currentHour) {

        case 9:
            document.getElementById("900").classList.add("present");
            break;

        case 10:
            document.getElementById("1000").classList.add("present");
            break;

        case 11:
            document.getElementById("1100").classList.add("present");
            break;

        case 12:
            document.getElementById("1200").classList.add("present");
            break;

        case 13:
            document.getElementById("1300").classList.add("present");
            break;

        case 14:
            document.getElementById("1400").classList.add("present");
            break;

        case 15:
            document.getElementById("1500").classList.add("present");
            break;

        case 16:
            document.getElementById("1600").classList.add("present");
            break;

        case 17:
            document.getElementById("1700").classList.add("present");
            break;

        default:
            break;

    }

}

function colorPastHours() {



}

function colorFutureHours() {


}