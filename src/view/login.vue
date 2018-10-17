<template>
  <div>
    <login-form v-if="!NewAccountPage.isVisible"/>
    <signup-form v-if="NewAccountPage.isVisible"/>
  </div>
</template>

<script>

import LoginForm from '../components/loginForm.vue'
import SignupForm from '../components/signupForm.vue'
import { NEW_ACCOUNT_PAGE }  from '../graphql/queries'

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
