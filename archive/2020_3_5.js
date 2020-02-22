
// TIP: Use "skip" to make your GraphQL
// powered React components flexible
//  in a sense than they can either
// call GraphQL directly, or take the data
// passed in as a prop!

import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ItemList = props => {
  const { items } = props;

  const { data, loading } = useQuery(YOUR_QUERY_HERE, {
    skip: !!items
  });

  const renderItems = arrayOfItems => {
    return arrayOfItems.map( (item, index) => {
      return <Item key={index} />;
    })
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {renderItems(items || data )}
    </div>
  )

}


