
const mySym = Symbol("key1");

const JsUser ={
    name: "sachin",
    age: "18",
    "full name": "Sachin Sharma",
    [mySym] : "myKey1",
    location: "mohali",
    email: "sachi@gmail.com",
    lastLoginDays: ["Monday","saturday"]
}
//console.log(JsUser);
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser["location"])
// console.log(JsUser[mySym])

// JsUser.email = "sachinchat@gmail.com";
// Object.freeze(JsUser["email"]);
// JsUser.email ="stark@gmail.com";
// console.log(JsUser.email);


// JsUser.greeting = function(){
//     console.log(" Helllo js users")
// }


// JsUser.greeting2 = function(){
//     console.log(`Helllo js users, ${this.name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

//+++++++++++++++++++++++ PART 2 +++++++++++++++++++++++++++++++

const tinderUser = new Object()

//console.log(tinderUser);

tinderUser.id= "abc123"
tinderUser.name= "raja"
tinderUser.isLoggedIn= "false"

//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sachin",
            lastname: "sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1,obj2}
//const obj3 =Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const course = {
    courseName: " Ja in hindi",
    price: "999",
    coureseInstructor: "sachin sharma"
}

//const {coureseInstructor} = course
const {coureseInstructor: instructor} =course

//console.log(coureseInstructor);
console.log(instructor);