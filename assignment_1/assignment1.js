/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var numbers;
console.log('Hello World');
numbers = [];
console.log(numbers);

//Hands-on Challenge
var name = 'Eugene';
console.log('Hello ' + name);


/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/

for(var i=0;i<10;i++){
    //use the array push() method here.
    numbers.push(i+1);
}
console.log(numbers);

//Hands-on Challenge
var x = 1125;
x %= 2;
console.log(x);


/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
console.log(numbers[0]);
console.log(numbers[9]);

//Hands-on Challenge
var a = true;
var b = false;
var c = true;
console.log(a || b || c);

/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
var car;
car = {colour:'black'};
console.log(car.colour);
console.log(car[0]);

//Hands-on Challenge
var answer1 = 10 - 3 * 5 / 4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log('answer1: ' + answer1);
console.log('answer2: ' + answer2);

//Exercise #6
//Hands-on Challenge
x = '12';
console.log(x.toString());
console.log(parseInt('113'));
console.log(parseInt('1.12356'));
x = parseInt('Hello World');
console.log(x);

//Diving Deeper
//Hands-on Challenge
var match = 'BrainStation';
var string1 = "I am a BrainStation student.";
var string2 = "I am a student.";

console.log(string1.search(match));
console.log(string2.search(match));

var newstring1 = string1.replace("BrainStation student", "Junior Developer");
console.log(newstring1);


