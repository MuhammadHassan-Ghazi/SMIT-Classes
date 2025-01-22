// console.log("HELLO WORLD");

// string is also work as array. we can run loop in string also.

//----Find index number using loop

//var str = "With HTML you can create your own Website.";

// find "Website" index num

// for (var i = 0; i < str.length; i++) {
//   // console.log(str.slice(i, i + 7));
//   if (str.slice(i, i + 7).toUpperCase() == "WEBSITE") {
//     console.log("indexNumber of Website is " , i);
//     break;
//   }
// }

// find "HTML" index number

// for (var i = 0; i < str.length; i++) {
// //   console.log(str.slice(i, i + 4));
//   if (str.slice(i, i + 4) == "HTML") {
//     console.log("indexNumber of HTML is " , i);
//     break;
//   }
// }

//----Replace word HTML to 'Hyper Text Markup Language' using loop

// var str1 = "With HTML you can create your own Website.";

// for(var i = 0; i < str1.length ;i++){
//     if (str1.slice(i, i + 4) == "HTML") {
//        var beforeHTML = str1.slice(0, i);
//        var afterHTML = str1.slice(i + 4);
//        var concat = beforeHTML + 'Hyper Text Markup Language' + afterHTML;
//        console.log(concat);
//        break;
//     }
// }


// find index by JavaScript 'indexOf' method

// if index not found return -1

// var str = "With HTML you can create HTML your own Website.";
// console.log('indexOf => ' ,str.indexOf("HTML"));// return first HTML index
// console.log('lastIndexOf => ', str.lastIndexOf("HTML"));// return last HTML index

// indexOf use for both string and array to find index

// var arr = ["lahore", "karachi"];
// var indexNum = arr.indexOf("lahore");
// console.log("indexNum", indexNum);
// if (indexNum == -1) {
//   alert("not found");
// } else {
//   alert("welcome");
// }



// replace by Javascript method

// var str = "With HTML you can create HTML your own Website.";
// var replaceStr = str.replace("HTML", "HYPER TEXT");// replace first HTML
// var replaceStrAll = str.replaceAll("HTML", "HYPER TEXT");// replace all HTML
// console.log(replaceStr);
// console.log(replaceStrAll);


// 1. indexOf => return indexNumber
// 2. replace => replace word
// 3. replaceAll => replace same word multiply time
// 4. lastIndexOf => return last value index
// 5. charAt  => return char
// 6. Math.round
// 7. Math.floor
// 8. Math.ceil

// charAt return value of given index

// var str = "saylani";
// console.log(str.charAt(2)); // Result : y
// console.log(str[0]); // short end



var num1 = 79.954651465;
console.log('Number', num1);

var numRound = Math.round(num1); // after decimal first value is between 5 to 9 then add 1, 
                                 // other wise remove decimal value
console.log(numRound, "numRound"); // Result : 80

var numFloor = Math.floor(num1); // always remove decimal 
console.log(numFloor, "numFloor"); // Result : 79

var numCeil = Math.ceil(num1);// always add one value if decimal value exist
console.log(numCeil, "numCeil"); // Result : 80
