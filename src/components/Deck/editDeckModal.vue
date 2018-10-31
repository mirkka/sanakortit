<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Options</h4>
            <button type="button"
                    class="close"
                    @click="toggleModal('editDeck')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="form-group">
              <label class="control-label">Rename:</label>
              <input type="text"
                     class="form-control"
                     v-model="newDeck.name">
            </div>
            <div class="form-group">
              <label class="control-label">Flip all cards:</label>
              <div>
                <button type="button"
                        class="btn btn-secondary"
                        :disabled='ActiveDeck.cardAmount === 0'>
                  <i class="fa fa-exchange-alt"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button"
                    class="btn btn-outline-secondary"
                    @click="toggleModal('editDeck')">Discard</button>
            <button type="button"
                    class="btn btn-secondary"
                    @click="handleUpdateDeck(newDeck.name)">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { toggleModal, updateDeck } from '../../methods.js'
import { ACTIVE_DECK } from '../../graphql/queries.js'

export default {
  name: 'editDeckModal',
  methods: { toggleModal,
    handleUpdateDeck: async function (newDeckName) {
      const deckToUpdate = {
        name: newDeckName,
        id: this.ActiveDeck.id
      }
      await updateDeck(deckToUpdate)
      await toggleModal('editDeck')
    }
  },
  data () {
    return {
      ActiveDeck: {},
      newDeck: {
        id: '',
        name: ''
      }
    }
  },
  mounted() {
    if (this.ActiveDeck) {
      this.newDeck = {
        id: this.ActiveDeck.id,
        name: this.ActiveDeck.name
      }
    }
  },
  apollo: {
    ActiveDeck: {
      query: ACTIVE_DECK,
    }
  }
}
</script>
