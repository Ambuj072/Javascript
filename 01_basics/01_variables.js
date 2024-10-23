const name="Ambuj dubey"
var email="ambujdubey072@gmail.com"
let pNumber=1234567899;
city="prayagraj"
let state;

//name="anuj" //  we can not assign to const variable

email="ambujdubey071@gamil.com"
pNumber=9987654321
city="Allahabad"

console.log(email);
console.table([email,pNumber,city,state])


//Notes
/*
Do not prefer var because of issue block scope and function scope
*/

//output
/*
ambujdubey071@gamil.com
┌─────────┬───────────────────────────┐
│ (index) │ Values                    │
├─────────┼───────────────────────────┤
│ 0       │ 'ambujdubey071@gamil.com' │
│ 1       │ 9987654321                │
│ 2       │ 'Allahabad'               │
│ 3       │ undefined                 │
└─────────┴───────────────────────────┘
*/