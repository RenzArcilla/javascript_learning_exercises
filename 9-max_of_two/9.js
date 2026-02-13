/*
9. **Max of Two:** Write code that takes two numbers and logs the larger one.
*/

function checkGreater() {
    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    if (!Number.isFinite(input1) || !Number.isFinite(input2) || input1 == "" || input2 == "") {
        return alert("Invalid input! Both input must be a number.");
    };
    if (input1 > input2) {
        return alert(`Input 1 is greater than input 2: ${input1} > ${input2}.`);
    } else if (input1 < input2) {
        return alert(`Input 1 is less than input 2: ${input1} < ${input2}.`);
    } else {
        return alert(`Input 1 is equal to input 2: ${input1} = ${input2}.`);
    };
};