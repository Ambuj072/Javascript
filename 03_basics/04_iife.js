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

//note => 1 this function can Immediatly executed
//        2  Avoiding Global Scope Pollution = IIFEs create a private scope, preventing variables and functions declared within them from polluting the global namespace
