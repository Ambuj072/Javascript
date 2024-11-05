//const js_user=new Object()//this is singleton object
const js_user2={}
console.log(js_user2);

const regular_user={
    email:"abc@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ambuj",
            lastName:"dubey",
        }
    }
}
console.log(regular_user.fullName.userFullName.firstName);//Ambuj

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4={...obj1,...obj2}
console.log(obj4);

const user=[
    {
        user_id:1,
        user_Name:"Ambuj",
        email:"abc@gmail.com"
    },
    {
        user_id:2,
        user_Name:"Ambuj",
        email:"abc@gmail.com"
    }
]
console.log(user[1]["user_Name"]);//Ambuj
console.log(Object.keys(regular_user));//[ 'email', 'fullName' ]
console.log(Object.values(regular_user))//['abc@gmail.com',{ userFullName: { firstName: 'Ambuj', lastName: 'dubey' } }]
console.log(Object.entries(regular_user));//[[ 'email', 'abc@gmail.com' ], [ 'fullName', { userFullName: [Object] } ]]

const course={
    course_Name:"javasript",
    course_fee:999,
    course_inst:"Hitesh"
}


//++++++++++++ Re-Stucturing Object ++++++++++++++

console.log(course.course_Name);//javasript
//Another way if I hava to do multiple time
const{course_Name}=course
console.log(course_Name);//javasript

const{course_Name:Name}=course
console.log(Name);//javasript

//+++++++++++ API Intro ++++++++++

//it will retrun JSON. like
/*
{
    "name":"Ambuj",
    "depart":"Cse"
}

it will return like this also
[
    {},
    {},
    {},
]










