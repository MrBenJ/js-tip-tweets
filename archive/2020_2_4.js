
// TIP: Do you need to test for an error
// assertion or failure in "jest" ? Try
// using the .toThrow() method!
import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from './MyComponent';

describe('tests', () => {
  it('Fails because of bad props', () => {
    expect(() => {
      shallow(
        <MyComponent badPropsPassedIn />
      )
    }).toThrow();
  });
});



