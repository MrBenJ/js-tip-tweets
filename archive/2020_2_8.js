
// TIP: Want to see how much time it takes
// for some JS operations to run? Use
// console.time() to figure it out!

const contacts = Array(10000000);
console.time('Iterate through contacts');

for (let i = 0; i < contacts.length; i++) {
  // Do some important stuff in here...
}

console.timeEnd('Iterate through contacts');
// => Iterate through contacts: 8.667ms



