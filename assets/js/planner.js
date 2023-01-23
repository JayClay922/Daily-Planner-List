//Using moment to set the the date in the format below and using jQuery to center the text
let today = moment();
currentDate = $("#currentDay").text(today.format("dddd, MMMM Do"));
$(".jumbotron").css("text-align", "center");

$(document).ready(function() {
    $("#saveBtn").click(function(event) {
        var text = $(".textarea .description").val();
        JSON.parse(localStorage.setItem("savedText", text))
    });

    var savedText = JSON.stringify(localStorage.getItem("savedText"));
    if (savedText) {
        $(".textarea .description").val(savedText);
    }
});

