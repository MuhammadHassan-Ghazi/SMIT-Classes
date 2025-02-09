function greet() {
  alert("HELLO WORLD");
}

// greet()

function getInputValue() {
    //   console.log("getInputValue");
    //   var input = document.getElementById("userName");
    //   console.log("input", input.value);
  
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
  
    // console.log("userNameInput", userNameInput.value);// R : Reference Error
    // console.log("passwordInput", passwordInput.value);// R : Reference Error
    console.log("userNameInput", userName.value);// R : Entered Name
    console.log("passwordInput", password.value);// R : Entered Password
}

function setValue() {
    //   console.log("setValue");
    var userName = document.getElementById("userName1");
    var password = document.getElementById("password");
    
    if(userName == null && password == null) 
    {
        console.log("Inavlid userName & Password Id")
        return "Inavlid userName Id"
    }
    else if(userName == null) 
    {
        console.log("Inavlid userName Id")
        return "Inavlid userName Id"
    }
    else if(password == null) 
    {
        console.log("Inavlid Password Id")
        return 
    }
    password.value = "123456789";
    userName.value = "jaffaraman";
}
  
// setValue()