
// Business Logic //
var resultOnes = [];
var resultTens = [];
var resultHundreds = [];
var resultThousands = [];
var userInput;

var romanNumeralResult = function(ones, tens, hundreds, thousands) {
  return resultOnes.concat(resultTens);
};
  console.log(romanNumeralResult());


var ones = function(num) {
  var resultOnes = [];
  if (num === 1) {
    resultOnes.push("I")
  } else if (num === 2) {
      resultOnes.push("II");
  } else if (num === 3) {
      resultOnes.push("III");
  } else if (num === 4) {
      resultOnes.push("IV");
  } else if (num === 5) {
      resultOnes.push("V");
  } else if (num === 6) {
      resultOnes.push("VI");
  } else if (num === 7) {
      resultOnes.push("VII");
  } else if (num === 8) {
      resultOnes.push("VIII");
  } else if (num === 9) {
      resultOnes.push("IX");
  }
  return resultOnes;
}

var tens = function(num) {
  var resultTens = [];
  if (num === 10) {
    resultTens.push("X")
  } else if (num === 20) {
      resultTens.push("XX");
  } else if (num === 3) {
      resultTens.push("III");
  } else if (num === 4) {
      resultTens.push("IV");
  } else if (num === 5) {
      resultTens.push("V");
  } else if (num === 6) {
      resultTens.push("VI");
  } else if (num === 7) {
      resultTens.push("VII");
  } else if (num === 8) {
      resultTens.push("VIII");
  } else if (num === 9) {
      resultTens.push("IX");
  }
  return resultTens;
}
// i, ii, iii, iv, v, vi, vii, viii, iv, x
//
// if number - 9 >= 0
//   result.push("IV")
//
// else  if number - 8 >= 0
//     result.push("VIII")
//
//     else  if number - 7 >= 0
//         result.push(number)
//
//         else  if number - 7 >= 0
//             result.push(number)


// Front end logic //
$(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userSubmit").val());
//If the user enters an invalid number, show an alert
    if (userInput < 0 || userInput > 3999) {
      alert ('Not a valid number. Choose a number between 1 and 3999');
    }
    var onesResult = ones(userInput);
    console.log(onesResult);
    var result = romanNumeralResult(userInput);

    // Show result
    $("#result").show();
    // Append in a list
    $("ul").append("<li>" + result + "</li>");
  });
});
// };
