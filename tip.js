
// TIP: Use this handy function
// as a default param to require 
// arguments in your  function calls!

// Taken from @housecor
// https://twitter.com/housecor/status/1200554167644966912

// TIL you can prefetch lazy loaded React components.🔥

// create-react-app honors Webpack directives: https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules

// So, to lazy load a component, but prefetch it behind the scenes:

const Hi = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./Hi")
);

// More webpack info: https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules