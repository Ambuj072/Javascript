const arr=[3,5,6,7,9]
arr.forEach((val,index,arr) => {
    console.log(val,index,arr);  
});
/* output
3 0 [ 3, 5, 6, 7, 9 ]
5 1 [ 3, 5, 6, 7, 9 ]
6 2 [ 3, 5, 6, 7, 9 ]
7 3 [ 3, 5, 6, 7, 9 ]
9 4 [ 3, 5, 6, 7, 9 ]
*/

//another way
function printMe(item){
    console.log(item);
    
}
arr.forEach(printMe)
/*Output
3
5
6
7
9
*/

const myLang=[
    {
        language:"python",
        fileName:"py"
    },
    {
        language:"java",
        fileName:"java"
    },
    {
        language:"javascript",
        fileName:"js"
    }
]
myLang.forEach( (item)=>{
    console.log(item.language);
    
})
/*output=>
python
java
javascript

*/

