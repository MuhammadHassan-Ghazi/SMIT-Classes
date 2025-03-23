function inputFocus(input){
    input.style.border = "2px solid blue";
    input.style.outline = "none";
}

function inputBlur(input){
    if(input.value.length >= 3){
        input.style.border = "2px solid green";
    }else{
        input.style.border = "2px solid red";
    }
}

function paraHandler(){
    var para = document.getElementById("para")
    if(!para.className.includes("bigPara"))
        para.className += " " + "bigPara";
    else
        para.className = "para";
}