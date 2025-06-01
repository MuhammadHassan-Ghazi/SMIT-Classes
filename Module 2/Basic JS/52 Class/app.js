function signupHandler(){
    var inputfirstName  = document.getElementById("firstName");
    var inputlastName = document.getElementById("lastName");
    var inputemail = document.getElementById("email");
    var inputpassword = document.getElementById("password");

    var firstName  = inputfirstName.value.trim();
    var lastName = inputlastName.value.trim();
    var email = inputemail.value.trim();
    var password = inputpassword.value.trim();

    var error = validate(firstName,lastName,email,password);
    if(error)
    {
        alert(error)
        return
    }

    // create user obj
    var userObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }

    // get users on localStorage
    var users = localStorage.getItem("users")

    if(users == null){
        // first user
        var array = [userObj]
        localStorage.setItem("users",JSON.stringify(array))
    }else{
         // parse Array of obj
         var usersArr = JSON.parse(users)

         // Duplicate Email address checking
         for (var i = 0; i < usersArr.length; i++) {
             //console.log(usersArr[i].email)
             if(userObj.email === usersArr[i].email ){
                 alert("Email Address Already exist")
                 return
             }
         }

         // new user add in array
         usersArr.push(userObj)

         // set old and new user array of object on localstorage
        localStorage.setItem("users", JSON.stringify(usersArr))
    }

    // set input on add mode
    inputfirstName.value = inputlastName.value = inputemail.value = inputpassword.value = "";
}

function validate(firstName,lastName,email,password){
    var MandatoryErrors = "";
    if(firstName == "")
        MandatoryErrors = `Required : First Name`;
    if(lastName == "")
        MandatoryErrors += `${MandatoryErrors ? "\n" : ""}Required : Last Name`;
    if (email == "")
        MandatoryErrors += `${MandatoryErrors ? "\n" : ""}Required : Email`;
    if (password == "")
        MandatoryErrors += `${MandatoryErrors ? "\n" : ""}Required : Password`;

    return MandatoryErrors;

    // var errors = [];
    // if (!firstName) errors.push("Required : First Name");
    // if (!lastName) errors.push("Required : Last Name");
    // if (!email) errors.push("Required : Email");
    // if (!password) errors.push("Required : Password");

    // var MandatoryErrors = errors.join("\n");
}

function loginHandler(){
    var inputemail = document.getElementById("email");
    var inputpassword = document.getElementById("password");

    var email = inputemail.value.trim();
    var password = inputpassword.value.trim();

    var error = loginvalidate(email,password);
    if(error)
    {
        alert(error)
        return
    }

    var users = localStorage.getItem("users")
    if(users == null)
    {
        alert("Invalid Email and Password")
        return
    }

    var usersArr = JSON.parse(users)
    for (var i = 0; i < usersArr.length; i++) {
        if(email === usersArr[i].email){
            if(password != usersArr[i].password){
                alert("Invalid Password")
                return;
            }

            alert("Login Successfully")
            return;
        }
    }

    alert("Invalid Email or Password")
}

function loginvalidate(email,password){
    var MandatoryErrors = "";
    if (email == "")
        MandatoryErrors = `Required : Email`;
    if (password == "")
        MandatoryErrors += `${MandatoryErrors ? "\n" : ""}Required : Password`;

    return MandatoryErrors;
}