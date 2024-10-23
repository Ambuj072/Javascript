"use strict"; //treat all js code as newer version

//alert(3+4) // we are using node js not browser

let name="Ambuj"
let age =18
let isLoggedin =false


//types
/* 
1. number => range 2 to the power 53
2. BigInt => const previouslyMaxSafeInteger = 9007199254740991n;
3. string =>""
4. boolean =true or false
5. null => standalone value
6. undefine =>
7. Symbol  =>unique |Symbol is a built-in object whose constructor returns a symbol
*/

//object =>non primitive

console.log(typeof age);  //number
console.log(typeof null); //object 
console.log(typeof undefined) //undegined

let sym1=Symbol();
let sym2=Symbol("Ambuj")
let sym3=Symbol("Ambuj")
console.table([sym1,sym2,sym3]);
console.log(sym2==sym3);//false

//output of Symbol
/*
┌─────────┬───────────────┐
│ (index) │ Values        │
├─────────┼───────────────┤
│ 0       │ Symbol()      │
│ 1       │ Symbol(Ambuj) │
│ 2       │ Symbol(Ambuj) │
└─────────┴───────────────┘
false
*/






