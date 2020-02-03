
// TIP: Need to stop event bubbling on your component?
// Use stopImmediatePropagation on the root element
// of your component!

import React, { useEffect } from 'react';

const SomeComponent = () => {
  const stopBubble = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  const _onDocumentClick = () => {
    // Do something on off click
  }

  useEffect( () => {
    document.addEventListener('click', _onDocumentClick);

    return () => {
      document.removeEventListener('click', _onDocumentClick);
    }
  })

  return (
    <div onClick={stopBubble}>
      Make sure I stay open!
    </div>
  );
};



