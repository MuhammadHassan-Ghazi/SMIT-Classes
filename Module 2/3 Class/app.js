//console.log("Hello World");

//var let const (Keywords of variables)
//var a = "saylani";
//console.log("a=>" , a);

// var result = "A+";
// console.log("before change result" , result); // A+
// result = "A";
// console.log("after change result" , result); // A

// Data

// Data Types
//typeof is a JS method to get data type of variable

//String

// var userName = "Jaffar Aman"; 
// console.log(typeof userName  )

// //Number 

// var num1 = 500; 
// //var num1 = 500.25;//--Decimal value is also consider as number data type
// console.log(typeof(num1))

// var per = "75%"

// //Boolean = True =1 / false = 0

// var isActive = false
// console.log(typeof isActive)

// //null (it is a value and store in memory)
// var userEmail = null
// console.log(userEmail)

// //undefined (it is not a value but may have value)
// var result = undefined

// var result;
// console.log(result)


//--Operators  +,-,*,/,%

// var num1 = 10
// var num2 = 3
// var add = num1 + num2
// var sub = num1 - num2
// var mul = num1 * num2
// var div = num1 / num2
// var per = num1 % num2 //--Modulus means reminder value of fraction of num1 and num2

// console.log("num1" , num1)
// console.log("num2" , num2)

// console.log("Add" , add)
// console.log("Subtract" , sub)
// console.log("Multiply" , mul)
// console.log("Divide" , div)
// console.log("Modulus" ,per)


// BODMAS Rule
// Bracket then Divide then Multiply then Addition then Substraction

// var num1 = 5;
// var num2 = 10;

// var result  = num1 + num2 * num2
// console.log("result", result);// 105

// result = num1 - (num1 + num2 * num1 + num1) - num1;
// console.log("result", result);// -60

// Concatenation
//-- if any value num1 or num2 is in string format then it will be concatenate if we give + sign 
//-- between them

// var num1 = "20"; //string
// var num2 = "80"; //string
// console.log(num1 + num2); // R : 2080

// //--if both string values having only numbers then substraction will apply other wise give NaN 

// console.log(num1 - num2);// R : -60 

// console.log(num1 - num2);// R : NaN

// //--if both string values having only numbers then multiplication will apply other wise give NaN 

// console.log(num1 * num2);// R : 1600

// console.log(num1 * num2);// R : NaN

// //--if both string values having only numbers then division will apply other wise give NaN 

// console.log(num1 / num2);// R : 0.25

// console.log(num1 / num2);// R : NaN

var firstName = "Jaffar";
var lastName = "Aman";
var fullName = firstName +" " + lastName
console.log(fullName);

//--if any value is string than after this value concatention will apply
var num1 = "10";
var num2 = 20;
var num3 = 30;
console.log(num1 + num2 + num3);// 102030

num1 = 10;
num2 = "20";
num3 = 30;
console.log(num1 + num2 + num3);// 102030

num1 = 10;
num2 = 20;
num3 = "30";
console.log(num1 + num2 + num3);// 3030

num1 = "10";
num2 = 20;
num3 = 30;
console.log(num1 + (num2 + num3));// 1050 (Add num2 and num3 due to BODMAS Rule)



