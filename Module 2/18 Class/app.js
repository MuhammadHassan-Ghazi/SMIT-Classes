// console.log("hello world");

//-------------------- Nested Statements

// var email = "admin@example.com";
// var password = "admin@123";

// if (email === "admin@example.com") {
//   if (password == "admin@123") {
//     console.log("ADMIN LOGIN!");
//   } else {
//     console.log("password not match!");
//   }
// } else {
//   console.log("EMAIL ADDRESS NOT FOUND!");
// }

//----------------------- Operators

// = assigning operator
// == equal to (only value)
// === equal to (value and datatype both)
// != not equal

// var num = 10;
// if (num != 11) {
//   console.log("not match!");
// } else {
//   console.log("match");
// }


//--------------------- Split
// string convert into array

// var str = "saylani";
// console.log("str", str.split("a")); // result ['s', 'yl', 'ni']
// console.log("str", str.split("")); // empty sring Result  ['s', 'a', 'y', 'l', 'a', 'n', 'i']
// console.log("str", str.split(" "));// space result ['saylani']

// var str = "HTML is the standard markup language for Web pages.";
// console.log(str);
// var arr = str.split(" ");
// console.log(arr);//result : ['HTML', 'is', 'the', 'standard', 'markup', 'language', 'for', 'Web', 'pages.']

//--------------------- Join
// array convert into string

// var arr = ["saylani", "smit", "hello", "world"];
// console.log(arr.join(" "));// result : saylani smit hello world
// console.log(arr.join(""));// result : saylanismithelloworld
// console.log(arr.join(","));// result : saylani,smit,hello,world

//---------------------- Reverse
// Reverse array value

// var arr = ["saylani", "smit", "hello", "world"];
// console.log(arr.reverse()); //result : ['world', 'hello', 'smit', 'saylani']
// console.log(arr.reverse()[0]); //result : world

//-----------Program to set 1st letter of every work in caps

// var arr = ["saylani", "smit", "hello", "world"];
// var tempArr = [];

// for (var i = 0; i < arr.length; i++) {
//   var word = arr[i];
//   //   console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());

//   tempArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
// }

// console.log(tempArr.join(" "));

//------------Date

var now = new Date();// Sat Feb 01 2025 13:48:46 GMT+0500 (Pakistan Standard Time)
console.log(now); 
now = new Date().toDateString();// Sat Feb 01 2025
console.log(now); 
now = new Date().toTimeString();// 13:51:02 GMT+0500 (Pakistan Standard Time)
console.log(now); 
