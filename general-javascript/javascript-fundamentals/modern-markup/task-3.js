// Question: What is a callback function in JavaScript?
// Link: https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/modern-markup#what-is-a-callback-function-in-javascript
// Task: Call a function as an argument or use setTimeOut to call a function

// Option 1: Call a function as an argument

///// Solution Example /////

// function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('JavaScript', callMe);

// Output:
// Hello, JavaScript!
// I am callback function

/////////////////////////////////////////////

// Option 2: Use setTimeOut to call a function

///// Solution Example /////

//  program that shows the delay in execution

function greet() {
    console.log('Hello, World!');
}

function sayName(name) {
    console.log(`Hello, ${name}!`);
}

// calling the function
setTimeout(greet, 2000);
sayName('JavaScript');

// Output:
// Hello, JavaScript!
// Hello, World!