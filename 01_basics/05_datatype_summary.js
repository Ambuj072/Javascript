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

//2. Non primitive(Reference )
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
 function=>it will return function but it is also object type
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//primitive(stack)  Non-Primitive(heap)

let myName="Ambuj"
let anotherName=myName
anotherName="Ambuj dubey"
console.log(myName);//Ambuj
console.log(anotherName);//Ambuj dubey
//in this above programe it is copy the value then in the copy we are modifing the value


let intialDetails={
    name:"Ambuj dubey",
    course:"B-tech"
}
let finalDetails=intialDetails
finalDetails.course="B-tech(cse)"
console.log(intialDetails.course);//B-tech(cse)
console.log(finalDetails.course);//B-tech(cse)
// in this above details we are not coping the value . we are passing the reference then if we are modifing the new value then old value will also change 




