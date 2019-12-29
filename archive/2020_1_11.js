
// TIP: Need both inner and outer values
// inside a destructure? Do it like this!

const onClick = event => {
  const { target, target: { value } } = event;
  console.log(target); // => event.target
  console.log(value); // => event.target.value
}



