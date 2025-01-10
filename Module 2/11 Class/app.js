var i = 1;

// i = i + 2;
// i += 2;
// i++;
// console.log(i + 1);
// console.log(i);

var cities = [
  "Karachi",
  "Lahore",
  "Multan",
  "Islamabad",
  "Hyderarbad",
  "Rawalpindi",
  "Peshawar",
  "Faisalabad",
];

// for (var i = 0; i <= 6; i++) {
//   //   console.log(i);
//   console.log(cities[i]);
// }

// for (var i = 0; i < cities.length; i++) {
//     //   console.log(i);
//     console.log(cities[i]);
// }


var arr = ["apple", "orange", "banana", "mango"];
// // document.write(arr[0])
// for (var index = 0; index < arr.length; index++) {
//   //   console.log("index", index);

// //   document.write(index + 1 + ") " + arr[index] + "<br />");

//   document.write("<li>" + arr[index] + "</li>");

// }



var scoreArr = [];

var htmlScore = +prompt("Enter HTml Score");
var cssScore = +prompt("Enter CSS Score");
var jsScore = +prompt("Enter javaScript Score");

scoreArr.push(htmlScore, cssScore, jsScore);
console.log("scoreArr", scoreArr);

for (var i = 0; i < scoreArr.length; i++) {
  document.write(scoreArr[i], "<br />");
}