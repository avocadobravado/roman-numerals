// Business Logic //
var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var numbers = [1, 5, 10, 50, 100, 500, 1000];


// for(var i = 0; i < numbers.length; i++) {
//   while(userInput > numbers[i]){
//     romanNumerals =
//   }
// }

// Front end logic //
$(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userSubmit").val());
//If the user enters an invalid number, show an alert
    if (userInput < 0 || userInput > 3999) {
      alert ('Not a valid number. Choose a number between 1 and 3999');
    }


    // Show result
    $("#result").show();
    // Append in a list
    $("ul").append("<li>" + userInput + "</li>");
  });
});
