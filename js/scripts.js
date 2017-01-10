var weight = parseFloat(prompt("Enter your weight in kilos:"));

var height = parseFloat(prompt("Enter your height in meters:"));

var heightSquared = height * height;


var bmi = function(weight, heightSquared){
return weight / heightSquared;
};

var result = bmi(weight, heightSquared);

var roundedResult = Math.round(result);

alert("Your bmi is " + roundedResult);
