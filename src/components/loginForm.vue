<template>
  <div>
    <h5 class="mt-2"><strong>Login</strong></h5>
    <div class="pt-2 border-top">
      <div class="disclaimer text-danger text-center">
        <strong>Login failed</strong>
      </div>
      <div class="form-group">
        <label>Username</label>
        <input class="form-control" placeholder="Username">
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
      <div class="pb-3 pt-3 d-flex align-items-center justify-content-between">
        <button class="btn btn-secondary">login</button>
        <a href="#">Create new account</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loginForm',
}
</script>
