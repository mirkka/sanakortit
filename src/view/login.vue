<template>
  <div class="container mt-3 mb-3">
    <div class="row header">
      <div class="p-3 col-xs-3 text-uppercase"><strong>Sanakortit</strong></div>
    </div>
  </div>
</template>

<script>

import LoginForm from '../components/loginForm.vue'
import SignupForm from '../components/signupForm.vue'

export default {
  name: 'login',
  components: {
    'login-form': LoginForm,
    'signup-form': SignupForm
  }
}
</script>
