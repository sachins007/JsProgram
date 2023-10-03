
const greetings = "hello world!"

for (const greet of greetings) {

    // console.log(`Each char is ${greet}`);

}

const arr = [2, 4, 3, 5, 6, 7]

for (const num of arr) {

    //   console.log(num);

}


//    ++++++++++++++  Maps  +++++++++++++

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "Framnce")

//console.log(map);

for (const [key1, value] of map) {

    //  console.log(key1, ':-', value)
}

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {

    //  console.log(`${key} is shortcut for ${myObject[key]}`);
}



const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(`programming languages are ${programming[key]}`);
}


const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (item) {

//     console.log(item);
// } )

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// 


const myCoding = [
    {
langName : "javascript",
langFileName: "js"
    },
    {
langName : "java",
langFileName: "java"
    },
    {
langName : "python",
langFileName: "py"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.langFileName);
//     console.log(item.langName);
// })


