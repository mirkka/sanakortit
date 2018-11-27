import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import Amplify, { Auth } from 'aws-amplify'
import resolvers from "./graphql/resolvers"
import defaults from "./graphql/defaults"
import { typeDefs } from "./graphql/schema"
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link'

import AWSAppSyncClient, { createAppSyncLink, createLinkWithCache } from "aws-appsync";

Amplify.configure({
  Auth: {
    region: process.env.VUE_APP_AWS_REGION,
    userPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_COGNITO_APP_ID,
  },
  disableOffline: true,
  fetchPolicy: 'no-cache'
});

const appSyncLink = createAppSyncLink({
  url: process.env.VUE_APP_API_URL,
  region: process.env.VUE_APP_AWS_REGION,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
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
