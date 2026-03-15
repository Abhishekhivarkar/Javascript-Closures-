const createCounter = () => {

  // 'count' is a private variable
  // It exists inside createCounter and cannot be accessed directly from outside
  let count = 0;

  const increment = () => {
    // Increases the value of count by 1
    // The function forms a closure and remembers the 'count' variable
    return count += 1;
  };

  const decrement = () => {
    // Decreases the value of count by 1
    // Accessing the same private 'count' variable
    return count -= 1;
  };

  const reset = () => {
    // Resets the counter value to 0
    return count = 0;
  };

  const getCount = () => {
    // Returns the current value of the counter
    return count;
  };

  // Returning an object with methods to control the counter
  // The variable 'count' remains private and can only be modified
  // through these functions
  return {
    increment,
    decrement,
    reset,
    getCount
  };
};

// Creating a counter instance
const counter = createCounter();

// Increasing the counter twice
counter.increment();
counter.increment();

// Decreasing the counter once
counter.decrement();

// Resetting the counter to 0
counter.reset();

// Getting the final value of the counter
console.log(counter.getCount());