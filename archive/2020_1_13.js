
// TIP: Need to skip an element in array
// destructuring? Use leading commas!

const array = ['welcome', 'to', 'the', 'next', 'decade'];

const [, to, , next, decade] = array;

console.log(to); // => 'to'
console.log(next); // => 'next'

console.log(decade); // => 'decade'

