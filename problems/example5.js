const multiplier = (val1) => {

  // This function returns another function
  // The returned function forms a closure over 'val1'
  // meaning it remembers the value of val1 even after multiplier() finishes execution
  return function(val2) {
    // The inner function can access 'val1' from the outer scope
    // It multiplies val1 with val2
    return val1 * val2;
  };
};

// multiplier(2) creates a new function where val1 = 2
// This function will multiply any number by 2
const double = multiplier(2);

// multiplier(3) creates another function where val1 = 3
// This function will multiply any number by 3
const triple = multiplier(3);

// Calling the generated functions
console.log(double(5));  // 10
console.log(triple(5));  // 15