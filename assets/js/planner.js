//Using moment to set the the date in the format below and using jQuery to center the text
let today = moment();
currentDate = $("#currentDay").text(today.format("dddd, MMMM Do"));
$(".jumbotron").css("text-align", "center");


$(".saveBtn").on("click", function(){
    let value = $(this)
    .siblings(".description")
    .val();

    let time = $(this)
    .parent()
    .attr("id")

    localStorage.setItem(time, value)
});
