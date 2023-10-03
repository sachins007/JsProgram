// ++++++++++++++++++ FUNCTIONS +++++++++++++++++++

// function addTwoNumbers(num1, num2) {
//     console.log(num1+num2);
    
// }  
// //addTwoNumbers(4,34)
// const result = addTwoNumbers(5,9)

function addTwoNumbers(num1, num2) {
    // let result = num1+num2
    // return result;

    return num1+num2;
    
}  
//addTwoNumbers(4,34)
const result = addTwoNumbers(5,9)

//console.log("Result: ",result);



function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())


function calulatcart(...num1) {
    return num1;
    
}

//console.log(calulatcart(200 ,300,250));

const user = {
    username: "sachin",
    price: 199
}

function handleObject(anyobject) {
  //  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price:399
})



const myNewArray = [200, 400, 450]

function getSecondvalue(getArray){
    return getArray[1]
    
}

//console.log(getSecondvalue(myNewArray));
//console.log(getSecondvalue([200, 400,450]));


//+++++++++++++++++++++++THIS KEYWORD AND ARROW FUNCTION++++++++++++++++++++

const user1 = {
    username1 : "Sachin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username1}, welcome to website`); // this keyword reffers to current contex
    }
}

// user1.welcomeMessage()
// user1.username1 = "sam"
// user1.welcomeMessage()


// function chai(){
//     let username: "starkk"
//     console.log(this);          // this operator can't use with regular functions
// }

// chai()


// const chai = () => { 
//     let username = "satrkkk"
//     console.log(this.username)  // this  operator also can't use with arrow function
// }

// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log("sum of num1 and num2 is ",addTwo(3,5));

//const addTwo = (num1,num2) =>  (num1+num2)        // implesit return

const addTwo = (num1,num2) =>  ({username: "Hitesh"}) 
// console.log("sum of num1 and num2 is ",addTwo(3,5));


//++++++++++++++++++++++ IIFE (immidiateky Invoked Function Expression) +++++++++++++++++++++++++++

(function chaii() {
    console.log(`DB CONNECTED`)
    
}) ();

(  (name) =>  {
    console.log(`db connected ${name} `)
} ) (" hitesh")

