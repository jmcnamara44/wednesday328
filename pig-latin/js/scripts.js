//business end logic

var test;
var str = "way";
var res;
var cons = "ay";
var vowel1 = ["a", "e", "i", "o", "u"];
var vowel2 = ["a", "e", "i", "o"];
var counter = 0;
var array = [];
var check = false;
var result = [];

function isaconsonant (phrase, vowel) {
for(j=0;j<phrase.length;j++) {  //first letter is a consonant

  for(k=0;k<vowel.length;k++) {
    if (phrase[j]==vowel[k]) {
      // return false;
        check = true;
    } else {
      console.log(vowel[k] + " " + phrase[j]);
    }
  }

  if (check == false) {
    counter+=1;
    array.push(phrase[j]);
  }
  console.log(array);
  if (check== true) {
    result = phrase.slice(counter, phrase.length) + array.join('') + "ay";
    console.log(result);

    return result;
}
}
}

function piglatin(phrase) {
  array = [];
  result = [];
  counter = 0;
  res = phrase.split("");
  // console.log(res);

  for(var i=0;i<vowel1.length;i++) {       //first letter is vowel
  if (phrase[0] ==vowel1[i]) {  //first letter is vowel
    test = phrase.concat(str);  //first letter is vowel
    return test;  //first letter is vowel
  } else if (phrase[0] == "q"){  //first letter is a consonant
    isaconsonant(phrase, vowel2);
     //function end
   } else {
     isaconsonant(phrase, vowel1);
   }
  }


};


//useinterface logic

$(document).ready(function() {
  $("#button1").click(function() {
    var input = $("#piglatin").val();
    $("#results").text(piglatin(input));
  });
});
