console.log("HELLO WORLD")

// attr
// class ==> className


// function changePara(){
//     var para = document.getElementById("para")
//     //console.log("changePara()",para.className)
//     //para.className += " " + "bigText"
    
//     //console.log(para.classList)
//     //add => Method
//     //remove => Method
//     //para.classList.add("bigText")
//     para.classList.remove("paraClass","bigText");
// }

// getElementsByClassName
// get multi emlements by class name

// var heading = document.getElementsByClassName("heading");
// console.log("heading", heading);
// console.log("headings", heading[0].innerHTML);
// console.log("headings", heading[1].innerHTML);
// console.log("headings", heading[2].innerHTML);

// getElementsByTagName
// get multi emlements by tag name

var headings = document.getElementsByTagName("h1");
// console.log("headings", headings[3].innerHTML);
// console.log("headings", headings[4].innerHTML);
// console.log("headings", headings[5].innerHTML);

for (var i = 0; i < headings.length; i++) {
    //   console.log(headings[i]);
    //   headings[i].style.backgroundColor = "black";
    //   headings[i].style.color = "white";
    if ((i + 1) % 2 == 0) {
      headings[i].style.backgroundColor = "black";
      headings[i].style.color = "white";
    }
  }
