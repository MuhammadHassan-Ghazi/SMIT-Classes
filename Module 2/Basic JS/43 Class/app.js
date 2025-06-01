console.log(document.childNodes[1].childNodes)
// [head, text, body]  give jusk artifact (text) as child due to extra space and enter

console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes);
//                html                body          h1            text

var h1Element = document.childNodes[1].childNodes[2].childNodes[1];
h1Element.style.color = "red";

console.log(document.childNodes[1].childNodes);