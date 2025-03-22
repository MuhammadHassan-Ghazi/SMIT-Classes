function handleImg(element,event){
    if(event == 'over')
        element.src = './images/car2.jpg'
    else
        element.src = './images/car1.jpg'
}

function bulbHandler(btn){
    var bulb = document.getElementById("bulb")
    if(btn.innerHTML == "ON"){
        bulb.src = "./images/bulbOn.jpg"
        btn.innerHTML = "OFF"
    } 
    else{
        bulb.src = "./images/bulbOff.jpg"
        btn.innerHTML = "ON"
    }       
}

function styleHandler(btnEle){
    btnEle.style.backgroundColor = "black";
    btnEle.style.color = "white";
    btnEle.style.border = "1px solid red";
}