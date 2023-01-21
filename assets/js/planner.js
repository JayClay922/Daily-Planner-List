//Using moment to set the the date in the format below and using jQuery to center the text
let today = moment();
currentDate = $("#currentDay").text(today.format("dddd, MMMM Do"));
$(".jumbotron").css("text-align", "center");

$("container").css("display", "block")
$("time").innertext("9:00 AM");
$("plannerList").innertext("");