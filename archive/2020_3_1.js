
// TIP: Get creative with react Children!
// You don't have to directly render them.
// You can add checkboxes and make each
// one selectable :)

import React from 'react';

const SomeComponent = props => {
  return (
    <div>
      {React.Children.map(props.children, (child, index) => {
        return (
          <div style="display: flex" key={index}>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={checkedValue}
            />
            {child}
          </div>
        );
      })}
    </div>
  )
};

