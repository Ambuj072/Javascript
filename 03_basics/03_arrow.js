const user={
    name:"Ambuj",
    email:'ambuj@gmail.com',
    welcomeMsg:function(){
        console.log(`${this.name},Welcome to website`); 
    }
}
user["welcomeMsg"]();//Ambuj,Welcome to website
user.welcomeMsg();//Ambuj,Welcome to website
user.name="Anuj"
user.welcomeMsg();//Anuj,Welcome to website
console.log(this);//{}

//in the above program we can access the this


const one={
    name:"Ambuj",
    welcome(){
    console.log(this.name)
    }
}
one.welcome()//Ambuj


function two(){
    const name="Ambuj"
    console.log(this.name);
}
two()//undefined


const three=function(){
    const name="Ambuj"
    console.log(name);
    
}
three()//Ambuj

//+++++++++++++++++ Arrow function ++++++++++++++++++++++

const four=()=>{
    const name="Ambuj"
    console.log(this.name);
}
four()//undefined

const five={
    name:"Ambuj",
    welcomeMsg:()=>{
        console.log(this.name);
    }
}
five["welcomeMsg"]();//undefined


//note=> we can use "this" in normal function but we can not use "this" in arrow function 

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,4))//6

//or

const addTwoNum=(num1,num2)=>(num1+num2)
console.log(addTwoNum(2,3));//5





