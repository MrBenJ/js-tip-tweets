
// TIP: There's more than
// one way to use setTimeout

// You can send an anonymous function and call
// whatever function you want
setTimeout( () => {
  myFunction(with, all, args);
}, 1000);

// You can pass the function directly into
// setTimeout, but pass the args as additional
// parameters like this!
setTimeout(myFunction, 1000, with, all, args);





