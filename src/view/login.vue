<template>
  <div>
    <h5 class="mt-2"><strong>Login</strong></h5>
    <div class="pt-2 border-top">
      <div class="disclaimer text-danger text-center d-none"
           :class="{ 'd-block': loginError }">
          <strong>Login failed!</strong>
      </div>
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" class="form-control" placeholder="Username">
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="pb-3 pt-3 d-flex align-items-center justify-content-between">
        <button
          class="btn btn-secondary"
          @click="handleLogin(username, password)">Login</button>
        <router-link to="/signup" tag="a">Create new account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'login',
  data () {
    return {
      username: "",
      password: "",
      loginError: false
    }
  },
  methods: {
    handleLogin: async function (username, password) {
      this.loginError = false
      try {
        await Auth.signIn(username, password)
        this.$router.push('/')
      } catch (error){
        this.loginError = true
      }
    }
  }
}
</script>
