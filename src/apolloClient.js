import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import Amplify, { Auth } from 'aws-amplify'
import resolvers from "./graphql/resolvers"
import defaults from "./graphql/defaults"
import { typeDefs } from "./graphql/schema"

import AWSAppSyncClient, { createAppSyncLink, createLinkWithCache } from "aws-appsync";

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_HrNi7unpr',
    userPoolWebClientId: '2dh1j3c5becapg6hdq78vuff02',
  },
  disableOffline: true,
  fetchPolicy: 'no-cache'
});

const appSyncLink = createAppSyncLink({
  url: 'https://hx7w34zox5ftlaxn47odjdr4ri.appsync-api.eu-central-1.amazonaws.com/graphql',
  region: 'eu-central-1',
  auth: {
    type: 'AMAZON_COGNITO_USER_POOLS',
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
  fetchPolicy: 'no-cache'
});

const stateLink = createLinkWithCache(cache => {
  cache.data.clear()

  return withClientState({
    cache,
    defaults,
    resolvers,
    typeDefs,
  })
});

const link = ApolloLink.from([stateLink, appSyncLink]);

export default new AWSAppSyncClient({}, { link });
