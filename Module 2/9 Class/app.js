// console.log("hello class 09")

//Slice

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 100];
// copy = arr.slice(2 , 7)
// copy = arr.slice(3)//from 3 index
// copy = arr.slice(0, -2);//from given index and skip last 2
// copy = arr.slice(-2);//only last 2 index
// console.log(arr);
// console.log(copy);


// Splice - add | remove
var cities = ["lahore", "karachi", "islamabad"];

//(first is startting point which is in index and second is no of index to remove)

//cities.splice(1, 1); //remove karachi 
//cities.splice(2, 1); //remove islamabad

//(first is startting point which is in index and second is no of index to remove and 
// third is new value to add after starting point)

//cities.splice(1, 0, "Multan");
cities.splice(1, 2, "multan" , "abcd" , "132" , "asdkasjd");
console.log(cities);




// loops

// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")

// for( variable ; condition ; increment/decrement       ){

// }

for (var a = 1; a <= 5; a++) {
    console.log("hello world" , a);
  }