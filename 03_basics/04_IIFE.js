//Immediately Invoke Function Expressions(IIFE)
(function chai(){
    console.log('DB Connected');
    
})();
// use- to remove global scope pollution. 
// use semicolon  to end iife


(()=>{
    console.log('DB Connected two' );
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')