
// TIP: 'input' is a valid event to
// listen for on <input> elements!

const input = document.getElementById('textfield');

// 'input' event will run whenever the element's
// value has changed. It's a viable substitute
// for the 'change' event.
input.addEventListener('input', event => {
  const { value } = event.target;
  console.log(value);
});

// IE 9 partially supports this - for type="text" or "password"


