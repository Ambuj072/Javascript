
if (true) {
    //let a=10
    const b=20
    var c=30   
}
//console.log(a);//a is not defined
//console.log(b);//B is not defined
console.log(c);//30 This is scope problem


function one(){
    user_name="Ambuj"
    function two(){
        const website="abc@gmail.com"
        console.log(user_name); 
    }
    //console.log(website);// website is not defined
    two()
}
one()

//+++++++++++++++++ interesting +++++++++++++++

console.log(addone(2));//3    this is hoisting in javascript
function addone(num){
    return num+1;
}
console.log(addone(2));//3

//console.log(addTwo(2));//Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2
}
console.log(addTwo(2))//4

