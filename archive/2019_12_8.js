
// TIP: NodeJS is not just for servers!
// This is a REAL automation script I use to 
// archive each tips I write on my Twitter account to
// my file system
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const [ date ] = args;
console.log(`Writing tip for date ${date}`);
fs.readFile(path.resolve(__dirname, './tip.js'), (error, data) => {
  if (error) {
    throw error;
  }

  const content = data.toString();
  const filename = date.replace(/-/g, '_') + '.js';
  fs.writeFile(path.resolve(__dirname, 'archive', filename), content, () => {
    console.log(`Finished writing ${filename} to archive!`);
  });
});
// Usage: $ node moveTip [date]
// Example: $ node moveTip 2019_12_8

