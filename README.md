# JavaScript Closures Practice 

This repository contains various **JavaScript closure examples and practice problems**.  
The goal of this repository is to understand how **closures and lexical scope work in JavaScript** and to practice solving problems based on them.

Closures are one of the most important concepts in JavaScript and are widely used in **real-world applications, interviews, and advanced JavaScript patterns**.

---

## What is a Closure?

A **closure** is created when a function remembers and can access variables from its **outer scope even after the outer function has finished executing**.

Example:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2