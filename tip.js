
// TIP: Strip out falsy values from
// an array with Array.filter(Boolean)

const array = [
  'I have',
  '',
  0,
  null,
  'clean',
  'data',
  undefined,
  NaN
];

const clean = array.filter(Boolean);
console.log(clean); // => ['I have', 'clean', 'data']


