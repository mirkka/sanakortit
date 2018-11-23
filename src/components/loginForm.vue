<template>
  <div>
    <h5 class="mt-2"><strong>Login</strong></h5>
    <div class="pt-2 border-top">
      <div class="disclaimer text-danger text-center" v-if="false">
        <strong>Login failed</strong>
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
        <a @click="toggleNewAccountPage">Create new account</a>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleNewAccountPage } from '../methods.js'
import { Auth } from 'aws-amplify'

export default {
  name: 'loginForm',
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods: { toggleNewAccountPage,
    handleLogin: async function (username, password){
      const user = await Auth.signIn(username, password)
      //TODO: add try catch
      // .then(user => console.log(user))
      // .catch(err => console.log(err));
      this.$router.push('/')
      console.log(user)
    }
  }
}
</script>
