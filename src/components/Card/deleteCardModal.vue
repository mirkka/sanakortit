<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Delete card</h4>
            <button type="button" class="close" @click="toggleModal('deleteCard')">
              <span>&times;</span><span class="sr-only"></span>
            </button>
          </div>

          <div class="modal-body">
            Do you really want to delete this card(s) ?
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="toggleModal('deleteCard')">Cancel</button>
            <button type="button" class="btn btn-danger" @click="handleDeleteCards">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleModal, deleteCard  } from '../../methods.js'
import { GET_ACTIVE_CARDS } from '../../graphql/queries.js'
import { clearActiveCards } from '../../helpers.js'

export default {
  name: 'deleteCardModal',
  methods: { toggleModal,
    handleDeleteCards: async function() {
      await Promise.all(this.ActiveCards.items.map(activeCard => {
        return deleteCard({id: activeCard.id})
      }))
      clearActiveCards()
      toggleModal('deleteCard')
    }
  },
  apollo: {
    ActiveCards: {
      query: GET_ACTIVE_CARDS
    }
  }
}
</script>
