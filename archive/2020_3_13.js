
// TIP: Did you know you can write and read data
// directly from Apollo GraphQL's cache? Check it out
// Here!

import React from 'react';
import gql from 'graphql-tag';
import { useApolloClient } from '@apollo/react-hooks';

// Use this GQL query to get your isAwesome value!
const isAwesome = gql`
  {
    isAwesome @client
  }
`;

const MyComponent = () => {
  const client = useApolloClient();

  return (
    <button onClick={() => {
      client.writeData({ data: { isAwesome: true }});
    }}>
      Click to write write data
    </button>
  );

};

