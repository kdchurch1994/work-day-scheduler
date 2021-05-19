

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
// If the time is in the past, the timeblock is grey. If the time is in the present, the timeblock is red. If the time is in the future, the timeblock is green. 
function timeColorCoding (){
    var realTime = moment().hour();

    //part of the function that loops through each time block parsing for the info in the id and hours fields for each timeblock. 
    $(".Timeblocks").each(function () {
        var timeBlocks = parseInt($(this).attr("id").split("hour")[1]);
    

    // If conditional statement that checks the time and provies the correct color coding depending on the time

        if (timeBlocks < realTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }

        else if (timeBlocks === realTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");        
        }
       
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })    
}
timeColorCoding();