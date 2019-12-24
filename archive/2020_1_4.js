
// TIP: Alias destrucutred properties
// to give values clearer names


// In the context of React.Component
const handleClick = event {
  const { value: incomingValue } = event.target;
  // incomingValue => 'hi'
  
  const { value: previousValue } = this.state;
  // previousValue => 'h'
  
  this.setState({
    value: incomingValue
  });
}


