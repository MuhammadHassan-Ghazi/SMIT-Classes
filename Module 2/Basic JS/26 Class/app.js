function foo() {
    console.log("foo");
}

function mouseEnter() {
    console.log("mouseEnter");
}

function mouseOut() {
    console.log("mouseOut");
}

function seeMore() {
    var longText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio temporibus odio "
    longText += "architecto mollitia? Assumenda libero vitae aliquam optio, tempore voluptas incidunt? Non "
    longText += "doloremque facere dolorum, nesciunt incidunt esse animi. Repellat! "
    longText += "<a href=\"javascript:void(0)\" onclick=\"seeLess()\">See Less</a>";
    
    var paraElement = document.getElementById("paraElement");
    // console.log("seeMore", paraElement.innerHTML);
    paraElement.innerHTML = longText;
}

function seeLess() {
    var shortText = "Lorem ipsum dolor sit amet. "
    shortText += "<a href=\"javascript:void(0)\" onclick=\"seeMore()\">See more</a>";

    var paraElement = document.getElementById("paraElement");
    // console.log("seeLess", paraElement);
    paraElement.innerHTML = shortText;
}

function bigImage(){
    var carImage = document.getElementById("carImage");
    carImage.width = 500
    carImage.height = 300
}

function changeImage(){
    var carImage = document.getElementById("carImage");
    // console.log(carImage.src)
    if(carImage.src.includes("/images/car1.jpg"))
        carImage.src = "./images/car2.jpg"
    else
        carImage.src = "./images/car1.jpg"
}