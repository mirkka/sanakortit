import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { defaults, resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

import { createAppSyncLink } from "aws-appsync";

const appSyncLink = createAppSyncLink({
  url: "https://4rroxcbshzdf5iagmws2wasoje.appsync-api.eu-central-1.amazonaws.com/graphql",
  region: "eu-central-1",
  auth: {
    type: "API_KEY",
    apiKey: process.env.VUE_APP_APPSYNC_API_KEY,
  },
});
const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});

const link = ApolloLink.from([stateLink, appSyncLink]);

export default new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})