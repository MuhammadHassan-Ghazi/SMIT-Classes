// console.log("HELLO WORLD");

// var now = new Date();
// console.log("now", typeof now); // object (we can't use slice method in object datatype)

// var now = new Date().toString();// convert object into string 
// console.log("now", typeof now); // string
// console.log("now", now.slice(0, 3));

// var now = new Date().toDateString();
// console.log("now", typeof now); // string
// console.log("now", now.slice(0, 3));

// var now = new Date().toTimeString();
// console.log("now", typeof now); // string
// console.log("now", now.slice(0, 3));


// new Date() => data type object

// var dayofWeek = new Date().getDay(); //day of week 0-6 0 is sunday
// console.log("dayofWeek" ,dayofWeek);
// var getMonth = new Date().getMonth(); // 0-11  0 jan 11 dec
// console.log("getMonth" ,getMonth + 1);
// var getDate = new Date().getDate(); // 1-31
// console.log("getDate" ,getDate);
// var getYear = new Date().getFullYear(); // 2020  
// console.log("getYear" ,getYear);
// var getHR = new Date().getHours(); // current hours i.e: it 2:42 pm then result is 14
// console.log("getHours" ,getHR);

// var now = new Date().getMilliseconds(); // 1 sec = 1000 milliseconds
// console.log(now);// return current millisecond of current second

// var now = new Date().getTime();// return millisecond from 1 Jan 1970 to current
// console.log(now);

//---------------Age calcaulation

// var userDOB = prompt("Enter your DOB", "01 Jan 1999");
// // console.log(userDOB.getTime());
// var userDate = new Date(userDOB).getTime();
// // console.log(userDate);
// var currentDate = new Date().getTime();
// // // console.log("currentDate", currentDate);
// var diff = currentDate - userDate;
// var age = diff / (1000 * 60 * 60 * 24 * 365);
// console.log("age", Math.floor(age));
// // console.log("diff", diff);


// Functions
// to call block of statements multi time and particular time we use functions

// function   function_name  () {

// }

// function myFirstFunc() {
//   console.log("HELLO WORLD1");
//   console.log("HELLO WORLD2");
//   console.log("HELLO WORLD3");
// }

// myFirstFunc()

// var add = 10 + 20;
// console.log(add);

function add() {
    var add = 30 + 20;
    console.log(add);
  }
  add()
  console.log("hello 1");
  console.log("hello 1");
  console.log("hello 1");
  console.log("hello 1");
  console.log("hello 1");
  add()
  // var add = 20 + 30;
  // console.log(add);