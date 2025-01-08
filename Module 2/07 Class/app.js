//--------------------- ARRAY -------------------------//

// An array is a special variable, which can hold more than one value.

// It is a collection of Data

// An array can hold many values under a single name, and you can access the values by referring to an 
// index number.

// It is also a Data Type.

//-------------------- Syntax of Array -------------------------//
//var cars = [];
//var arrCities = ["Karachi","Lahore"]
// var => Keyword
// arrCities => array variable name
// [] => Array brackets
//  , => Comma seperator to add more than one value

//------------------------- Array Topics -----------------------//

var fruits = ["Apple","Mango"]
console.log(fruits)
//Result : ['Apple', 'Mango']

//--Every value of array assigned index number by memory and we can access by their index number.
//--Index number start from 0

//--Syntax to access particular array value 
//-- fruits => arrayName
//-- [1] => array barackets and index no of value between open and close barackets
console.log(fruits[1])
//Result : Mango

//--we can also create an array, and then provide the elements
var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars)

//--we can also create an array by new Array function of java Script
var cars1 = new Array("Saab", "Volvo", "BMW");
console.log(cars1)



// var cities = ["Karchi","Lahore"];
// cities = "Multan";
// console.log(cities);
//Result : Multan (Reason is that array will replace by string varibale by direct assign string value)

//--To add new value in array
var cities = ["Karchi","Lahore"];
cities[2] = "Multan";
console.log(cities);
//Result : ['Karchi', 'Lahore', 'Multan']

//--if we give any index to add ,if index already exist than it will update that index value
cities[1] = "Faisalabad";
console.log(cities);
//Result : ['Karchi', 'Faisalabad', 'Multan']

//--if array have 3 values and we give to add 5 index , than 3 and 4 index value will be undefined
cities[5] = "Islamabad";
console.log(cities);
//Result : ['Karchi', 'Faisalabad', 'Multan', empty × 2, 'Islamabad']

console.log(cities[3]);
console.log(cities[4]);
//Result : undefined

//--To find total no of Data in array, we use .length method of Java Script
console.log(cities.length)
//Result : 6

//--To sort elements of array
console.log(cities.sort())

//--Accessing the Last Array Element
var fruitsarr = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruitsarr[fruitsarr.length - 1];
console.log(fruit);

//--------------------------Push -----------------------//

// The push() method adds a new element to an array (at the end)
fruitsarr.push("Lemon"); 
console.log(fruitsarr);
//Result :  ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon']
// fruitsarr[fruitsarr.length] = "Lemon"; //--another way to add element in array in last

//------------------------------Pop ------------------------//

// To remove last element from an array
fruitsarr.pop();
console.log(fruitsarr);
//Result :  ['Banana', 'Orange', 'Apple', 'Mango']

//------------------------------unShift -------------------------//

// The unshift() method adds a new element to an array (at the beginning)
fruitsarr.unshift("Lemon");
console.log(fruitsarr);
//Result :  ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']

//----------------------------------shift ---------------------//

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruitsarr.shift();
console.log(fruitsarr);