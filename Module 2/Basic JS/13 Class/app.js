// var userCity = "lahore";
// var arr = ["karachi", "lahore", "multan", "lahore"];

// var isMatch = "no";

// for (var i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   if (userCity == arr[i]) {
//     isMatch = "yes";
//     // alert("welcome!");
//     break;
//   }
// }

// if (isMatch == "yes") {
//   alert("Welcome!");
// } else {
//   alert("not found!");
// }


// Continue
// for (var i = 1; i <= 10; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log("i", i);
// }

//nested loop
for (var i = 1; i <= 2; i++) {
  console.log("outer loop", i);
  for (var j = 1; j <= 2; j++) {
    console.log("inner loop", j);
  }
}