//console.log("Hello World");

// var userAge = +prompt("Enter your age");
// console.log("userAge ==>", userAge);

// Gates operators
// && => And operator
// || => OR operator

// condition1 && condition2
// true && true => true
// false && true => false
// true && false => false
// false && false => false


// condition1 || condition2
// true || true = > true
// false || true = > true
// true || false = > true
// false || false = > false

// var age = 25;
// var gender = "male";

// if (age == 18 && gender == "male") {
//     console.log("if condition");
//   } else {
//     console.log("else condition");
// }


// if (userAge >= 18) {
//   console.log("Age => ", "Allow");
// } else {
//   console.log("Age => ","Not Allow");
// }

// var gender = "other";
// console.log("userGender ==>", gender);
// if (gender == "male" || gender == "female") {
//   console.log("Gender => " ,"Allow");
// } else {
//   console.log("Gender => ","Not Allow");
// }

// -- True Values
// var a = true
// var a = 1
// var a = "Hassan"

//-- False Values
// var a = false
// var a = 0;
// var a = "";
// var a = undefined;
// var a = null;
// var a = NaN;
// if (a) {
//   console.log("if");
// } else {
//   console.log("else");
// }


// var HTMLMarks = +prompt("Enter HTML Marks");
// var CSSMarks = +prompt("Enter CSS Marks");
// var JavaScriptMarks = +prompt("Enter Java Script Marks");
// var ReactMarks = +prompt("Enter React Marks");
// var NodeMarks = +prompt("Enter Node JS Marks");

// var total = HTMLMarks + CSSMarks + JavaScriptMarks +  ReactMarks + NodeMarks;
// console.log("Obtained marks " + total + " out of 500")

// var percentage = (total / 500) * 100;
// console.log("Percentage => ",percentage)  

// var Grade = "";
// if(percentage >=90 && percentage <= 100){
//     Grade = "A+";
// } else if(percentage >=80 && percentage < 90){
//     Grade = "A";
// } else if(percentage >=70 && percentage < 80){
//     Grade = "B";
// } else if(percentage >=60 && percentage < 70){
//     Grade = "C";
// } else if(percentage >=0 && percentage < 60){
//     Grade = "FAILED";
// } else {
//     Grade = "Invalid Percentage";
// }

// console.log("Grade => " ,Grade);


var age = 17;
var gender = "male";
if ((age >= 18 || age <= 40) && gender == "male") {
  console.log("allow");
} else {
  console.log("not allow");
}