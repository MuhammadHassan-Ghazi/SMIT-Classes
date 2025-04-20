var stdObj = {
  name: "jaffar aman",
  age: 23,
  email: "amanjaffar50@gmail.com",
};

console.log(stdObj.name);// dot notation
console.log(stdObj["email"]);// array notation

// Update property value of object
stdObj.name = "Hassan Yousuf";
console.log(stdObj);//  {name: 'Hassan Yousuf', age: 23, email: 'amanjaffar50@gmail.com'}

// delete keyword
// delete any property of object
delete stdObj.age
console.log(stdObj);// {name: 'Hassan Yousuf', email: 'amanjaffar50@gmail.com'}

// in keyword
// check property exist or not and return boolean
var isCNICExist = "cnic" in stdObj
console.log(isCNICExist)// false

// add new property in object
stdObj.course = "Web and App"
console.log(stdObj);// {name: 'Hassan Yousuf', email: 'amanjaffar50@gmail.com', course: 'Web and App'}

/*for in loop*/
for(var key in stdObj){
    console.log(key + ' : ' + stdObj[key])
}

// Note : if we give multiple time same property then last property value will be consider and we run for in 
// loop on object then only one time cosider same name property with last value
var carObj = {
    model: "2023",
    console: "red",
    company: "Suzuki",
    model : "2025"
  };

  console.log(carObj.model)// 2025

  var obj = {}// empty object and it is true value

  // All data types in one object

  var sObj = {
    name:"Hassan",
    age:23,
    email:null,
    result:undefined,
    isActive:true,
    courses:["Web and App","AI"],
    scores:{
        webAndApp:80,
        AI:75
    },
    getName:function(){
        console.log(this.name)
    }
  }

  console.log(sObj.name)//Hassan

  // Access array of object
  console.log(sObj.courses[0])//Web and App
  console.log(sObj["courses"][1])//AI

  // Access object of object (Nested)
  console.log(sObj.scores.webAndApp)//80
  console.log(sObj["scores"]["AI"])//75

  // call function of object
  console.log(sObj.getName())//Hassan