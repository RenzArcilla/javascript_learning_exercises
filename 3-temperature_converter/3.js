/*
3. **Temperature Converter:** Create a variable for a temperature in Celsius. Convert it to Fahrenheit 
using the formula  and log the result.
*/

function showFtoC() {
    document.getElementById("text").placeholder = "Enter fahrenheit: ";
    document.getElementById("text").value = "";
    document.getElementById("text").style.display = "block";

    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";

    document.getElementById("toC").style.display = "none";
    document.getElementById("toF").style.display = "block";
};

function showCtoF() {
    document.getElementById("text").placeholder = "Enter celsius: ";
    document.getElementById("text").value = "";
    document.getElementById("text").style.display = "block";

    document.getElementById("btn2").style.display = "block";
    document.getElementById("btn1").style.display = "none";

    document.getElementById("toC").style.display = "block";
    document.getElementById("toF").style.display = "none";
};

function convertToCelsius() {
    let input = document.getElementById("text").value
    if (input != "" && isFinite(Number(input))) {
        let fht = document.getElementById("text").value;
        fht = Number(fht)
        let result = (fht - 32) * 5/9;
        document.getElementById("text").value = result.toFixed(2) + "°C";
    } else {
        alert("Invalid Input!")
    };
};

function convertToFahrenheit() {
    let input = document.getElementById("text").value
    if (input != "" && isFinite(Number(input))) {
        let cls = document.getElementById("text").value;
        cls = Number(cls);
        let result = (9/5 * cls) + 32;
        document.getElementById("text").value = result.toFixed(2) + "°F";
    } else {
        alert("Invalid Input!")
    };
};