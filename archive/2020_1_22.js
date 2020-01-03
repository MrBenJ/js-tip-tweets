
// TIP: Need to prompt the user to save
// their work before exiting the page?
// Use the 'beforeunload' event!

window.addEventListener('beforeunload', () => {
  alert('Hey! You should save your work!');
  // other goody stuff here
});




