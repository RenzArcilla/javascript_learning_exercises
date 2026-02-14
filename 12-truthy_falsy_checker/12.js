/*
12. **Truthy/Falsy Checker:** Create a variable with any value. Use an `if` statement 
to check if it is "truthy" or "falsy" and log the result.
*/

function checkTruthyFalsy() {
    const input = document.getElementById("input").value;
    const falsyStrings = ["false", "0", "", "null", "undefined", "NaN"];
    let truthy = 1;
    if (falsyStrings.includes(input)) {truthy = 0};
    return alert(`The expression (${input}) is ${truthy == 1 ? "" : "not "}a truthy!`);
};