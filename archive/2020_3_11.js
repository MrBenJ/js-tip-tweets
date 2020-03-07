
// TIP: React children don't need to be
// JSX. You can have it be a function too!

import React from 'react';

const MyComponent = ({ children }) => {
  // Pass whatever you want as a param to "children"
  return children();
}

<MyComponent>
  {() => {
    return (
      <div>Hello world!</div>
    );
  }}
</MyComponent>



