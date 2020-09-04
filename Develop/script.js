//display today's date in header
var todayDate = new Date();
document.getElementById("currentdate").innerHTML = todayDate.toLocaleDateString();

//make timeblocks an array, then assign time to them each (using moments) by adding an hour at each array item
// 1. use div class to turn timeblocks into a node
var timeblock = document.querySelectorAll('.timeblock');
// 2. turn node into an array
var timeBlockArray = Array.from(timeblock);
//now i want timeBlockArray[0] to have the quality of 9:00AM, [1]=10:00, am, etc
// var k = 9;
// var hour = function () {
//     for (i = 0; i < timeBlockArray.length; i++) {
//         timeBlockArray[i].hour = moment().set("hour", k)
//         k++
//     }
// }

var update = function() {
    var currentHour = moment().hours();
    $(".timeblock").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
    })
    if (hourBlock < currentHour) {
        $(this).addClass("past")
    }
    else if (hourBlock === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
    }
    else if (hourBlock > currentHour) {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")

    }
}
 
update(); 

// //timeBlock is color code based on past, present, future
// var colorCode = function (hour) {
//     console.log(timeBlockArray[1].hour);
//     if (moment().isAfter(timeBlockArray[i].hour)) {
//         $(".timeblock").addClass("past")
//     }
//     else if (moment().isSame(timeBlockArray[i].hour)) {
//         $(".timeblock").addClass("present")
//     }
//     else if (moment().isBefore(timeBlockArray[i].hour)) {
//         $(".timeblock").addClass("future")
//     }
// }

//form-group clicked to create task
$(".form-group").on("click", "textarea", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("time-block")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

var saveTask = function () {
    localStorage.setItem("tasks", JSON.stringify(timeBlockArray));
};

//save button - on click, will append textarea of input form to the html page, and store to local storage
$(".saveBtn").on("click", function () {
    saveTask();
});

console.log(localStorage);

var loadTasks = function () {
    uploadTasks = JSON.parse(localStorage.getItem("tasks"));
}

loadTasks();
// hour(); 
// colorCode();