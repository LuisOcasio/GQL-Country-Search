import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  headers: {
    authorization: ``,
  },
  cache: new InMemoryCache(),
});

export default client;
