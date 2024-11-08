const arr=[6,7,8,4,9,10]

const newArr=arr.map((num)=>num+10)
console.log(newArr);//[ 16, 17, 18, 14, 19, 20 ]

//chaining

const myArr=arr.map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>80)
                

console.log(myArr)//[ 81, 91, 101 ]