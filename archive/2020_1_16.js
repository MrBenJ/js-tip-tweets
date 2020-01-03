
// TIP: Use the spread operator to
// get all arguments in an array!

function myFunc(...args) {
  // 'arguments' isn't actually an array.
  // it's an "array-like" object
  console.log(Array.isArray(arguments))

  // ❌❌❌
  arguments.forEach(x => x);

  // this turns your arguments into an array!

  console.log(args);

  // ✅✅✅
  args.forEach(x => x);
}


