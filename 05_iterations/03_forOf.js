const arr=[1,9,4,6,4]

for (const element of arr) {
    console.log(element);
        
}
/*
output=>
1
9
4
6
4
*/

const greet="hello js"
for (const element of greet) {
    if(element==" "){
        continue
    }
    console.log(element);  
}
/*
output=>
h
e
l
l
o
j
s
*/      

//++++++++++++ Map +++++++++++++
const map=new Map()
map.set("js","javascript")
map.set("py","java")
map.set("java","java")
for (const [key,value] of map) {
    console.log(key," => ",value);   
}


//object iteration

const myObject={
    name:"Ambuj",
    id:123
}
for (const [key,value] of myObject) {
    //console.log(key,value);  
    console.log(myObject[key]);
    
}
//output=>myObject is not iterable
//solution =>we will use "for in" loop
