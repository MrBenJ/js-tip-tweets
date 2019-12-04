

// TIP: Use bowser to detect
// a user's browser!

import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);

// If the user is using internet explorer, immediately redirect
// them to the Firefox download page
if (browser.getBrowser() === 'Internet Explorer') {
  window.location = 'https://www.mozilla.org/en-US/firefox/download/thanks/';
}


