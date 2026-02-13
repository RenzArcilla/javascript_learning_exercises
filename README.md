# JavaScript Learning Path: 50 Practice Problems

This repository contains a progressive journey through JavaScript, from basic syntax to modern ES6+ features and DOM manipulation.

---

## Phase 1: Variables, Types, and Basic Operators (1-5)

*Focus: Syntax, input/output, and basic math.*

1. **Hello World:** Create a variable named `greeting` containing the string "Hello, World!" and log it to the console.
2. **Variable Swap:** Declare two variables, `a = 5` and `b = 10`. Write code to swap their values so that `a` is 10 and `b` is 5.
3. **Temperature Converter:** Create a variable for a temperature in Celsius. Convert it to Fahrenheit using the formula and log the result.
4. **String Concatenation:** Create variables for `firstName` and `lastName`. Combine them into a new variable `fullName` with a space in between.
5. **Remainder Check:** Create two numbers. Log the remainder when the first number is divided by the second (using the modulo operator `%`).

---

## Phase 2: Conditionals and Logic (6-12)

*Focus: If/else statements and boolean logic.*

6. **Even or Odd:** Write code that checks if a number stored in a variable is even or odd and logs the result.
7. **Positive, Negative, or Zero:** Check a number variable and log whether it is "Positive", "Negative", or "Zero".
8. **Leap Year Checker:** Write logic to determine if a year variable is a leap year (divisible by 4, but not by 100 unless also divisible by 400).
9. **Max of Two:** Write code that takes two numbers and logs the larger one.
10. **Grade Calculator:** Given a score (0-100), log the corresponding letter grade (A: 90+, B: 80-89, etc.).
11. **Voting Eligibility:** Check if an `age` variable is greater than or equal to 18. If true, log "Can vote", otherwise log "Too young".
12. **Truthy/Falsy Checker:** Create a variable with any value. Use an `if` statement to check if it is "truthy" or "falsy" and log the result.

---

## Phase 3: Loops (13-20)

*Focus: Repeating actions and iterating.*

13. **Count to 10:** Write a `for` loop that logs numbers from 1 to 10.
14. **Countdown:** Write a loop that counts down from 10 to 1.
15. **Sum of 1 to N:** Calculate the sum of all numbers from 1 to 100 using a loop.
16. **Multiplication Table:** Write a loop that logs the multiplication table (up to 10) for the number 5.
17. **Array Printer:** Create an array of fruits. Use a `for` loop to log each fruit.
18. **Even Numbers Only:** Write a loop that prints only even numbers between 1 and 20.
19. **Factorial Calculator:** Calculate the factorial of a number (e.g., ) using a loop.
20. **Guessing Game Logic:** Simulate a simple guessing game using a `while` loop that keeps generating a random number until it hits a specific target (e.g., 5).

---

## Phase 4: Functions (21-28)

*Focus: Reusable code blocks and return values.*

21. **Basic Function:** Write a function `sayHello(name)` that returns "Hello, [name]!".
22. **Add Two Numbers:** Write a function `add(a, b)` that returns the sum of two numbers.
23. **Rectangle Area:** Write a function that accepts width and height and returns the area of a rectangle.
24. **Palindrome Checker:** Write a function that returns `true` if a string is a palindrome (reads the same backward and forward), and `false` otherwise.
25. **Convert Minutes to Seconds:** Write a function that takes an integer (minutes) and converts it to seconds.
26. **Get Max Number:** Write a function that takes an array of numbers and returns the largest number.
27. **Vowel Counter:** Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it.
28. **Reverse String:** Write a function that accepts a string and returns it reversed (e.g., "hello" -> "olleh").

---

## Phase 5: Arrays and Objects (29-38)

*Focus: Data structures and manipulation.*

29. **Car Object:** Create an object named `car` with properties `make`, `model`, and `year`. Log the `model` to the console.
30. **Add Property:** Add a property `color` to your existing `car` object.
31. **Array Sum:** Write a function that sums all numbers in an array.
32. **Filter Array:** Given an array of numbers, create a new array containing only the numbers greater than 10.
33. **Find Element:** Write a function that checks if a specific value exists in an array (return boolean).
34. **Object to Array:** Convert an object's keys into an array using `Object.keys()`.
35. **Array Mapping:** Given an array of numbers, create a new array where every number is squared (using `.map()`).
36. **Object Method:** Add a method `startEngine` to your `car` object that logs "Vroom!".
37. **Nested Object:** Create a `user` object with a nested `address` object (city, zip). Log the city.
38. **Remove Duplicates:** Write a function that takes an array and returns a new array with duplicate values removed.

---

## Phase 6: DOM Manipulation (39-45)

*Focus: Interacting with HTML (run these in a browser environment).*

39. **Change Text:** Select an HTML element by ID and change its inner text to "Hello JavaScript".
40. **Change Color:** Select all paragraphs (`<p>`) and change their text color to blue.
41. **Click Event:** Add a click event listener to a button that alerts "Button Clicked!".
42. **Input Value:** Create an input field and a button. When the button is clicked, log the value inside the input field.
43. **Create Element:** Write code to create a new `<li>` element and append it to an existing `<ul>` list.
44. **Hide Element:** Write a function that hides an HTML element when a specific button is clicked.
45. **Toggle Class:** Write code to toggle a CSS class "active" on an element when it is clicked.

---

## Phase 7: Advanced / Modern ES6+ (46-50)

*Focus: Asynchronous code and modern syntax.*

46. **Arrow Function:** Rewrite your `add` function (from #22) as an ES6 arrow function.
47. **Template Literals:** Refactor your string concatenation (from #4) to use template literals (backticks ```).
48. **Destructuring:** Given an object `person = { name: "Alice", age: 25 }`, extract `name` and `age` into variables using destructuring.
49. **Timeout:** Write code that logs "Wait for it..." immediately, and then "Done!" after 3 seconds using `setTimeout`.
50. **Fetch API:** Write an async function that fetches data from `https://jsonplaceholder.typicode.com/todos/1` and logs the JSON response.