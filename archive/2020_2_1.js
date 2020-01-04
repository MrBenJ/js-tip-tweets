
// TIP: Remember, an async function
// will ALWAYS return a promise, even
// if it returns "undefined"

async function sendUserIdTo(url) {
  const resp = await fetch('my.api.com/v1/user/1');
  const body = await resp.json();

  await sendDataToUrl(url, body.id);
}

sendUserIdTo.then( value => {
  console.log(value);
  // => 'undefined' - because nothing was returned
  // from sendUserIdTo()
});


