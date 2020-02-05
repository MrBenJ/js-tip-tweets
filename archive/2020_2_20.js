
// TIP: Test with the AAA pattern
// Arrange - handle all the setup code
// Act - Execute the unit under testing
// Assert - Ensure value satisfies expectation.

describe('<MyComponent />', () => {
  it('Inserts "insert text here" into the input field when button is clicked',
  () => {

    // Arrange
    const wrapper = shallow(<MyComponent />);

    // Act
    wrapper.find('button').simulate('click');

    // Assert
    expect(
      wrapper.find('input').props().value
    ).toBe(
      'insert text here'
    );
  });
});



