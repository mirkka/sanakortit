import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './view/login.vue'
import Signup from './view/signup.vue'
import Decks from './view/decks.vue'
import Browse from './view/browse.vue'
import Study from './view/study.vue'
import { Auth } from 'aws-amplify'

Vue.use(VueRouter)

const authGuard = async (to, from, next) => {
  try {
    await Auth.currentSession()
    next()
  } catch (error) {
    next('/login')
  }
}

const loginAuthGuard = async (to, from, next) => {
  try {
    await Auth.currentSession()
    next('/')
  } catch (error) {
    next()
  }
}

const routes = [
  { path: '/login', component: Login, beforeEnter: loginAuthGuard },
  { path: '/signup', component: Signup },
  { path: '/', component: Decks, beforeEnter: authGuard },
  { path: '/browse', component: Browse, beforeEnter: authGuard },
  { path: '/study/:deckId', component: Study, beforeEnter: authGuard },
]

export default new VueRouter({
  mode: 'history',
  routes
})
