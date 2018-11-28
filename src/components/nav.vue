<template>
  <div class="px-3 row header">
    <div class="row text-uppercase col-sm-4 py-3">
      <strong>Sanakortit</strong>
    </div>
    <div class="col-sm-4 d-flex" v-if="isNavVisible">
      <router-link to="/" tag="div" class="p-3 pointer">Decks</router-link>
      <router-link to="/browse" class="pointer p-3" tag="div">Browse</router-link>
    </div>
    <div class="flex-grow-1 d-flex justify-content-end align-items-center mx-2">
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
      await Auth.signOut()
      this.$router.push('/login')
    }
  }
}
</script>
