const myNums = [1,, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => num>5)
// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num < 7
// })
// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if (num>4) {
        newNums.push(num)
    }

})

//console.log(newNums);

//const myNumrs = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNumrs = myNumrs.map( (num) => num+10 )

// console.log(newNumrs);

// const numrs = []
//  myNumrs.forEach ( (num) => {
//      numrs.push(num+10);

//  })

//  console.log(numrs);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = myNumbers
        .map( (num)=> num*10)
        .map( (num) => num+1)
        .filter( (num) => num>=40)

//console.log(newNumbers);

const myItem = [1, 2, 3, 4]

// const myTotal = myItem.reduce (function (acc,currVal) {
//     console.log(`accumlator: ${acc} and currentVlaue: ${currVal}`);
//     return acc+currVal;

// }, 3)

const myTotal = myItem.reduce( (acc,curr) => acc+curr,0)

//console.log(myTotal);

const shoppngCart = [
    {
        itemName : "js",
        price : 799

    },
    {
        itemName : "jpython",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 2099
    },
    {
        itemName : "data science",
        price : 12999
    },
]


const data = shoppngCart.filter((e,i)=>e.itemName =="js")



// const priceToPay=shoppngCart.reduce( (acc,item) => acc+item.price,0)

// console.log("Your total Bill::" +priceToPay)
;
