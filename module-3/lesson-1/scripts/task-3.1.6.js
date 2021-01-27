var meal = 25.00;
var tipPercentage = 10;
var tipAmount = (meal * tipPercentage) / 100;
var receipt = 'The Bill Total ' + '£' + ( meal + tipAmount ) + '<br>';
document.write (receipt);
document.write ( 'Your tip amount was: ' + '£' + tipAmount.toFixed(2) + '<br>' +);