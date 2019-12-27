
// TIP: Need to parse some HTML on the server?
// Check out Cheerio!

const cheerio = require('cheerio');
const fetch = require('node-fetch');

fetch('https://www.some-html-response.com').then( resp => {
  // Get the raw HTML
  const $ = cheerio.load(resp.body);

  // Now you can use $ just like jQuery! 
  $('li').first().html(); // => <li>Some info here</li>
});



