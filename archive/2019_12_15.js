

// TIP: util.promisify will turn any
// node style callback function
// into a Promise based one!
const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');

// BEFORE
fs.readFile(path.resolve(__dirname, 'myFile.txt'), (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
  // => String or Buffer of myFile.txt
});

// AFTER
const ReadFilePromisified = promisify(fs.readFile);
ReadFilePromisified(path.resolve(__dirname, 'myFile.txt'))
  .then( data => { 
    console.log(data);
    // => String or Buffer of myFile.txt
  }).catch( error => {
    throw error;
});
