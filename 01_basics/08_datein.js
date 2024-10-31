const myDate=new Date()
console.log(myDate);//2024-10-31T16:10:15.883Z
console.log(myDate.toString());//Thu Oct 31 2024 21:48:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Oct 31 2024
console.log(myDate.toLocaleString());//31/10/2024, 9:50:22 pm
console.log(myDate.toLocaleDateString());//31/10/2024

console.log(typeof myDate);//object

let createdDate=new Date("2024,1,03")
console.log(createdDate.toLocaleString());

//+++++++++++++  Time ++++++++++++++
 let myTimeStamp=Date.now()
 console.log(myTimeStamp/1000); //1730394600.487 it is giving it in sec


 let newDate =new Date()
 console.log(newDate.getTime());
 console.log(newDate.getFullYear());
 console.log(newDate.getDay());

 console.log(newDate.toLocaleString('default',{weekday:"long"})
);//Thursday
 
 
 
 







