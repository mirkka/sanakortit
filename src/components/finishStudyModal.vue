<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <h5 class="modal-title pb-3">You have finished all the cards</h5>
            <router-link to="/" tag="button" class="btn btn-secondary" @click.native="toggleModal('finishStudy')">Return to Decks</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { toggleModal } from '../methods'
  export default {
    name: 'finishStudyModal',
    methods: {
      toggleModal
    }
  }
</script>
