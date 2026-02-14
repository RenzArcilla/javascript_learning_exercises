/*
13. **Count to 10:** Write a `for` loop that logs numbers from 1 to 10.
*/

// Evaluates instantly -> blocking
function countTo10Instant() {
    document.getElementById("button").style.display = "none";
    document.getElementById("count").style.display = "block";
    for (i=1; i<11; i++) {
        document.getElementById("count").value = `Counting to 10 (final value): ${i}`;
    };
};


// Evaluates per interval -> asynchronous
function countTo10() {
    document.getElementById("button").style.display = "none";
    document.getElementById("count").style.display = "block";
    let i = 1;
    const interval = setInterval(() => {
        document.getElementById("count").value = `Counting to 10: ${i}`;
        if (i === 10) {
            clearInterval(interval);
        };
        i++;
    }, 500);
};

function selector() {
    const selection = document.getElementById("select-type").value;
    document.getElementById("select-type").style.display = "none";
    document.getElementById("select-label").style.display = "none";
    (selection == "instant" ? countTo10Instant() : countTo10());
};