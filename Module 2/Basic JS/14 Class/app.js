// console.log("hello world");

// string is also work as array. Every character of string has its index number

// var str = "Hassan Yousuf";
// console.log(str);
// console.log(str[0])
// console.log(str[str.length - 1]);
// console.log("str", str.length);


// -------------------------- slice -----------------------------
// var str = "Pakistani";
// var code = str.slice(0, -2);// Return : Pakista (length no in minus means skip value from last,if give -1 then
//                             // skip 1 , if give -2 then skip 2 values and so on)

// console.log(str);
// console.log(code, "code");

// ------------------ lowercase / upercase --------------------------------

//--whole word

// var city = prompt("enter your city!");
// console.log("city", city.toLowerCase());
// console.log("city", city.toUpperCase());

//--particular location letters from string

// long way 

// var str = "quaiD";
// var firstLetter = str[0].toUpperCase(); //q  > Q
// var otherWords = str.slice(1).toLowerCase(); //uaiD > uaid

// var cap = firstLetter + otherWords;
// console.log("firstLetter", firstLetter);
// console.log("otherWords", otherWords);
// console.log("cap", cap);

// short way

// var str = "quaiD";
// var cap = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log("cap", cap);

//-----------------Find index of (HTML) from index using 'for' loop ---------------------

var htmlString =
  "Hypertext Markup Language is the standard markup language[a] for  (HTML) documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.";
  
//   console.log("htmlString", htmlString[66]);
  
for (var i = 0; i < htmlString.length; i++) {
  // console.log(htmlString.slice(i, i + 6));
  if (htmlString.slice(i, i + 6) == "(HTML)") {
    console.log("index Number of (HTML) is ", i);
    break;
  }
}