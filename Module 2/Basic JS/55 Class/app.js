function signupHandler(){
     // get inputs fields
     var firstName = document.getElementById("firstName")
     var lastName = document.getElementById("lastName")
     var email = document.getElementById("email")
     var password = document.getElementById("password")

     // create user obj
    var userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    // get users from local strorage
    var userArray = JSON.parse(localStorage.getItem("users"))
    if (!userArray) {
       //first Time user
       var arr = [userObj]
       localStorage.setItem("users", JSON.stringify(arr))
       alert("User Successfully Signup!")
       window.location.href = "./index.html"
    }else{
        // Email address check already exist or not
        for(var objUser of userArray){
            if(objUser.email === email.value){
                alert("Email Address Already exist")
                return
            }
        }

        // push new user 
        usersArr.push(userObj)

        // set old and new user array of object on localstorage
        localStorage.setItem("users", JSON.stringify(usersArr))
        alert("User Successfully Signup!")
        window.location.href = "./index.html"
    }
}




function loginHandler(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    // get users from local strorage
    var userArray = JSON.parse(localStorage.getItem("users"))
    if (!userArray) {
        alert("Invalid Email or Password")
        return
    }
 
    for(var objUser of userArray){
        if(objUser.email === email.value && objUser.password == password.value){
            localStorage.setItem("userLogin", JSON.stringify(objUser))
            alert("LOGIN Successfully!")
            window.location.href = "./dashboard.html"
            return
        }
    }
    
    alert("Invalid Email or Password")
}