<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <h5 class="modal-title pb-3">You have finished all the cards</h5>
            <router-link to="/" tag="button" class="btn btn-secondary">Return to Decks</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'finishStudyModal'
  }
</script>
