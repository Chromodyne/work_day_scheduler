//Used for time with MomentJS API.
let m = moment();

//Gets the current hour from the momentJS api to determine description colors.
let currentHour = m.hour();

//Changes header text to show current weekday, month, and day using moment.js
document.getElementById("currentDay").textContent = m.format("dddd, MMMM Do");

//Sets up click event listeners for all elements with the saveBtn class. 
document.querySelectorAll(".saveBtn").forEach(button => {
    button.addEventListener("click", saveTimeSlot);
});

//Change the colors based on the current time.
changeColorByTime();

//Load the values from local storage on page load or reload if available.
loadFromLocal();

//This function changes the colors of the description field based on the current hour. Default will be selected
//if outside of business hours.
function changeColorByTime() {
    
    //Check the current hour, based on the number, style blocks appropriately.
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
            console.log("Outside of business hours.")
            outsideHours(currentHour);
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

    //This loops through the IDs of the time slots and colors them if they are greater than the current hour.
    for (let i = hour * 100  + 100; i <= 1700; i += 100) {
        let current = document.getElementById(i);
        current.classList.add("future");
    }

}

//This function runs if the current hour is outside of business hours to style the text areas accordingly.
function outsideHours(hour) {

    //If it is past past 5PM but not midnight, style everything as it is in the past.
    if (hour > 17 && hour != 0) {
        
        for (let i = 900; i <= 1700; i += 100) {
            let current = document.getElementById(i);
            current.classList.add("past");
        }

    //If it is past midnight but before 9AM. style everything as it is in the future.
    } else if (hour >= 0 && hour < 9) {

        for (let i = 900; i <= 1700; i += 100) {
            let current = document.getElementById(i);
            current.classList.add("future");
        }
    }

}

//Called when the save button is clicked on any slot. Depending on the time slot the contents are saved
//to local storage.
function saveTimeSlot(event) {

    let buttonClicked = event.currentTarget.id;

    //Checks the id of which button was clicked and saves the user's text into local storage.
    //Numbers used for ease of loading.
    switch (buttonClicked) {
        case "click0":

            let saveText9 = document.getElementById("9").value;
            localStorage.setItem(9, saveText9);
            saveMessage();
            break;

        case "click1":

            let saveText10 = document.getElementById("10").value;
            localStorage.setItem(10, saveText10);
            saveMessage();
            break;

        case "click2":

            let saveText11 = document.getElementById("11").value;
            localStorage.setItem(11, saveText11);
            saveMessage();
            break;

        case "click3":

            let saveText12 = document.getElementById("12").value;
            localStorage.setItem(12, saveText12);
            saveMessage();
            break;

        case "click4":

            let saveText13 = document.getElementById("13").value;
            localStorage.setItem(13, saveText13);
            saveMessage();
            break;

        case "click5":

            let saveText14 = document.getElementById("14").value;
            localStorage.setItem(14, saveText14);
            saveMessage();
        
            break;

        case "click6":

            let saveText15 = document.getElementById("15").value;
            localStorage.setItem(15, saveText15);
            saveMessage();
            break;

        case "click7":

            let saveText16 = document.getElementById("16").value;
            localStorage.setItem(16, saveText16);
            saveMessage();
            break;

        case "click8":

            let saveText17 = document.getElementById("17").value;
            localStorage.setItem(17, saveText17);
            saveMessage();
            break;

        default:
            console.log("Save state default error.");
            break;
    }

}

//This function will load the relevant data from localStorage when the page is first opened or reloaded.
function loadFromLocal() {

    for (let i = 9; i <= 17; i++) {

        if (localStorage.getItem(i) !== null) {
            document.getElementById(i).value = localStorage.getItem(i);
        }

    }

}

//Runs when the save button is clicked for any time slot giving feedback that the message was successfully saved to
//localStorage.
function saveMessage() {

    //Make text visible by changing display property.
    document.getElementById("save-msg").style.display = "block";
   
    //Slowly fade out the message until it disappears. Uses JQuery.
    $("#save-msg").fadeOut(3000);

}

