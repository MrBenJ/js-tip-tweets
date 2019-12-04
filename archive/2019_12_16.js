

// TIP: HTML templating systems like
// handlebars, nunjucks, or EJS aren't
// just for HTML... You can make file
// templates with them too!

// Template.ejs
import React from 'react';

const <%= ComponentName %> = props => {
  return (
    <div>
      {"<%= ComponentName %>"}
    </div>
  );
}

export default <%= ComponentName %>;



// createReactComponent.js
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

// Get component name from CLI argument
const ComponentName = process.argv[2];

const template = 
  fs.readFileSync(
    path.resolve(__dirname, 'path/to/Template.ejs')
  ).toString();

// Render the template!
const NewTemplate = ejs.renderFile(
  template,
  { ComponentName }, 
  `/path/to/${ComponentName}.jsx`
);

// Write to a new file!
fs.writeFileSync(path.resolve(__dirname, `path/to/${ComponentName}.jsx`));


// Running 
// $ node createReactComponent.js Awesome
// Creates the following file!

// Awesome.jsx
import React from 'react';

const Awesome = props => {
  return (
    <div>
      {"Awesome"}
    </div>
  );
}

export default Awesome;
