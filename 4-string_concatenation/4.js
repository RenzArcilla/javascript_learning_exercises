/*
4. **String Concatenation:** Create variables for `firstName` and `lastName`. 
Combine them into a new variable `fullName` with a space in between.
*/

function greet() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let greeting = `Hello, ${fname} ${lname}!`;
    alert(greeting);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
};