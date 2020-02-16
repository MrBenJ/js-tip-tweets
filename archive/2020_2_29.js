
// TIP: Need to render something in react
// in a differetn DOM tree? (like a modal)
// Use React.Portal() !

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  const { childen } = props;
  return ReactDOM.createPortal(
    children,
    document.getElementById('a_modal')
  );
};

