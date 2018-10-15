<template>
  <div class="container mt-3 mb-3">
    <div class="row header">
      <div class="p-3 col-xs-3 text-uppercase"><strong>Sanakortit</strong></div>
    </div>
    <login-form v-if="!NewAccountPage.isVisible"/>
    <signup-form v-if="NewAccountPage.isVisible"/>
  </div>
</template>

<script>

import LoginForm from '../components/loginForm.vue'
import SignupForm from '../components/signupForm.vue'
import { NEW_ACCOUNT_PAGE }  from '../graphql/resolvers'

export default {
  name: 'login',
  components: {
    'login-form': LoginForm,
    'signup-form': SignupForm
  },
  data () {
    return {
      NewAccountPage: {},
    }
  },
  apollo: {
    NewAccountPage: {
      query: NEW_ACCOUNT_PAGE,
    },
  }
}
</script>
