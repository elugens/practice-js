// Question: What is the difference between traditional and modern JavaScript?
// Link: https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/    #what-is-the-difference-between-traditional-and-modern-javascript
// Task: Convert the code below into Modern (ES6) JavaScript form

function add(a, b) {
    return a + b;
}

var result = add(5, 3);
console.log("Result: " + result); // output: "Result: 8"


//////// Write your code below /////////

const add = (a, b) => a + b;

let result =  add(5, 3);

console.log(`Result: ${result}`); // output: "Result: 8"