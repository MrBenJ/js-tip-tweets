
// TIP: Array.from() can create arrays from
// DOMNodeLists and HTMLCollections, but
// did you know you can pass a map function to
// it as well?

const array = Array.from(Array(5), (val, index) => index + 1);
console.log(array);
// => [1,2,3,4,5]

