const arr=[5,8,9,29,47,56]

const newArr=arr.reduce((acc,curr)=>{
    console.log(`acc value: ${acc} ,curr value: ${curr}`);
    return acc+curr},0)
console.log(newArr);
/*output=>
acc value: 0 ,curr value: 5
acc value: 5 ,curr value: 8
acc value: 13 ,curr value: 9
acc value: 22 ,curr value: 29
acc value: 51 ,curr value: 47
acc value: 98 ,curr value: 56
154
*/


const shoppingCart=[
    {
        itemName:"js",
        price:3999
    },
    {
        itemName:"python",
        price:2999
    },
    {
        itemName:"java",
        price:4999
    }
]
const priceToPay=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(priceToPay);//11997

