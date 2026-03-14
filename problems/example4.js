const bankAccount = () => {

  // 'balance' is a private variable inside the bankAccount function
  // It cannot be accessed directly from outside
  let balance = 1000;

  const deposit = (amount) => {
    // Adds the given amount to the balance
    // The inner function can access 'balance' because of closure
    return balance += amount;
  };

  const withdraw = (amount) => {
    // Subtracts the given amount from the balance
    // Again accessing the outer variable using closure
    return balance -= amount;
  };

  const checkBalance = () => {
    // Returns the current balance
    return balance;
  };

  // Returning an object with methods to interact with balance
  // This pattern is used to protect private data
  return {
    deposit,
    withdraw,
    checkBalance
  };
};

// Creating a new bank account instance
const account = bankAccount();

// Depositing 200 into the account
account.deposit(200);

// Withdrawing 300 from the account
account.withdraw(300);

// Checking the current balance
console.log(account.checkBalance());