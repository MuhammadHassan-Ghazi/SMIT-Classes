// console.log("Hello world");

// var gender = "male";
// console.log("gender => " ,gender)

// if statements

// Syntax of condition

// if(condition){
//     // block of statements
// }else{

// }

// document.write is use to print in Html document

// var gender = "female";
// if(gender == "male"){
//     document.write("Male")
// }
// else{
//     document.write("Female")
// }


// =  > assigning operator
// == > check value equal to
// === > check value and data type both
// var a = "10";
// if (a === 10) {
//   console.log("OK!");
// } else {
//   console.log("ERROR");
// }


// var val = null;
// console.log(typeof(val))

// if(typeof(val) == 'number'){
//     console.log("Data Type =>", 'number')
// }
// else if(typeof(val) == 'string'){
//     console.log("Data Type =>", 'string')
// }
// else if(typeof(val) == 'boolean'){
//     console.log("Data Type =>", 'boolean')
// }
// else if(val === null)/*if variable value is null than typeof method return object type*/{
//     console.log("Data Type =>", 'null')
// }
// else if(typeof(val) == 'undefined'){
//     console.log("Data Type =>", 'undefined')
// }
// else{
//     console.log("Data Type =>", 'other')
// }



// var age = +prompt("Enter your age!");
// if (age === 18) {
//   console.log("Allow");
// } else {
//   console.log("not Allow");
// }


// var num1 = +prompt("Enter Number 1");
// var num2 = +prompt("Enter Number 2");
// var opt = prompt("Enter opt", "+, -, *, /, %");
// //console.log("num1 => " , num1)
// //console.log("num2 => " , num2)
// //console.log("Operator => " , opt);
// document.write("num1 => " + num1 + "<br>");
// document.write("num2 => " + num2 + "<br>");
// document.write("Operator => " + opt + "<br>");

// if (opt == "+") {
//   //console.log("Add", num1 + num2);
//   document.write("Add", num1 + num2);
// } else if (opt == "-") {
//   //console.log("Subtract", num1 - num2);
//   document.write("Subtract", num1 - num2);
// } else if (opt == "*") {
//   //console.log("Multiply", num1 * num2);
//   document.write("Multiply", num1 * num2);
// } else if (opt == "/") {
//   //console.log("Divide", num1 / num2);
//   document.write("Divide", num1 / num2);
// } else if (opt == "%") {
//     //console.log("Modulus", num1 % num2);
//     document.write("Modulus", num1 % num2);
// } else {
//   //console.log("Invalid Operator");
//   document.write("Modulus", num1 % num2);
// }



// 18 , 20 , 25 , 30 => allow
// var age = 10;
// if (age == 18) {
//   console.log("allow");
// } else if (age == 20) {
//   console.log("allow");
// } else if (age == 25) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// some other operators

// >  Greater than
// <  Less than
// >= Greater than or equal to
// <= Less than or equal to

//var age = prompt("enter your age");
// if (age >=  18) {
//   console.log("ALLOW");
// } else {
//   console.log("NOT ALLOW");
// }

// if (age < 13) {
//     console.log("Child");
// } else if(age < 20){
//     console.log("Teenager");
// } else if(age >= 20 && age <= 39){
//     console.log("Adult");
// }
// else {
//     console.log("Old Ager");
// }

var a = 8; //9  //10 //11 //10 //11 //12 //11
// console.log(a++ + a++ + ++a - --a - ++a + a++ + --a);
// 8 + 9 + 11 + 11 - 10;

console.log(a++ + ++a + --a - a--);

a = 8;
console.log(a-- - a-- - ++a + a++ + a + --a);

a = 8;
console.log(a++ + a++ + ++a - --a - ++a + a++ + --a);


