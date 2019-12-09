
// TIP: Promise.resolve() will returns 
// a resolved Promise. Use it to
// wait for values to be returned from
// non-promise functions

const getDataAsPromise = callback => {
  // black box server call
  // that takes a callback 
  return getDataFromServer(callback);
}

getDataAsPromise( (error, data) => {
  if (error) { throw error; }

  // Use the Promise in a callback to make this function "then"-able
  return Promise.resolve('hi-mom');

}).then( data => {
  console.log(data);
  // => Data fetched from server
});



