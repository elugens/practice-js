// Question: What is a promise in JavaScript?
// Link: https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/modern-markup#what-is-a-promise-in-javascript
// Task: Create function that returns a promise using setTimeout.

///// Solution Example /////

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Hello, JavaScript!';
            resolve(data);
        }, 2000);
    });
}

fetchData().then((response) => {
    console.log(response); // Output: Hello, JavaScript!
}).catch((error) => {
    console.error(error.message);node
});