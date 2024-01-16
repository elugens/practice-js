// Question: What is async/await in JavaScript?
// Link: https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/modern-markup#what-is-asyncawait-in-javascript
// Task: Create function called main that calls another function asynchronously usit the asnyc await syntax

///// Solution Example /////

function fetchData(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = `Hello, ${name}!`;
        resolve(data);
      }, 2000);
    });
  }
  
  async function main() {
    try {
      const response = await fetchData('JavaScript');
      console.log(response); // Output: Hello, JavaScript!
    } catch (error) {
      console.error(error);
    }
  }
  
  main();
