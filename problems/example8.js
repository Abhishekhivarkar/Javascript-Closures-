function outer() {
  // 'x' is a variable in the outer function scope
  // It will be captured by the inner function through closure
  let x = 10;

  return function inner(y) {
    // The inner function can access and modify 'x'
    // even after the outer function has finished executing
    x += y;

    // Returning the updated value of x
    return x;
  };
}

// Creating the first closure instance
// fn1 has its own private 'x'
const fn1 = outer();

// Creating another closure instance
// fn2 has a completely separate 'x'
const fn2 = outer();

// First call → x = 10 + 5 = 15
console.log(fn1(5));

// Second call → previous x was 15
// now x = 15 + 5 = 20
console.log(fn1(5));

// fn2 has its own independent state
// x starts again from 10
// x = 10 + 5 = 15
console.log(fn2(5));