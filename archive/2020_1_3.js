
// TIP: You can prefetch lazy 
// loaded React components using 
// Webpack magic comments!

import React from 'react';

const Prefetched = React.lazy( () =>
  import(/* webpackPrefetch: true */ "./Prefetched")
);

// NOTE: This is an unconditional prefetch, so make sure
// you use it when you have confidence the component will
// be rendered!






// Taken from @housecor
// https://twitter.com/housecor/status/1200554167644966912


// TIL you can prefetch lazy loaded React components.🔥

// create-react-app honors Webpack directives: https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules

// So, to lazy load a component, but prefetch it behind the scenes:

const Hi = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./Hi")
);

// More webpack info: https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules