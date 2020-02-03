
// TIP: A trick I use with fixed height
// elements with CSS-in-JS - I always
// export the fixed height (like a header)
// allowing other elements to adjust as
// needed

// Header.js
import { css } from '@emotion/core';

export const HEADER_HEIGHT = '120px';

const style = css`
  height: ${HEADER_HEIGHT};
  position: sticky;
  top: 0;
  width: 100%;
`;

const Header = () => <header css={style}></header>;

// OtherEl.js
// An element relative to <Header />
import { css } from '@emotion/core';

import { HEADER_HEIGHT } from './Header';
const style =  css`
  padding-top: ${HEADER_HEIGHT};
`;

const OtherEl = () => <div css={style}>Content here</div>;



