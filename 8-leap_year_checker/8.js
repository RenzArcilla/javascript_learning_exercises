/*
8. **Leap Year Checker:** Write logic to determine if a year variable is a leap year 
(divisible by 4, but not by 100 unless also divisible by 400).
*/

function checkIfLeapYear() {
    const input = Number(document.getElementById("input").value);
    let isLeapYear = 0;
    if (!Number.isFinite(input) || input == "") return alert("Invalid input! Must be a number.");
    if (input % 4 == 0) {
        isLeapYear = 1;
        if (input % 100 == 0) {
            isLeapYear = 0;
            if (input % 400) {
                isLeapYear = 1;
            };
        };
    };
    alert(`The year ${input} is${(isLeapYear ? " " : " not ")}a leap year!`);
};