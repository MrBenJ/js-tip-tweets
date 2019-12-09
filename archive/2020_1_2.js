
// TIP: Use this handy function
// as a default param to require 
// arguments in your  function calls!

const required = () => { 
  throw new Error('Missing param in myFunction()!');
}

const myFunction = (user = required()) {
  // your code in here
}

myFunction(); // Throws an error!
myFunction(null); // This is OK, since null !== undefined
myFunction(undefined); // Throws an error!
myFunction('Barnaby Jonez');


