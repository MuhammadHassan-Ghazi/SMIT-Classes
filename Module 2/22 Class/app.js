// function calc(num1 = 0, num2 = 0, opt = "+") {
//   //   console.log("num1", num1);
//   //   console.log("num2", num2);
//   //   console.log("opt", opt);

//   if (opt === "+") {
//     return num1 + num2;
//   } else if (opt === "-") {
//     return num1 - num2;
//   } else if (opt === "*") {
//     return num1 * num2;
//   } else if (opt === "/") {
//     return num1 / num2;
//   } else {
//     return "Invalid OPT";
//   }
// }

// var num1 = +prompt("enter num1");
// var num2 = +prompt("enter num2");
// var opt = prompt("enter opt");

// var result = calc(num1, num2, opt);
// console.log("result", result);

// function calc(num1 = 0, num2 = 8, opt = "+")
// {
//     if (opt === "+") {
//         console.log( num1 + num2);
//     } else if (opt === "-") {
//         console.log( num1 - num2);
//     } else if (opt === "*") {
//         console.log( num1 * num2);
//     } else if (opt === "/") {
//         console.log( num1 / num2);
//     } else {
//         console.log( "Invalid OPT");
//     }
// }

// calc(5,"/") R : 5/


// LOCAL / GLOBAL Scope
// var str = "Hassan"
// function foo() {
//   if(str == "Hassan") 
//   {
//     var a = 10; //local scope
//   }
//   console.log(a, "inside the function"); // if str == Hassan then give a value 10 other wise undefined
// }

// foo();

// console.log(a, "outside"); // Result : reference error

// Concultion : 
// Any variable which is create in a function or , is only accessible in its 
// block and can re-initialize only in its block


// var a = 200 //global scope
// console.log(a , "outside a") // R : 200

// function foo(){
//     // var a = 100 //local scope
//     console.log(a , "inside a")// R : 200
// }

// foo()

// var a = 200 //global scope
// console.log(a , "outside a") // R : 200

// function foo(){
//     a = 100 
//     console.log(a , "inside a")// R : 100
// }

// foo()



var num1 = 10;

function foo() {
  num1 = 100;
  console.log(num1);
}

foo();

console.log(num1, "outside");


