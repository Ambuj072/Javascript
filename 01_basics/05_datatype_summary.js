//in javascript their is two type of datatypes
//1 primitive
//2 Non-primitive

//1 primitive

/*
their is seven primitive datatypes 
a. Number
b. String
c. boolean
d. null
e. undefine
f. BigInt
g. Symbol
*/
const score=100
const name="Ambuj"
const isLogIn=true
const staringTemp=null
let age;
const bigNum =9897979808976779n;
let id=Symbol("abc")
let anotherId=Symbol("def")
console.log(id==anotherId)//false because unique

//2. Non primitive
// object,function,Array

let myObject={
    name: "Ambuj",
    age: 24,
    address: "prayagraj",
}
console.log(myObject);//{ name: 'Ambuj', age: 24, address: 'prayagraj' }

const myFuntion=function(){
    console.log("hello"); 
}

let myArray=["Ambuj","Anuj"]
console.log(typeof myFuntion)


//notes
/*
 Symbol=> it's type is Symbol 
 Null=> it's type is object
 undefined=> it's type is undefined
 Arrays=> it's type is object
 function=>it will return function but it is also object
*/