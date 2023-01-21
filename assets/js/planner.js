//Using moment to set the the date in the format below and using jQuery to center the text
let today = moment();
currentDate = $("#currentDay").text(today.format("dddd, MMMM Do"));
$(".jumbotron").css("text-align", "center");


//Adding timeblocks in rows
for (let i = 9; i <= 17; i++) {
    let rowDiv = $("<div>").addClass("row");
    let hourDiv = $("<div>").addClass("time-block hour").text(i + ":00");
    let textArea = $("<textarea>").addClass("textarea description");
    rowDiv.append(hourDiv, textArea);
    $(".container").append(rowDiv);
};
