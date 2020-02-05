
// TIP: Use isNaN() to explicitly
// look for NaN (not a number)
// because typeof NaN is 'number' 🤔🤔🤔

// => 'number' 🤔🤔🤔
console.log(typeof NaN);

if (NaN) {
  // This code will never run
}

if (isNaN(NaN)) {
  // This code will always run
}

const value = parseInt(someValue, 10);

if (isNaN(value)) {
  throw new Error(`${someValue} isn't a number!`);
}

// Safely execute code after the check above here!





