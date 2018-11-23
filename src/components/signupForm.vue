<template>
  <div>
    <h5 class="mt-2"><strong>Create account</strong></h5>
    <div class="pt-2 border-top">
        <!-- <div class="disclaimer text-danger text-center">
            <strong>Couldn't create a new user!</strong>
        </div> -->
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
            <a @click="toggleNewAccountPage">Login</a>
        </div>
    </div>
  </div>
</template>

<script>
import { toggleNewAccountPage } from '../methods.js'
import { Auth } from 'aws-amplify'

export default {
  name: 'signupForm',
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods: { toggleNewAccountPage,
    handleSignup: async (username, password) => {
      const newUser = await Auth.signUp({
      username,
      password,
      })
      //TODO: add try catch
    }
  }
}
</script>
