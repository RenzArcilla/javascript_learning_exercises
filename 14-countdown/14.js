/*
13. **Count to 10:** Write a `for` loop that logs numbers from 1 to 10.
*/

// Evaluates instantly -> blocking
function countTo10Instant() {
    document.getElementById("button").style.display = "none";
    document.getElementById("count").style.display = "block";
    for (i=10; i>-1; i--) {
        document.getElementById("count").value = `Counting down (final value): ${i}`;
    };
};


// Evaluates per interval -> asynchronous
function countTo10() {
    document.getElementById("button").style.display = "none";
    document.getElementById("count").style.display = "block";
    let i = 10;
    const interval = setInterval(() => {
        document.getElementById("count").value = `Counting down: ${i}`;
        if (i === 0) {
            clearInterval(interval);
        };
        i--;
    }, 500);
};

function selector() {
    const selection = document.getElementById("select-type").value;
    document.getElementById("select-type").style.display = "none";
    document.getElementById("select-label").style.display = "none";
    (selection == "instant" ? countTo10Instant() : countTo10());
};