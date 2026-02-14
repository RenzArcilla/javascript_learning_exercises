/*
15. **Sum of 1 to N:** Calculate the sum of all numbers from 1 to 100 using a loop.
*/

function getSum() {
    const max = Number(document.getElementById("input").value);
    if (max == "" || max < 1 || !Number.isFinite(max)) return alert("Invalid range!");
    let cumsum = 0;
    for (i=1; i<=max; i++) {
        cumsum += i;
    };
    return alert(`The cumulative sum of 0-${max} is ${cumsum}.`)
};