// var num1 = +("100"); //string data type
// var num2 = "200"; //string dat type

// Number() -> string to Number
// parseInt() -> string to integer (ignore decimal value same as Math.floor() method)

// var num1 = Number("100.20");
// var num1 = parseInt("100.201");
// console.log(typeof num1);
// console.log(num1);

// console.log(num1 + num2);

// var value = +"10a";
// console.log(value);// Result : NaN bcause can't convert 10a in number

// String() => Convert number and integers to string
// .toString() => Convert number and integers to string

// var value = String(true); //boolean
// console.log(typeof value);

// var num1 = 100.456421;
// console.log(typeof num1.toString());

// JavaScript toFixed()

// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.
// paramter Optional. Number of decimals. Default is 0 (no decimals)

var num1 = 550.5;
console.log(num1.toFixed(), "num1");

var num1 = 999.95556;
console.log(num1.toFixed(4), "num1");
console.log(num1);


