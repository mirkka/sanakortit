import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import resolvers from "./graphql/resolvers";
import defaults from "./graphql/defaults";
import { typeDefs } from "./graphql/schema";

import AWSAppSyncClient, { createAppSyncLink, createLinkWithCache } from "aws-appsync";

const appSyncLink = createAppSyncLink({
  url: "https://4rroxcbshzdf5iagmws2wasoje.appsync-api.eu-central-1.amazonaws.com/graphql",
  region: "eu-central-1",
  auth: {
    type: "API_KEY",
    apiKey: process.env.VUE_APP_APPSYNC_API_KEY,
  },
});

const stateLink = createLinkWithCache(cache => withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
}));

const link = ApolloLink.from([stateLink, appSyncLink]);

export default new AWSAppSyncClient({}, { link });