
// TIP: Make your React JSX read like
// Plain HTML as much as possible.
// Using "children" is a great way to
// compose your components and keep them
// readable and flexible

import React from 'react';

const BorderedSquare = ({ children }) => {
  return (
    <div className="border-styles">
      {children}
    </div>
  )
};


const IndexPage = () => {
  return (
    <>
    <header>Header</header>
    <main>
      <BorderedSquare>
        I have a border around me!
      </BorderedSquare>
    </main>
    <footer>Footer</footer>
  );
};

