const createSecret = (message) => {

  // 'message' is a private variable inside createSecret
  // It cannot be accessed directly from outside the function

  const getMessage = () => {
    // This function forms a closure
    // It can access the outer variable 'message'
    // Used to read the secret message
    return message;
  };

  const setMessage = (customMessage) => {
    // This function also forms a closure
    // It updates the private variable 'message'
    message = customMessage;
  };

  // Returning an object with functions
  // These functions act as controlled access to the private variable
  return {
    getMessage,
    setMessage
  };
};

// Creating a secret message instance
const secret = createSecret("JS is awesome");

// Accessing the private message using the getter
console.log(secret.getMessage());

// Updating the private message using the setter
secret.setMessage("i love closures");

// Reading the updated message
console.log(secret.getMessage());