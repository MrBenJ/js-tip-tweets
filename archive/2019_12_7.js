
// TIP: Validate props on objects with Proxy()!
const Horse = new Proxy({}, {
  set(object, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('age value must be a number');
    }
    object[prop] = value;
  }
});

Horse.age = 15; // OK
Horse.age = 'ageless'; // => Error: age value must be a number


