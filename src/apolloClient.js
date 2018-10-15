import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { defaults, resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
})

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});

const link = ApolloLink.from([stateLink, httpLink]);

export default new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})