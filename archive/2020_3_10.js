
// TIP: Do you need to render JSX
// without an extra <div> to hold them>
// Use JSX fragments!

import React, { Fragment } from 'react';

const SomeComponent = () => {
  return (
    <Fragment>
      <div>Side</div>
      <div>by</div>
      <div>Side</div>
    </Fragment>
  );
};

// Or use the shorthand syntax!
const ShorthandComponent = () => {
  return (
    <>
      <div>Side</div>
      <div>by</div>
      <div>Side</div>
    </>
  );
};

