//Using moment to set the the date in the format below and using jQuery to center the text.
let today = moment();
currentDate = $("#currentDay").text(today.format("dddd, MMMM Do"));
$(".jumbotron").css("text-align", "center");

// Adding event listener on the save button so that when it is clicked the values are saved on the page.
$(".saveBtn").on("click", function(){
    let value = $(this)
    .siblings(".description")
    .val();

    let time = $(this)
    .parent()
    .attr("id")

    localStorage.setItem(time, value)
});

// Getting the values from local storage, and displaying them in their respective timeslots in the DOM"
$('#0900 .description').val(localStorage.getItem('0900'));
$('#1000 .description').val(localStorage.getItem('1000'));
$('#1100 .description').val(localStorage.getItem('1100'));
$('#1200 .description').val(localStorage.getItem('1200'));
$('#0100 .description').val(localStorage.getItem('0100'));
$('#0200 .description').val(localStorage.getItem('0200'));
$('#0300 .description').val(localStorage.getItem('0300'));
$('#0400 .description').val(localStorage.getItem('0400'));
$('#0500 .description').val(localStorage.getItem('0500'));