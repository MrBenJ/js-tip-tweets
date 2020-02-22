
// TIP: I like to create exportable GraphQL Fragments
// alongside my components so that I know what GQL
// parameters are needed to render this piece of data
// correctly. What do you think?

import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const ItemFragment = gql`
  fragment ItemListFragment on Item {
    id
    name
    description
  }
`;

const ItemQuery = gql`
  ${ItemFragment}

  query getItem {
    listItems {
      ...ItemListFragment
    }
  }
`;
const ItemList = props => {

  const { data, loading } = useQuery(ItemQuery);

  // Rest of your component here...

};


