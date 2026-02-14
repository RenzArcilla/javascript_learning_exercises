/*
11. **Voting Eligibility:** Check if an `age` variable is greater than or equal to 18.
If true, log "Can vote", otherwise log "Too young".
*/

function checkEligibility() {
    const age = document.getElementById('age').value;

    if (!Number.isInteger(Number(age)) || age == "") {
        return alert("Invalid age input, must be an integer.") 
    };

    if (age > 120 || age < 0) {
        return alert("Invalid range! Must be within 0-120.");
    } else {
        return alert(`You are ${age > 17 ? "" : "not "}eligible to vote.`);
    };
};