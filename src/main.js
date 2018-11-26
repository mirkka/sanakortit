import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'
import defaultClient from './apolloClient'

const apolloProvider = new VueApollo({ defaultClient })

// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
  router
}).$mount('#app')
