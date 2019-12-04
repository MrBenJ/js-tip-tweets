

// TIP: Use Object.create(null) to make a
// pure hashmap/dictionary!

const native = {};
const pure = Object.create(null);

// ❌❌❌
console.log(native.constructor);
// => function { [native code ] }

// ✅✅✅
console.log(pure.constructor);
// => undefined

for (let key in native) {
  // You need to use Object.hasOwnProperty
  // to avoid looping through the
  // prototype chain here
  if (native.hasOwnProperty(key)) {
    // Do stuff
  }
}

for (let key in pure) {
  // No need to check! It's pure!
  // Do stuff NOW!
}

