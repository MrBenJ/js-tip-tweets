
// TIP: Use an "available" key on your
// React context default value to allow
// consumer components to check and see
// If the context provider exists!

import React, { createContext } from 'react';

const MyContext = createContext({
  importantValue: null,
  available: false
});


const SomeComponent = () => {
  const myContext = React.useContext(MyContext);

  if (!myContext.available) {
    console.warn('[WARNING] - Cannot find <MyContext.Provider> for <SomeComponent> :( ');
  }
}

