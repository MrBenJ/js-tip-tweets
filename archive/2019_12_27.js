
// TIP: null and undefined 
// are not the same!

console.log(null === undefined)
// => false

// They're "kind-of" similar, but
// not strictly similar
console.log(null == undefined);
// => true

// `undefined` means:
// This value hasn't been defined. It might have something
// later on, but it may or may not have a value
let possible;

console.log(possible);
// => undefined

getData().then( resp => {
  possible = resp.body.toString();
  console.log(possible);
  // => 'this now has a value!
});

// `null` means:
// There is intentionally nothing here

const options = {
  // I'm directly saying, "there is intentionally no data to show"
  dataToShow: null
};



