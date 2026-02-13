/*
2. **Variable Swap:** Declare two variables, `a = 5` and `b = 10`. Write code to swap their values 
so that `a` is 10 and `b` is 5.and log it to the console.
*/

let a = 5;
let b = 10;
const temp = a;
a = b;
b = temp;
console.log("a = " + a + ": b = " + b);