//+++++++++++++++ Number +++++++++++++++
const score=100
console.log(score);

const balance =new Number(100000.701)
console.log(balance)//[Number: 100000.701]
console.log(balance.toString().valueOf())//100000.701
console.log(balance.toString().length)//10
console.log(balance.toFixed(1));//100000.7
console.log(balance.toPrecision(6))//100001
console.log(balance.toLocaleString('en-In'));//1,00,000.701


//+++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4))//4
console.log(Math.floor(4.9));//4
console.log(Math.ceil(4.8));//5
console.log(Math.round(4.7))//5
console.log(Math.min(5,4,3,2,1));//1
console.log((Math.max(8,5,4,3,9,10)));//10


console.log(Math.random());//it will give random number between 0 to 1
console.log(Math.floor((Math.random()*10)+1))//it will give number between 1 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()* (max-min+1))+min);//it will give number between 10 to 20









 