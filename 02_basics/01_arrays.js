let arr=[1,2,3,5,6,8,9]
console.log(arr[0])//1

const newArr=new Array("Ambuj","Anuj","Abhishek")
console.log(newArr[1]);//Anuj
newArr.push("Ashish")
console.log(newArr);//[ 'Ambuj', 'Anuj', 'Abhishek', 'Ashish' ]

newArr.pop()
console.log(newArr);//[ 'Ambuj', 'Anuj', 'Abhishek' ]

newArr.unshift("Ashish")
console.log(newArr);//[ 'Ashish', 'Ambuj', 'Anuj', 'Abhishek' ]

newArr.shift()
console.log(newArr);//[ 'Ambuj', 'Anuj', 'Abhishek' ]

console.log(newArr.includes("Ambuj"));//true
console.log(newArr.indexOf("Ambuj"));//0


//Array to string

const myArr=newArr.join()
console.log(newArr);//[ 'Ambuj', 'Anuj', 'Abhishek' ]
console.log(myArr);//Ambuj,Anuj,Abhishek
console.log(typeof myArr);//string

//Slice and splice

console.log("A ",newArr);//A  [ 'Ambuj', 'Anuj', 'Abhishek' ]
const nA1=newArr.slice(0,2)
console.log(nA1);//[ 'Ambuj', 'Anuj' ]
console.log("B ",newArr);//B  [ 'Ambuj', 'Anuj', 'Abhishek' ]

const nA2=newArr.splice(0,2)
console.log("C ",newArr)//C  [ 'Abhishek' ]
console.log(nA2);//[ 'Ambuj', 'Anuj' ]
















