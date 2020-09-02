//display today's date in header
var todayDate = new Date();
document.getElementById("currentdate").innerHTML = todayDate.toLocaleDateString();

//make timeblocks an array, then assign time to them each (using moments) by adding an hour at each array item
// 1. use div class to turn timeblocks into a node
var timeblock = document.querySelectorAll('.timeblock');
// 2. turn node into an array
var timeBlockArray = Array.from(timeblock);
//now i want timeBlockArray[0] to have the quality of 9:00AM, [1]=10:00, am, etc
var k = 9;
var hour = function () {
    for (i = 0; i < timeBlockArray.length; i++) {
        timeBlockArray[i].hour = moment().set("hour", k)
        k++
    }
}

//if timeBlockArray[[i]].hour is earlier than current time set class. past
//now, make function so that if current time is equal to timeBlockArray{i}.hour, set class.present
//if timeBlockArray[i] is later than current time, set class to .future
var colorCode = function () {
    if (moment().isAfter(timeBlockArray[i].hour)) {
        $(".timeblock").addClass("past")
    }
    else if (moment().isSame(timeBlockArray[i].hour)) {
        $(".timeblock").addClass("present")
    }
    else if (moment().isBefore(timeBlockArray[i].hour)) {
        $(".timeblock").addClass("future")
    }
}

//save button - on click, will append textarea of input form to the html page, and store to local storage

//save users input text input on class "form-control", html element is text area. save to html. when they change it. 
                    // var createTask = function (taskText) {
                    //     var task = $(".textarea").text(taskText);
                    //     //append text to parent element (class=form-group)
                    //     var input = $(".form-group");
                    //     input.append(task);
                    //     console.log(task);
                    //     //save task to local storage 
                    //     saveTask();
                    // }


                        // //array for user's to do items
                        // var task = {};

                        // var saveTask = function () {
                        //   localStorage.setItem("task", JSON.stringify(task));
                        // };

//set each ROW to a different time in moments functionality i thiiiink