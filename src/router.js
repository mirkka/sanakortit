import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './view/login.vue'
import Decks from './view/decks.vue'
import Browse from './view/browse.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Decks },
  { path: '/browse', component: Browse },
]

export default new VueRouter({
  mode: 'history',
  routes
})