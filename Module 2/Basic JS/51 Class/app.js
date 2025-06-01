//------------------------ Browser Storage

// The data in a browser's storage on one system will not be available on another system, even if it's
//  the same browser.
// Similarly, data from one browser will not be accessible in another browser on the same system.
// It is browser dependent

//--Important

// Local Storage
// Session Storage
// IndexDB
// Cookies

//---Local Storage----//
var input = document.getElementById("input")
var H1 = document.getElementById("userName")
function submitValue(){
    var inputVal = input.value
    localStorage.setItem("heading",inputVal)
    getValue();
    input.value = ""
}

function getValue(){
    var getVal = localStorage.getItem("heading")
    H1.innerHTML = getVal
}

// to clear local staorage
// localStorage.clear()

// to clear particular item
// localStorage.removeItem("heading")

//Whenever data is saved in local storage, it will be converted into a string.

localStorage.setItem("num", 101)
var num = typeof(localStorage.getItem("num")) 
console.log(num)// string

localStorage.setItem("bool", true)
var bool = typeof(localStorage.getItem("bool")) 
console.log(bool)// string

// for array and object
var arr = ['Hassan','Meraj']
var str = JSON.stringify(arr)// to convert in JSON string

localStorage.setItem("array",str)

// for retrive data
var getJsonStr = localStorage.getItem("array")
var array = JSON.parse(getJsonStr)
console.log(array)// to convert json string into its original state

// same for object

//---Session Storage ---//
// once our website close, data will automatically remove from our session storage
// sessionStorage.setItem("n","Hassan")
var getSessionData = sessionStorage.getItem("n")
console.log(getSessionData)
