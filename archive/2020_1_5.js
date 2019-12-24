
// TIP: Use {...rest} to pass through
// any additional standard props

const MyComponent = props => {
  const {
    nonStandardProp,
    ...rest
  } = props;

  return (
    <div {...rest}>
      I am {nonStandardProp ? 'Different!' : 'Awesome!'}
    </div>
  );
}

// Rendering the following will make this prop
// clickable!
<MyComponent onClick={handleClick} nonStandardProp />


