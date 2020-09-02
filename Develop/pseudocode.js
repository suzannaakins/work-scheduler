// USER STORY
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively


// ACCEPTANCE CRITERIA
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - CHECK!
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - CHECK
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//create in javascript
//use bootstrap, jquery, and moment to create the app

//div CONTAINER for bootstrap row/columns - time column, input column for tasks, and save button column (saves to localStorage)
        //first row (9am-10am): 
            //column 1 (2) : time          column 2  (8): input form         column 3 (2): save buttons
//then go into JS to attach input to colum 2 id

//pseudo code similar for JS with functions within functions INDENTED 

// On HTML, I want a div stating Today's Date: and then display today's date (add in JS)
// then I want ROWS that state an hour of time, 9AM to 5PM
//each row has text field of what time it represents
//each row is an INPUT for a task , with a save BUTTON on the right to save
// save to local storage
//retrieve from local storage if page is refreshed
//color code time blocks for past, present future 
// (i'm thinking light red for past, green for current and light blue for future)