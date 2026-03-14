const counter = () => {
  // 'num' is a local variable inside the counter function
  let num = 1;

  const count = () => {
    // This inner function has access to the outer variable 'num'
    // even after the outer function has finished executing.
    // This behavior is called a "closure".
    return num++;
  };

  // Returning the inner function
  return count;
};

// Calling counter() returns the inner function
let count = counter();

// Calling count() will return the current value of num
// and then increment it
count();