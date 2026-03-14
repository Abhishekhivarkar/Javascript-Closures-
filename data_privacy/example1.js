const bankAccount = () => {
  // 'balance' is a local variable inside the bankAccount function
  // It is private and cannot be accessed directly from outside
  let balance = 1000;

  const deposit = (amount) => {
    // This function forms a closure
    // It can access and modify the 'balance' variable
    // Even after bankAccount() has finished executing
    balance += amount;
  }

  const getBalance = () => {
    // This function also forms a closure
    // It can read the 'balance' variable from the outer scope
    return balance;
  }

  // We return only the functions
  // Since 'balance' is not returned, it remains private
  return {
    deposit,
    getBalance
  }
}

const account = bankAccount()

// deposit() updates the private balance using closure
account.deposit(200)

// getBalance() accesses the private balance using closure
console.log(account.getBalance())

// This will be undefined because 'balance' is not a property
// of the returned object. It exists only in the function scope.
console.log(account.balance)