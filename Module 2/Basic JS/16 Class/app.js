
//------------------------ Math.random() -------------------------------

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// Math.random() always returns a number lower than 1.
var randomNum = Math.random()
console.log(randomNum , "randomNum")

// Math.random() used with Math.floor() can be used to return random integers.

// Returns a random integer from 0 to 9:
// var randomNum1 = Math.floor(Math.random() * 10);
// console.log(randomNum1)

// var randomNum2 = Math.floor(Math.random() * 6 + 1);
// console.log("randomNum", randomNum2);


// var userInput = +prompt("Enter number 1 to 10");

// var num = Math.floor(Math.random() * 10 + 1);
// // var num = 5;
// console.log("num", num);

// if (userInput === num) {
//   alert("Match");
// } else if (userInput - 1 === num || userInput + 1 === num) {
//   alert("Close number");
// } else if (userInput < num) {
//   alert("your numer is less then");
// } else if (userInput > num) {
//   alert("your numer is greater then");
// } else {
//   alert("Invalid Number");
// }


//--------------------------------- Type Conversion -------------------------------

// var str1 = "100";
// var str2 = "300";

// console.log(typeof +str1);
// var add = +str1 + +str2;
// console.log(add);

// Number() -> string to Number
// parseInt() -> string to integer (ignore decimal value same as Math.floor() method)

// var str = Number("412.24654165");
// console.log(str);// Result : 412.24654165

// var str = parseInt("412.24654165");
// console.log(str);// Result : 412

// String() => convert number and integers to string
// .toString() => convert number and integers to string

// var number = String(12131); // number
var number = 12131; // number
// convert num into str
console.log(typeof number.toString());
