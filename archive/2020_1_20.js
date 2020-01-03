
// TIP: Have you tried useLazyQuery
// for GraphQL calls? Query on demand,
// not when a component renders!

import { useLazyQuery } from '@apollo/react-hooks';

const MyComponent = props => {
  const [
    getPosts,
    { loading, called, data } ]
  = useLazyQuery(YOUR_QUERY_HERE);

  if (!called) {
    return (
      <button onClick={() => getPosts()}>
        Load Posts
      </button>
    );
  }
  if (called && loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data?.map(post => (
        <div>
          <strong>{post.name}</strong>
          <br/>
          <p>{post.content}</p>
        </div>
      )
      )|| <p>No posts found</p>}
    </div>
  )
}


