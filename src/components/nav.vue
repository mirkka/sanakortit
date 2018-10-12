<template>
  <div class="px-3 row header">
    <div class="row text-uppercase col-sm-4 py-3">
      <strong>Sanakortit</strong>
    </div>
    <div class="col-sm-4 d-flex">
      <router-link to="/" tag="div" class="p-3 pointer">Decks</router-link>
      <router-link to="/browse" class="pointer p-3" tag="div">Browse</router-link>
    </div>
    <a class="col-sm-3 d-flex justify-content-end align-items-center pointer" alt="logout"><i class="fa fa-sign-out-alt"></i></a>
  </div>
</template>

<script>

export default {
  name: 'navigation',
}
</script>
