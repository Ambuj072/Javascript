//singleton
//Object.create

//Object literal

const sym1=Symbol("key1")

const student={
    [sym1]:"mykey1",
    name:"Ambuj",
    email:"ambuj@gamil.com",
    addrs:"prayagraj",
    dept:"cse",
    sub:["os","cn","dbms"],
}

console.log(student.name);//Ambuj
console.log(student["email"]);//ambuj@gamil.com
console.log(student["addrs"]);//prayagraj
console.log(student["dept"]);//cse
console.log(student["sub"]);//[ 'os', 'cn', 'dbms' ]
console.log(student[sym1]);//mykey1

// student.email="abc@gmail.com"
// Object.freeze(student)  //it will freeze the object. we can not further change anything in it
// student.email="a@gmail.com"
// console.log(student.email);//abc@gmail.com 

student.greeting=function(){
    console.log(`Hello, ${this.name}`);
}
console.log(student.greeting());








