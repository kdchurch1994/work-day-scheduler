// Using Moment JS to Display the current date and update the current date
var todaysDate = null;
var currentTime = null;

var update = function () {
    todaysDate = moment (new Date ())
    $("#currentDay").html(todaysDate.format ('dddd, MMMM Do, YYYY: hh:mm:ss a'));
};

$(document).ready(function(){
    currentTime = $('#currentDay')
    update();
    setInterval(update, 1000);
});
