/*
10. **Grade Calculator:** Given a score (0-100), log the corresponding letter grade (A: 90+, B: 80-89, etc.).
*/

function checkLetterGrade() {
    const input = Number(document.getElementById("input").value);
    let grade = "";
    if (!Number.isFinite(input) || input == "") {
        return alert("Invalid input! Must be a number!");
    };
    if (input < 1 || input > 100) {
        return alert("Invalid input! Must be within the range 1-100.");
    };
    if (input > 89) {
        grade = "A";
    } else if (input > 79) {
        grade = "B";
    } else if (input > 69) {
        grade = "C";
    } else if (input > 59) {
        grade = "D"
    } else {
        grade = "F";
    };
    
    return alert(`Your letter grade is ${grade}, ${grade == "F" ? "you failed.": "congrats on passing!"}`)
};