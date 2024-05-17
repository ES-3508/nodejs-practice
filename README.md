# nodejs-practice
Practice guide for node js for beginners

# Node.js Practice Guide

This guide is designed to help new developers get started with Node.js by providing a step-by-step approach to learning the basics. You'll begin with simple console logging and progress through variables, arrays, object manipulation, and asynchronous programming.

## Prerequisites

Ensure you have Node.js installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/).

## Step-by-Step Guide

### 1. Setting Up Node.js

First, ensure Node.js is installed. You can download it from the [official website](https://nodejs.org/).

### 2. Your First Node.js Program

1. Create a new file named `app.js`.
2. Write the following code to log a message to the console:

    ```javascript
    console.log("Hello, Node.js!");
    ```
3. Open your terminal, navigate to the directory containing `app.js`, and run the code:

    ```bash
    node app.js
    ```

### 3. Working with Variables

1. Modify `app.js` to include variable declarations:

    ```javascript
    let message = "Hello, Node.js!";
    console.log(message);

    const pi = 3.14;
    console.log("The value of pi is:", pi);
    ```

### 4. Working with Arrays

1. Add code to create and manipulate arrays:

    ```javascript
    let fruits = ["Apple", "Banana", "Cherry"];
    console.log("Fruits:", fruits);

    // Add a fruit
    fruits.push("Date");
    console.log("After adding a fruit:", fruits);

    // Remove the last fruit
    fruits.pop();
    console.log("After removing the last fruit:", fruits);
    ```

### 5. Array Manipulation

1. Continue with more array operations:

    ```javascript
    // Find the index of a fruit
    let index = fruits.indexOf("Banana");
    console.log("Index of Banana:", index);

    // Remove a fruit by index
    fruits.splice(index, 1);
    console.log("After removing Banana:", fruits);
    ```

### 6. Working with Objects

1. Introduce objects and their manipulations:

    ```javascript
    let person = {
      name: "John",
      age: 30,
      city: "New York"
    };
    console.log("Person:", person);

    // Access object properties
    console.log("Name:", person.name);

    // Add a property
    person.country = "USA";
    console.log("After adding a property:", person);

    // Remove a property
    delete person.city;
    console.log("After removing a property:", person);
    ```

### 7. Object Manipulation

1. Show more ways to manipulate objects:

    ```javascript
    // Update a property
    person.age = 31;
    console.log("After updating age:", person);

    // Loop through object properties
    for (let key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    ```

### 8. Array Methods - Filter, Map, and Reduce

1. Demonstrate filtering, mapping, and reducing arrays:

    ```javascript
    let numbers = [1, 2, 3, 4, 5];

    // Filter
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Even numbers:", evenNumbers);

    // Map
    let doubledNumbers = numbers.map(num => num * 2);
    console.log("Doubled numbers:", doubledNumbers);

    // Reduce
    let sum = numbers.reduce((total, num) => total + num, 0);
    console.log("Sum of numbers:", sum);
    ```

### 9. Higher-Order Functions and Callbacks

1. Show how to use higher-order functions and callbacks:

    ```javascript
    function greet(name, callback) {
      console.log("Hello, " + name + "!");
      callback();
    }

    function sayGoodbye() {
      console.log("Goodbye!");
    }

    greet("Alice", sayGoodbye);
    ```

### 10. Asynchronous Programming with Promises and Async/Await

1. Introduce promises:

    ```javascript
    let promise = new Promise((resolve, reject) => {
      let success = true;

      if (success) {
        resolve("The operation was successful.");
      } else {
        reject("The operation failed.");
      }
    });

    promise
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.log(error);
      });
    ```

2. Introduce async/await:

    ```javascript
    async function fetchData() {
      try {
        let data = await promise;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    ```

By following these steps, you can gradually build your knowledge and skills in Node.js, from basic console logging to more advanced topics like asynchronous programming and array manipulation.

Happy coding!

