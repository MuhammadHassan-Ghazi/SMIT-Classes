// console.log("Hello world")

// Loops (Repeataion of same code)

// -------------for loop------------------
// Syntax : 
//     1) Initialisation
//     2) Condition
//     3) Increment / Decrement
//     4) Block of statement 

//     for/*keyword*/(var i = 1 /*Initialisation*/ ; i <= 10 /*Condition*/; i++/*Increment / Decrement*/){
//         // Block of statement
//     }

// Loop mechanism

// check condition
// if condition true block of statements chaly ga
// increment

// for (var a = 1; a <= 5; a++) {
//   console.log("Hello World");
// }

// for (var num = 1; num <= 10; num++) {
//    console.log("num", num);
// }

//--we can reinitialise in increment

// // odd numbers
// for (var i = 1; i <= 20; i = i + 2) {
//    console.log(i);
// }

// // even numbers
// for (var i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// }

// Decrement in loop

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

//--infinite loop (Non stop)

//-- fix condition true
// for (var i = 1; true; i++) {
//   console.log("hello world");
// }

//-- fix condition false
for (var i = 1; false; i++) {
    console.log("hello world");
}

// To print in HTML Document we use document.write like console.log to print in console

// document.write("SAYLANI <br />");
// document.write("PAKISTAN ZINDABAD <br />");
// document.write("PAK ARMY ZINDABAD!");

// Table of 2 using loop

// for (var i = 1; i <= 10; i++) {
//   document.write("2 x" + i + "=" + 2 * i + "<br />");
// }
  
// Taking input of table no , start point and end point from user using prompt
var tableValue = +prompt("Enter Table Value")
var startingpoint = +prompt("Enter Starting Point")
var endingpoint = +prompt("Enter Ending Point")

var error = ""
if(tableValue == 0)
    error = "Required : Table Value"
else if(startingpoint == 0)
    error = "Required : Starting Point"
else if(endingpoint == 0)
    error = "Required : Ending Point"
else if(startingpoint > endingpoint)
    error = "Ending Point must be equal or greater than Starting Point"

if(error != "")
{
    alert(error)
}
else{
    for(var i = startingpoint; i <= endingpoint; i++){
        document.write(tableValue + ' x ' + i + ' = '+ tableValue * i + "<br />")
    }
}


// Print array values using loop
var cities = ['Karachi','Lahore','Islamabad','Multan','Faisalabad']
for(var i = 0; i <= cities.length - 1 ; i++){
    document.write(cities[i] + "<br />");
}