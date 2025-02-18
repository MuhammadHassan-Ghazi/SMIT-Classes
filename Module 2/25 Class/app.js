function getValues() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  console.log("email", email.value);
  console.log("password", password.value);
}

function setValues() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  email.value = "jaffar@gmail.com";
  password.value = "12345";
}

function showHidePassword(){
    var password = document.getElementById("password");
    var showHideButton = document.getElementById("showHideButton");
    if(password.type == "password"){
        password.type = "text"
        showHideButton.innerText = "Hide Password"
    }else{
        password.type = "password"
         showHideButton.innerText = "Show Password"
    }
}

function getPara() {
    var para = document.getElementById("para");
    console.log("para", para.innerHTML);
  }
  
function setPara() {
    var para = document.getElementById("para");
    para.innerHTML = "SET PARA VALUES";
}

function foo() {
    console.log("foo function called");
}