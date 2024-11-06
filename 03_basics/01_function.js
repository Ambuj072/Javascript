function sayHello(){
    console.log("hello js user");
}
sayHello()//hello js user


function addTwoNum(num1,num2){
    return num1+num2;
}
const add=addTwoNum(2,3)
console.log(add);//5



function logInUser_msg(user_name){
    if(!user_name){
        console.log(`plese enter user Name`);
        return; 
    }
    console.log(`${user_name} is logIn`); 
}
logInUser_msg("Ambuj")//Ambuj is logIn


//how to calculate cart price
function cartPrice(...price){
    return price;
}
console.log(cartPrice(200,300,500));//[ 200, 300, 500 ]


//call object through funtion
const user={
    user_name:"Ambuj",
    couse:"cse",
}
function user_detail(anyuser){
    return anyuser;
}
console.log(user_detail(user.user_name));//Ambuj


//call array through funtion
const array=[3,8,9,6]
function return_second(getArray){
    return getArray[1];
}
console.log(return_second(array));//8




