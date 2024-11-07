const myObject={
    name:"Ambuj",
    id:123
}

for (const key in myObject) {
    console.log(key," => ",myObject[key]);
       
}
/*output=>
name  =>  Ambuj
id  =>  123
*/

//lets check in array
let arr=["js","cpp","java"]
for (const key in arr) {
    console.log(key," => ",arr[key]);   
}
/*output=>
0  =>  js
1  =>  cpp
2  =>  java
*/