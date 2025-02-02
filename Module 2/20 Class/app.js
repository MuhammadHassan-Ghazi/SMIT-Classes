// Functions
// A block of code/statements designed to perform a particular task.
// It is executed when "something" invokes it (call it).
// To run same code of statements multiple time we put that code in functon and just call it
// we can call functions multiple time where we need


// Syntax of function

// function/*keyword*/ addition/*function Name*/()/*paranthesis*/{
//     /*Block of statenments*/
// }

// function add(){
//     var num1 = 10;
//     var num2 = 30;
//     console.log(num1  + num2);
// }

// function mul(){
//     var num1 = 10;
//     var num2 = 30;
//     console.log(num1  * num2);
// }

// add()
// mul()
// add()

// console.log('hello wold 1')
// console.log('hello wold 2')
// console.log('hello wold 3')
// console.log('hello wold 5')
// console.log('hello wold 6')
// console.log('hello wold 7')

// add()
// mul()
// add()


// Calculator Function

// function calcuator(){
//     var num1 = +prompt("Enter Num1")
//     var num2 = +prompt("Enter Num2")
//     var opr = prompt("Enter Operator", "+-*/")

//     if(opr === "+")
//         console.log('add=>' , num1 + num2)
//     else if(opr === "-")
//         console.log('subtract=>' , num1 - num2)
//     else if(opr === "*")
//         console.log('multiply=>' , num1 * num2)
//     else if(opr === "/")
//         console.log('divide=>' , num1 / num2)
//     else
//         console.log('Invalid Operator')
// }


// Parameters/ Arguments

// function greet(userName/*Parameters*/){
//     console.log('Hello' , userName)
// }

// greet('Muhammad Hassan'/*Arguments*/)
    



// we can call a function in another function
// e.g:

function calcuator(){
    var num1 = +prompt("Enter Num1")
    var num2 = +prompt("Enter Num2")
    var opr = prompt("Enter Operator", "+-*/")

    if(opr === "+")
    {
        var res = add(num1,num2)
        console.log('add=>' , res)
    }
    else if(opr === "-")
    {
        var res = subtract(num1,num2)
        console.log('subtract=>' , res)
    }
    else if(opr === "*")
    {
        var res = multiply(num1,num2)
        console.log('multiply=>' , res)
    }
    else if(opr === "/")
    {
        var res = divide(num1,num2)
        console.log('divide=>' , res)
    }
    else
        console.log('Invalid Operator')
}

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

// some important points

// if params is 2 and arguments 3 , then Javascript ignore 3rd arguments
var result = add(3,5,7) 
console.log('add=>' ,result)// result : 8

// if params is 2 and arguments 1 , then Javascript return NaN
var result = subtract(3) 
console.log('add=>' ,result)// result : NaN