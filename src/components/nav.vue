<template>
  <div class="px-lg-3 row header d-xs-flex flex-xs-column">
    <div class="row text-uppercase col-8 col-lg-2 py-3 px-lg-3 mr-5">
      <strong class="ml-3 ml-lg-1">Sanakortit</strong>
    </div>
    <div class="col-md-4 d-flex order-2" v-if="isNavVisible">
      <router-link to="/" tag="div" class="py-3 px-5 px-lg-3 pointer">Decks</router-link>
      <router-link to="/browse" class="py-3 px-5 px-lg-3 pointer" tag="div">Browse</router-link>
    </div>
    <div class="flex-lg-grow-1 d-flex justify-content-end align-items-center mx-lg-2 order-lg-2">
      <button class="pointer logout-button"
              v-if="isNavVisible"
              @click="handleLogout">
        <i class="fa fa-sign-out-alt"></i>
      </button>
      <div v-if="isNavVisible">{{user}}</div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { getUser } from '../helpers.js'


export default {
  name: 'navigation',
  data () {
    return {
      user: ""
    }
  },
  computed: {
    isNavVisible() {
      const { path } = this.$route
      return path !== '/login' && path !== '/signup'
    }
  },
  async updated() {
    try {
      const user = await getUser()
      this.user = user
    } catch(error) {
      this.user = ""
    }
  },
  async mounted() {
    try {
      const user = await getUser()
      this.user = user
    } catch(error) {
      this.user = ""
    }
  },
  methods: {
    handleLogout: async function () {
      this.$apollo.provider.clients.defaultClient.cache.data.clear()
      await Auth.signOut()
      this.$router.push('/login')
    }
  }
}
</script>
