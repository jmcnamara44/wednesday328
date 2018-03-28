//business end logic

var decimal = 0;
var check;

var toDecimal = function(number) {
  for(var j=0;j<number.length;j++) { console.log("hello");
    if (number[j] == "0" || number[j] == "1") {
      check = true;

    } else {
      check = false;
      console.log(check);
      break;
    }
    
  };
  if (check == true) {
    decimal=0;
    for(var i=number.length-1;i>=0;i--) {
      decimal = decimal + (Math.pow(2,number.length-1-i)*parseInt(number[i]));
    }; return decimal;
    } else {
      return "please enter only numbers in binary";
    }
console.log(check);
};

//useinterface logic

$(document).ready(function() {
  $("#button1").click(function() {
    var userInput = $("#binary").val();
    var result = toDecimal(userInput);
    $("#results").text(result);
  });
});
