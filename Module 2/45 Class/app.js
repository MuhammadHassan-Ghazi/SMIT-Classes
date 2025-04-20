//---Object

// In real life, objects are things like: houses, cars, people, animals, or any other subjects.
// every object has some properties and some functions/ methods
// Here is a car object example:
// Car => Object	

// Properties		
// car.name = Fiat
// car.model = 500
// car.weight = 850kg
// car.color = white	

// Methods
// car.start()
// car.drive()
// car.brake()
// car.stop()

// Without object we need to make multiple variables to store data for one thing.

// var std1Name = "Jaffar";
// var std1Age = 23;
// var std1Course = "Modern web app";

// Array (not define key)
// var std1 = ["john", 30, "web and app"];
// console.log(":std1", std1[0]);
// array is also Object

// object  ( define key)

// Syntax of object
var obj/*variableName*/ = {}/*object brackets*/

// Prop

var student = {
    name:"Hassan",
    fname:"Yousuf",
    age:24,
    course:"Modern Web App",
    contact:"0317-8872691",
    cnic:"42101-5725248-7"
}

// access object
console.log(student)

// access particular property of object by its name (dot notation)
console.log(student.name)

// access particular property of object by its name (array notation)
console.log(student["course"/*Property name of object in quotation*/])

// In (check property exist or not. It returns true or false)
var isCnicExist = "class"/*Property name in quotation*/ in student
console.log("CNIC property" + (isCnicExist ? " " : " not ") + "exist")

//delete (delete property from object)
delete student.age
console.log(student)

// for in loop
for(var objKey in student){
    console.log("objectKey :",objKey,"objectValue :",student[objKey])
}