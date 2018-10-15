<template>
  <div class="d-flex flex-column deck pt-1">
    <div class="d-flex">
      <div class="col-sm-9 col-xs-7">name test</div>
      <div class="col-sm-1 col-xs-2 text-danger"><strong>1</strong></div>
      <div class="col-sm-1 col-xs-3 text-primary">5</div>
    </div>
    <div class="col-sm-12 col-xs-12 py-3">
      <router-link to="/study" tag="button" class="btn btn-secondary mr-2">Study</router-link>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('createCard')">Add card</button>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('editDeck')">Edit</button>
      <button type="button" class="btn btn-outline-secondary" @click="toggleModal('deleteDeck')">Delete</button>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'deckRow',
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
