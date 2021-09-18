//eveerything be true
function truthCheck(collection, pre){
    var counter = 0
    for(var c in collection){
        if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
            counter ++;
        }
    }
    return counter == collection.length
}
console.log(truthCheck([
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"))


  //method 2
function truthCheck(collection, pre){
    return collection.every(function(element){
        return element.hasOwnProperty(pre) && Boolean(element[pre])
    })
}
console.log(truthCheck([
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"))

//method 3
function truthCheck(collection, pre){
    return collection.every(obj => obj[pre])
}
console.log(truthCheck([
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"))

  //Array.prototype.every()
function isBigEnough(element, index, array){
    return element >= 10;
}
console.log([12,5,8,130,44].every(isBigEnough))
console.log([12,54,18,130,44].every(isBigEnough))

//arrow functions
console.log([12,5,8,130,44].every(x => x >= 10))
console.log([12,54,18,130,44].every(x => x >= 10))


//Array.prototype.some
const array = [1,2,3,4,5]
//check whether an element is even
const even = (element) => element % 2 === 0
console.log(array.some(even))


//convert value to boolean
const TRUTHY_VALUES = [true, 'false', 1]
function getBoolean(value){
    'use strict'
    if(typeof value === "string"){
        value = value.toLowerCase().trim()
    }
    return TRUTHY_VALUES.some(function(t){
        return t === value
    })
}
console.log(getBoolean(false))
console.log(getBoolean('false'))
console.log(getBoolean(1))
console.log(getBoolean('true'))




// a simple class example.
class Car{
    constructor(name, year){
        this.name = name
        this.year = year
    }
    age(x){
        return x - this.year;
    }

}
let date = new Date()
let year = date.getFullYear()

let myCar = new Car("bmw",2019)
console.log(myCar.age(2020))