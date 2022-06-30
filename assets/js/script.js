//Used for time with MomentJS API.
let m = moment();

//Gets the current hour from the momentJS api to determine description colors.
let currentHour = m.hour();

//Changes header text to show current weekday, month, and day using moment.js
document.getElementById("currentDay").textContent = m.format("dddd, MMMM Do");

changeColorByTime();

//This function changes the colors of the description field based on the current hour.
function changeColorByTime() {
    
    //TODO: Cleanup this by consolidating into a function that takes a parameter if possible.
    switch (currentHour) {

        case 9:
            document.getElementById("900").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 10:
            document.getElementById("1000").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 11:
            document.getElementById("1100").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 12:
            document.getElementById("1200").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 13:
            document.getElementById("1300").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 14:
            console.log("Case 14");
            document.getElementById("1400").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 15:
            document.getElementById("1500").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 16:
            document.getElementById("1600").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        case 17:
            document.getElementById("1700").classList.add("present");
            colorPastHours(currentHour);
            colorFutureHours(currentHour);
            break;

        default:
            console.log("Default case detected.")
            break;
        
    }

}

//This function is invoked to give all past elements a new class.
function colorPastHours(hour) {

    //This loops through the IDs of the time slots and colors them if they are less than the current hour.
    for (let i = 900; i < hour * 100; i += 100) {
        let current = document.getElementById(i);
        current.classList.add("past");
    }

}

//This function is invoked to give all future elements a new class.
function colorFutureHours(hour) {

    //TODO: Too many magic numbers. Clean this up.
    for (let i = currentHour * 100  + 100; i <= 1700; i += 100) {
        let current = document.getElementById(i);
        current.classList.add("future");
    }

}