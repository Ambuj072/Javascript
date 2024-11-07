for (let index = 0; index <= 5; index++) {
    console.log(index);
   
}
console.log(`New iteration`);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <5; j++) {
        console.log(j);   
    } 
}

console.log(`break and continue`);

//++++++++++++ break and continue ++++++++++++++++++++++

for (let index = 0; index <= 5; index++) {
    if (index==4) {
        console.log(`4 is best`);
        break
    }
    console.log(index);   
}
/*
output=>    
1
2
3
4 is best
*/


for (let index = 0; index <= 5; index++) {
    if (index==4) {
        console.log(`4 is best`);
        continue
    }
    console.log(index);   
}
/*
output=>    
0
1
2
3
4 is best
5
*/

