
// TIP: Pass functions into `styled` for props
// based styling in CSS-in-JS!
import React from 'react';
import styled, { css } from 'styled-components';

const PrettyParagraph = styled.p(
  props => 
    css`
      background-color: ${props.bgColor};
      color: ${props.color};
      width: 100%;
      font-size: ${props.typography.size};
    `
);



