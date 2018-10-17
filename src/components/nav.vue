<template>
  <div class="px-3 row header">
    <div class="row text-uppercase col-sm-4 py-3">
      <strong>Sanakortit</strong>
    </div>
    <!-- TODO: show these only for authenticated user -->
    <div class="col-sm-4 d-flex" v-if="isNavVisible">
      <router-link to="/" tag="div" class="p-3 pointer">Decks</router-link>
      <router-link to="/browse" class="pointer p-3" tag="div">Browse</router-link>
    </div>
    <router-link to="/login" tag="div" class="col-sm-3 d-flex justify-content-end align-items-center pointer" v-if="isNavVisible">
      <i class="fa fa-sign-out-alt"></i>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  computed: {
    isNavVisible() {
      const { path } = this.$route
      return path !== '/login'
    }
  }
}
</script>
