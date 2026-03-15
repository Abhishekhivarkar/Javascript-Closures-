const memoizeAdd = () => {

  // 'cache' is a private object used to store previous results
  // It persists because of closure
  const cache = {};

  return function (a, b) {

    // Creating a unique key for the arguments
    // Example: "2,3"
    let key = `${a},${b}`;

    // If the result already exists in cache
    if (cache[key]) {
      console.log("from cache");

      // Show current cache object
      console.log(cache);

      // Return the stored result instead of recalculating
      return cache[key];
    }

    // If result is not in cache, calculate it
    console.log("calculating");

    const result = a + b;

    // Store the result in cache for future calls
    cache[key] = result;

    // Display updated cache
    console.log(cache);

    return result;
  };
};

// Creating a memoized version of the add function
// The returned function keeps access to 'cache' via closure
const memoAdd = memoizeAdd();

// First time → calculates and stores result
memoAdd(2,3);

// New inputs → calculates again
memoAdd(4,5);

// Same inputs → result comes from cache
memoAdd(2,3);