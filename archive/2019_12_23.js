

// TIP: Have you tried using an argument
// parser like Minimist for handling CLI
// arguments? It makes life easier!

// https://www.npmjs.com/package/minimist
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

// Running node myScript.js --no-validate --entry 22 --create --filename teatime.txt
console.log(args);
/*
{
  validate: false,
  entry: 22,
  create: true,
  filename: "teatime.txt"
}
*/


