//business end logic

var decimal = 0;
var check;
var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]




function hexaToDecimal(number) {

    decimal=0;
    for(var i=number.length-1;i>=0;i--) {
      decimal = decimal + (Math.pow(16,number.length-1-i)*array.indexOf(number[i]));
    }; return decimal;


};

//useinterface logic

$(document).ready(function() {
  $("#button1").click(function() {
    var userInput = $("#binary").val().toUpperCase();
    var result = hexaToDecimal(userInput);
    $("#results").text(result);
  });
});
