

// TIP: Use loops that return strings
// In CSS-in-JS to avoid writing
// repetitive @media queries!

import { css } from '@emotion/core';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

const style = css`
  .show-sm-up,
  .show-md-up,
  .show-lg-up,
  .show-xl-up {
    display: none;
  }

  ${Object.entries(breakpoints)
    .map(([bp, val]) => {
      return `
      @media screen and (min-width: ${val}) {
        .show-${bp}-up {
          display: flex;
        }
      }
    `;
    })
    // Make sure you join all the strings from Array.map()!
    .join('')}
`;



