
// TIP: Need to fire off some sequential
// GraphQL queries or mutations?
// It's a great time to use ApolloClient
// just for that!

import { useApolloClient } from '@apollo/react-hooks';

const MyComponent = () => {
  const apolloClient = useApolloClient();

  const onSubmit = async event => {
    event.preventDefault();

    // Fire off all your queries sequentially here!
    const firstQuery = await apolloClient.query(YOUR_QUERY_HERE);
    const secondQuery = await apolloClient.query(ANOTHER_QUERY_HERE);
    const mutation = await apolloClient.mutate({
      mutation: YOUR_MUTATION_HERE,
      variables: {
        food: 'bard',
        chocolate: 'delicious',
        sugar: 'bad for you :('
      }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      {/* your form fields here */}
    </form>
  );
}

