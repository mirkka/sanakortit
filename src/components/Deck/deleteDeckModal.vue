<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Delete deck</h4>
            <button type="button" class="close" @click="toggleModal('deleteDeck')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="modal-body">
            Do you really want to delete: <strong>deck name</strong> ?
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="toggleModal('deleteDeck')">Cancel</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'deleteDeckModal',
  methods: {
    toggleModal(modalName) {
      this.$apollo.mutate({
        mutation: gql`
          mutation($modalName: String) {
            toggleModal (modalName: $modalName) @client
          }
        `,
        variables: {
          modalName
        }
      })
    }
  }
}
</script>
