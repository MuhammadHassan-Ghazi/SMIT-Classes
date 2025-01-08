// console.log("Hello world")

// var city1 = "karachi";
// var city2 = "Multan";
// var city3 = "Islamabad";
// var city4 = "lahore";

// Data types
// string , number , boolean, null , undefined , Array

// Arrays

// var cities = ["karachi", "lahore"];
// //----------------Print complete array----------------
// console.log("cities", cities);
// // //index numer = > 0       ,  1
// // // console.log("cities", cities[indexNumber] );
// // ---------------Print particular index value---------
// console.log("cities", cities[1]);
// // console.log("cities", cities[0]);
// console.log("cities", cities[10]);//--Undefined if given index not in an array

// var arr = ["karachi", "lahore"];

// // arr[0] = "karachi";
// // arr[1] = "lahore";
// arr[2] = "Islamabad";

// //--To overwrite particular index value
// arr[1] = "Multan"
// console.log(arr);

// // length property of Java Script return count of total values in an array 
// // Multi datatypes values can be add in same array in JavaScript 
// var arr = ["karachi", 2025, 1992, 24, 101, 804, true, undefined, null,"Hassan"];
// console.log(arr.length);

// // index= length - 1
// // index= 0

// // if we want to get last index of array , we can get by length property . e.g:
// console.log(arr[arr.length - 1]); // Result : Hassan

// () round barackets is represents methods


// Array methods
// pop , push ==> last index
// shift , unshift ==> first index
// slice , splice

// var cities = ["karachi", "lahore"];
// //cities.pop();
// //cities.push("Multan", "Islamabad");//--we can push multiple value at a time

// cities.unshift("Islamabad");
// cities.shift(); // remove first value of array
// console.log(cities);

// pop => remove last value from array
// push => add last value in array
// shift => remmove first value of array
// unshift => add first value in array

//--To make copy of some indexes , we use slice() method

// slice , splice
// length No=>  1            2          3           4
var cities = ["karachi", "lahore", "multan", "Islamabad"];
// index No=>   0            1          2           3

console.log("cities", cities);

//.slice(index No, length No);

var arrCopy = cities.slice(1, 3); //from 1 index to 3 length no of array
arrCopy = cities.slice(1); //from 1 index to last index

//--if we give length no in minus (-)
arrCopy = cities.slice(0, -2); //from given index no and skip last 2 index (Result  ['karachi', 'lahore'])
arrCopy = cities.slice(-2); //if we give only starting point in minus(Result  "multan", "Islamabad")
arrCopy = cities.slice(0 , -1);//from given index no and skip last index (Result ['karachi', 'lahore', 'multan'])
console.log("arrCopy", arrCopy);

// var copy = cities.slice(0, 3);
// console.log("copy", copy);
// var arrCopy = cities.slice(1);
// console.log("arrCopy", arrCopy);

// var arrCopy = cities.slice(1, 3);

// // console.log(cities, "cities");
// console.log(arrCopy, "arrCopy");