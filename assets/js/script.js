// Function that loads all other functions when the web page is first loaded. 
window.onload = function(){
    timeColorCoding(); //runs the timeColorCoding function
    saveBtn(); //runs the saveBtn function
}

// Using Moment JS to Display the current date and update the current date
var todaysDate = null; //sets the variable todaysDate to null. Will be called in a function. 
var currentTime = null; // sets the variable currentTime to null. Will be called in a function

//Update function that allows us to set a date format using moment.js.
var update = function () { 
    todaysDate = moment (new Date ())
    $("#currentDay").html(todaysDate.format ('dddd, MMMM Do, YYYY: hh:mm:ss a')); //Writes the current date to the html page in the format of day of the week, month, date of the month (1-31), year, hour, minute, and second in that order)
};

//Function used to update the time every second. The time updates with real time information
$(document).ready(function(){
    currentTime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// Function for Color Coding. This functions loops over each time block checking to see if the currentTime is either greater than, less than, or equivalent to the hour of each timeblock.
// If the time is in the past, the timeblock is gray. If the time is in the present, the timeblock is red. If the time is in the future, the timeblock is green. 
function timeColorCoding (){
    var realTime = moment().hour();

    // Part of the function that loops through each time block parsing for the info in the id and hours fields for each timeblock. 
    $(".Timeblocks").each(function () {
        var timeBlocks = parseInt($(this).attr("id").split("hour")[1]);
    

    // If conditional statements that checks the time and provies the correct color coding depending on the time

        if (timeBlocks < realTime) {
            $(this).removeClass("present"); // removes the class present as it does not apply to this conditional statement
            $(this).removeClass("future"); // removes the class future as it does not apply to this conditional statement
            $(this).addClass("past"); // adds the class to the timeblocks as this conditional statement is supposed to display a gray background for timeblocks that are in the past.
        }

        else if (timeBlocks === realTime) {
            $(this).removeClass("past"); // removes the class past as it does not apply to this conditional statement
            $(this).removeClass("future"); // removes the class future as it does not apply to this conditional statement
            $(this).addClass("present"); // adds the present class to the timeblocks that match the conditional statement, which is anything in the present       
        }
       
        else {
            $(this).removeClass("past"); // removes the class past as it does not apply to this conditional statement
            $(this).removeClass("present"); // removes the class present as it does not apply to this conditional statement
            $(this).addClass("future"); // adds the future class to the timeblocks that match the conditional statement, which is anything in the future
        }

    })    
}
// A function that listens for the button click and sets two variables to be equal to whatever is entered into the .text fields and whatever the id fields are for each hour. 
// These variables are stored in local storage.
function saveBtn (){
    $(".saveBtn").on("click", function () { 
        var textField = $(this).siblings(".text").val();
        var timeBlock = $(this).parent().attr("id");
        localStorage.setItem(timeBlock, textField);
    })

    // Retreive items from local storage
    $("#hour8 .text").val(localStorage.getItem("hour8")); //Retrieves the info for the hour 8 timeblock from local storage
    $("#hour9 .text").val(localStorage.getItem("hour9")); //Retrieves the info for the hour 9 timeblock from local storage
    $("#hour10 .text").val(localStorage.getItem("hour10")); //Retrieves the info for the hour 10 timeblock from local storage
    $("#hour11 .text").val(localStorage.getItem("hour11")); //Retrieves the info for the hour 11 timeblock from local storage
    $("#hour12 .text").val(localStorage.getItem("hour12")); //Retrieves the info for the hour 12 timeblock from local storage
    $("#hour13 .text").val(localStorage.getItem("hour13")); //Retrieves the info for the hour 13 timeblock from local storage
    $("#hour14 .text").val(localStorage.getItem("hour14")); //Retrieves the info for the hour 14 timeblock from local storage
    $("#hour15 .text").val(localStorage.getItem("hour15")); //Retrieves the info for the hour 15 timeblock from local storage
    $("#hour16 .text").val(localStorage.getItem("hour16")); //Retrieves the info for the hour 16 timeblock from local storage
    $("#hour17 .text").val(localStorage.getItem("hour17")); //Retrieves the info for the hour 17 timeblock from local storage

}



