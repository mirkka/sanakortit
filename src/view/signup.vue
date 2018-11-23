<template>
  <div>
    <h5 class="mt-2"><strong>Create account</strong></h5>
    <div class="pt-2 border-top">
      <div class="disclaimer text-danger text-center d-none"
            :class="{ 'd-block': signupError }">
          <strong>Couldn't create a new user!</strong>
      </div>
      <div class="disclaimer text-danger text-center d-none"
            :class="{ 'd-block': passwordError }">
          <strong>Password mismatch!</strong>
      </div>
      <div class="form-group">
          <label>Username</label>
          <input
            class="form-control"
            :class="{'border border-danger': signupError}"
            placeholder="Username"
            @change="removeErrors"
            v-model="username">
          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            :class="{'border border-danger': passwordError || signupError}"
            placeholder="Password"
            @change="removeErrors"
            v-model="password">
          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="form-group">
          <label>Confirm password</label>
          <input type="password"
                  class="form-control"
                  :class="{'border border-danger': passwordError || signupError}"
                  placeholder="Password"
                  @change="removeErrors"
                  v-model="confirmPassword">
          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="pb-3 pt-3 d-flex align-items-center justify-content-between">
          <button
            class="btn btn-secondary"
            @click="handleSignup(username, password, confirmPassword)">Create account</button>
          <router-link to="/login" tag="a">Login</router-link>
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
      confirmPassword: "",
      signupError: false,
      passwordError: false
    }
  },
  methods: {
    handleSignup: async function (username, password, confirmPassword) {
      this.removeErrors()
      if(confirmPassword !== password) {
        this.passwordError = true
        return
      }

      try {
        await Auth.signUp({
          username,
          password,
        })
        this.$router.push('/login')
      } catch (error){
        this.signupError = true
      }
    },
    removeErrors: function (){
      this.passwordError = false
      this.signupError = false
    }
  }
}
</script>
