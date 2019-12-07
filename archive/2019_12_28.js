
// TIP: Learn the basics of nullish
// coalescing!

const willCoalesce = null ?? 'default-value';
console.log(willCoalesce);
// => 'default-value'

const noCoalesce = 0 ?? 'default-value';
console.log(noCoalesce);
// => 0

const willAlsoCoalesce = undefined ?? 'default-value';
console.log(willAlsoCoalesce);
// => 'default-value'

