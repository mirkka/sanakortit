import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'
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

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
  router
}).$mount('#app')

