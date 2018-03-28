//business end logic

function leapyear(year) {
    // if (year%4 == 0 && year%100 !== 0 || year%400 == 0) {
    if (year >=0) {
      if (year%4 == 0 && year%100 !== 0 || year%400 == 0) {
        return "it is a leap year";
      } else {
        return "it is not a leap year";
      }
    } else {
      return "please enter a valid number";
    }
};


//useinterface logic

$(document).ready(function() {
  $("#button1").click(function() {
    var input = $("#leapyear").val();
    $("#results").text(leapyear(input));
  });
});
