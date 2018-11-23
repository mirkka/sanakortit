<template>
  <div>
    <h5 class="mt-2"><strong>Create account</strong></h5>
    <div class="pt-2 border-top">
        <div class="disclaimer text-danger text-center d-none"
             :class="{ 'd-block': signupError }">
            <strong>Couldn't create a new user!</strong>
        </div>
        <div class="form-group">
            <label>Username</label>
            <input
              class="form-control"
              placeholder="Username"
              v-model="username">
            <span class="glyphicon glyphicon-remove form-control-feedback"></span>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password">
            <span class="glyphicon glyphicon-remove form-control-feedback"></span>
        </div>
        <div class="form-group">
            <label>Confirm password</label>
            <input type="password" class="form-control" placeholder="Password">
            <span class="glyphicon glyphicon-remove form-control-feedback"></span>
        </div>
        <div class="pb-3 pt-3 d-flex align-items-center justify-content-between">
            <button
              class="btn btn-secondary"
              @click="handleSignup(username, password)">Create account</button>
            <router-link to="/login" tag="a">Create new account</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'signup',
  data () {
    return {
      username: "",
      password: "",
      signupError: false
    }
  },
  methods: {
    handleSignup: async function (username, password) {
      this.signupError = false
      try {
        await Auth.signUp({
          username,
          password,
        })
        this.$router.push('/login')
      } catch (error){
        this.signupError = true
      }
    }
  }
}
</script>
