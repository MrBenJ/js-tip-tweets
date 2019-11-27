// TIP: Remove duplicates in an array with Set()!

const array = [
  'this', 'this', 
  'has', 'no', 
  'duplicate', 'duplicate', 
  'duplicate', 
  'content', 
];

const noDupes = [...new Set(array)];
// => ['this', 'has', 'no', 'duplicate', 'content']


