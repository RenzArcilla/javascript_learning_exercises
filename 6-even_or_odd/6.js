/*
6. **Even or Odd:** Write code that checks if a number is even or odd and logs the result.
*/

function checkEvenOrOdd() {
    try {
        const input = Number(document.getElementById("input").value);
        let isOdd = 0;
        if (!Number.isFinite(input) || input == "") return alert("Invalid input, must be a finite number.");
        if  (input % 2 !== 0) {
            isOdd = 1;
        };
        showResult(isOdd, input);
    } catch (error) {
        alert(`Unexpected Error: ${error}`);
    };
};

function showResult(isOdd, input) {
    // Ternary operator, I've used this a lot in php
    (isOdd == 1) ? isOddFunc(input) : isEvenFunc(input);
};

function isOddFunc(number) {
    alert(`The number '${number}' is ODD!`);
};

function isEvenFunc(number) {
    alert(`The number '${number}' is EVEN!`);
};