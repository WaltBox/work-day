
var savBtn = $(".saveBtn");

// Functions

// current day is displayed at the top of the calendar
var date = new Date()
moment(Date);
$("#currentDay").text(moment(date).format('MMMM Do YYYY, h:mm:ss a'));


// each time block is color coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
   var hour = moment().hours();

   $(".time-block").each(function() {
       var currHour = parseInt($(this).attr("id"));

       // console.log(this); //each time-block

       if (currHour > hour) {
           $(this).addClass("future");
       } else if (currHour === hour) {
           $(this).addClass("present");
       } else {
           $(this).addClass("past");
       }
   })
};
timeBlockColor();

function applyText() {
    // Loop through all of our text element based on ID. Start at 9 and stop at 5pm = 17 military time
    for (let i = 9; i < 18; i++) {
        // Temp is equal to the current value stored in localStorage with key as the id == i
        var temp = window.localStorage.getItem(i.toString());
        // If there is something sotred in local storage at that key, display it on the screen, otherwise leave blank
        if (temp != null) {
            $('#' + i).text(temp);
        }
    }
}
/*
localStorage = {
    key: value
    key == time
    value == string inside   
}
localStorage = {
    9: 'this is a test'
    10: ''
    11: ''
    ...
    17: ''
}
setItem(key, value)
setItem(9, 'this is a test')
*/

applyText();

function saveText(id) {
    window.localStorage.setItem(id.toString(), $("#" + id.toString()).val());
}

   // console.log(this); //each time-block
// console.log(this); // each time-block




// when I click the savebtn for that time block

// console.log(this); // save button



// then the text for that event is saved in local storage



// When I refresh the page 
// The saved events stay



//console.log(this)
// console.log(currHour)



