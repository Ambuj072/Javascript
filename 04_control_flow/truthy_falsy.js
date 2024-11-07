//falsy value 
/*
false,0,-0,BigInt 0n,"",null,undefined,NaN
other value are truthy value
*/

//truthy value
/* ex=> true ,"0",'false'," ",[],{},funtion(){}  */


if (" "){
    console.log("hello");
   
}else{
    console.log("hi");
    
}
//output =>hello


const emptyObj={}
if(Object.keys(emptyObj)==0){
    console.log("true, object is empty");
    
}else{
    console.log("false");
    
}
//output=>true, object is empty


//++++++++++++++++++++ Nullish coalescing operator (??): null undefined ++++++++++++++++

let val;
val=null??5
console.log(val);//5

//note=> it help in database, when error occurs then it handle

//+++++++++++++++++++++ Teniary operator ++++++++++++++++++++++++

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less then 80"):console.log("more then 80");//more then 80


