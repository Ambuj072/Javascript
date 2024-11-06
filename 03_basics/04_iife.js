//IIFE (Immediately invoked function Expressions)

(
    function one(){
        //named IIFE
        console.log(`DB Connection`)
    }
)();//DB connection

(
    (name)=>{
        //unnamed IIFE
        console.log(`DB connection2  ${name}`);
        
    }
)("Ambuj")//DB connection2  Ambuj