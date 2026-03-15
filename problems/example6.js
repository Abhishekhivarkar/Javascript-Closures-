const rateLimiter = () => {

  // 'count' stores the number of allowed attempts
  // It is a private variable inside the rateLimiter function
  let count = 3;

  return function () {

    // The while loop runs only if attempts are remaining
    while (count > 0) {

      // Display the remaining attempts
      console.log(`remaining attempts ${count}`);

      // Decrease the number of attempts
      count--;

      // Return stops the function after one iteration
      // This ensures only one attempt is processed per function call
      return;
    }

    // If count is 0 or less, the user is blocked
    console.log(`blocked! remaining attempts ${count}`);
  };
};

// Creating a rate limiter instance
// The returned function forms a closure over 'count'
const login = rateLimiter();

// Each call reduces the remaining attempts
login(); // remaining attempts 3
login(); // remaining attempts 2
login(); // remaining attempts 1
login(); // blocked! remaining attempts 0