//display today's date in header
var todayDate = new Date();
document.getElementById("currentdate").innerHTML = todayDate.toLocaleDateString();

//save users input text input on class "form-control", html element is text area. save to html. when they change it. 
var createTask = function (taskText) {
    var task = $(".textarea").text(taskText);
    //append text to parent element (class=form-group)
    var input = $(".form-group");
    input.append(task);
}