/*
5. **Remainder Check:** Create two numbers. Log the remainder when the 
first number is divided by the second (using the modulo operator `%`).
*/

function checkRemainder() {
    try{
        const input1 = Number(document.getElementById("num1").value);
        const input2 = Number(document.getElementById("num2").value);
        let result = (input1 % input2);
        result =  result.toFixed(2);
        document.getElementById("result").innerText = `The remainder of (${input1} / ${input2}) is ${result}`
    } catch (e) {
        alert(`Error: ${e}`);
    };
};