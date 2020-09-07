//display today's date in header
var todayDate = new Date();
document.getElementById("currentdate").innerHTML = todayDate.toLocaleDateString();

//make timeblocks an array, then assign time to them each (using moments) by adding an hour at each array item
// 1. use div class to turn timeblocks into a node
var timeblock = $('textarea');
// 2. turn node into an array
var timeBlockArray = Array.from(timeblock);

var updateTime = function () {
    var currentHour = moment().hours();
    $(".timeblock").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
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
    })
}

updateTime();

// //variables for text input
var text9 = $("#9")
var text10 = $("#10")
var text11 = $("#11")
var text12 = $("#12")
var text1 = $("#1")
var text2 = $("#2")
var text3 = $("#3")
var text4 = $("#4")
var text5 = $("#5")

//save text inputs to local storage upon Save Button click
$(".saveBtn").on("click", function () {
    var text9 = $("#9").val().trim();
    $("<textarea>").append(text9);
    localStorage.setItem("text9", JSON.stringify(text9));
});

$(".saveBtn").on("click", function () {
    var text10 = $("#10").val().trim();
    $("<textarea>").append(text10);
    localStorage.setItem("text10", JSON.stringify(text10));
});

$(".saveBtn").on("click", function () {
    var text11 = $("#11").val().trim();
    $("<textarea>").append(text11);
    localStorage.setItem("text11", JSON.stringify(text11));
});

$(".saveBtn").on("click", function () {
    var text12 = $("#12").val().trim();
    $("<textarea>").append(text12);
    localStorage.setItem("text12", JSON.stringify(text12));
});

$(".saveBtn").on("click", function () {
    var text1 = $("#1").val().trim();
    $("<textarea>").append(text1);
    localStorage.setItem("text1", JSON.stringify(text1));
});

$(".saveBtn").on("click", function () {
    var text2 = $("#2").val().trim();
    $("<textarea>").append(text2);
    localStorage.setItem("text2", JSON.stringify(text2));
});

$(".saveBtn").on("click", function () {
    var text3 = $("#3").val().trim();
    $("<textarea>").append(text3);
    localStorage.setItem("text3", JSON.stringify(text3));
});

$(".saveBtn").on("click", function () {
    var text4 = $("#4").val().trim();
    $("<textarea>").append(text4);
    localStorage.setItem("text4", JSON.stringify(text4));
});
$(".saveBtn").on("click", function () {
    var text5 = $("#5").val().trim();
    $("<textarea>").append(text5);
    localStorage.setItem("text5", JSON.stringify(text5));
});


//load tasks when page is refreshed
var loadTask9 = function () {
    text9.val = JSON.parse(localStorage.getItem("task9"));
}
var loadTask10 = function () {
    timeBlockArray[1].textarea = JSON.parse(localStorage.getItem("text10"));
}
var loadTask11 = function () {
    timeBlockArray[2].textarea = JSON.parse(localStorage.getItem("text11"));
}
var loadTask12 = function () {
    timeBlockArray[3].textarea = JSON.parse(localStorage.getItem("text12"));
}
var loadTask1 = function () {
    timeBlockArray[4].textarea = JSON.parse(localStorage.getItem("text1"));
}
var loadTask2 = function () {
    timeBlockArray[5].textarea = JSON.parse(localStorage.getItem("text2"));
}
var loadTask3 = function () {
    timeBlockArray[6].textarea = JSON.parse(localStorage.getItem("text3"));
}
var loadTask4 = function () {
    timeBlockArray[7].textarea = JSON.parse(localStorage.getItem("text4"));
}
var loadTask5 = function () {
    timeBlockArray[8].textarea = JSON.parse(localStorage.getItem("text5"));
}

loadTask9();
loadTask10();
loadTask11();
loadTask12();
loadTask1();
loadTask2();
loadTask3();
loadTask4();
loadTask5();


// //FIND ELEMENT CLICKED
// var pageBodyEl = document.querySelector(".container");
// console.log(pageBodyEl)
// var findElement = function (event) {
//     console.log(event.target)
// };
// pageBodyEl.addEventListener("click", findElement);