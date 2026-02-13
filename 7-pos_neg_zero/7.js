/*
7. **Positive, Negative, or Zero:** Check a number variable and log whether it is "Positive", "Negative", or "Zero".
*/

function checkPosNegZero() {
    let input = Number(document.getElementById('input').value);
    if (!Number.isFinite(input) || input == "") return alert("Invalid input! Must be a number.");
    if (input == 0) {
        alert(`Your number/expression '${input}' is zero (0)!`);
    } else if (input > 0) {
        alert(`Your number/expression '${input}' is positive (+)!`);
    } else if (input < 0) {
        alert(`Your number/expression '${input}' is negative (-)!`);
    };
};