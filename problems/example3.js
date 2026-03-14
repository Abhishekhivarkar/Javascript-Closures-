const greet = (name) => {
  // 'name' is a parameter of the outer function

  const hello = () => {
    // The inner function can access the 'name' variable
    // from the outer function. This is possible because of closure.
    return `hello ${name}`;
  };

  // Returning the inner function
  return hello;
};

// Calling greet() with the argument "abhishek"
// It returns the inner function 'hello'
const greeting = greet("abhishek");

// Now we call the returned function
// It still remembers the value of 'name'
console.log(greeting());