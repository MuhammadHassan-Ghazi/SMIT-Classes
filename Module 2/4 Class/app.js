// console.log('Hello class')


// +-*/

// var a = 5;
// a = a + 1
// console.log("a=>", a);

// var b = 10;
// b = b + 10;
// //b += 5; //Shortend to increase values
// console.log("b=>",b);


// var fullName = "jaffar";
// fullName += " " + "Aman";
// console.log("fullName", fullName);

// INCREMENT / DECREMENT

// //--POST INCREMENT (++ after variable name) (FIRST PRINT THEN ADD VALUE 1 IN VALUE)
// var a = 10;
// console.log(a++ , a); // Result : 10 , 11 


// //--PRE INCREMENT (++ before variable name) (FIRST ADD 1 IN VALUE THEN PRINT)
// var b = 20;
// console.log(++b , b); // Result : 21 , 21 


// //--POST DECREMENT (-- after variable name) (FIRST PRINT THEN SUBTRACT 1 FROM VALUE)
// var c = 30;
// console.log(c-- , c); // Result : 30 , 29


// //--PRE DECREMENT  (-- before variable name) (FIRST SUBTRACT 1 FROM VALUE THEN PRINT)
// var d = 40;
// console.log(--d , d); // Result : 39 , 39

// practice of increment and decrement

// var a = 5;
// var result = a++ + a + ++a
// //            5  + 6 + 7
// console.log("result", result); // Result :  18

// a = 5;  
// result = ++a + ++a + a + a++ + a++;
// //        6  +  7  + 7 +  7 +  8
// console.log("result", result); // Result :  35

// a = 5;
// result = a++ - ++a + a + a-- + --a + a
// //        5  -  7 +  7  + 7  +  5  + 5
// console.log("result", result); //  Result : 22

// a = 10; //9 //8 //7 //8 //9 /8 /9 /8
// result = --a + --a + a-- + a + a++ + ++a - --a + a++ - --a;
// //         9 +   8 + 8   + 7 + 7   +   9 -   8 + 8   -   8
// console.log("result", result); // Result : 40


// PROMPT (show alert with input)

// var  userName = prompt("Enter your name");
// //var  userName = prompt("Enter your name"/* Label*/,"Name" /*Default value */);
// console.log("userName" , userName)

// To convert into number data type
var num1 = +prompt("enter your num1");
var num2 = +prompt("enter your num2");
console.log(num1 + num2);

// var name = prompt("Enter your name", "best Practices");

// condition => if / else

// // var age = 18
// console.log("ALLOW")
// console.log("NOT ALLOW")

// = ==> assigning opt
// == ==> equal to
// === ==> equal to

var age = 18;
if (age == 18) {
  console.log("Allow");
} else {
  console.log("not Allow");
}

console.log(age);

// if (condition) {
//
// }
// else{

// }