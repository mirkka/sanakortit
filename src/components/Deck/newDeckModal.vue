<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click="toggleModal('createDeck')">
      <div class="modal-dialog modal-lg" @click="$event.stopPropagation()">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Create new deck</h4>
            <button type="button" class="close" @click="toggleModal('createDeck')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="modal-body p-3">
            <div class="form-group">
              <label class="control-label">Name:</label>
              <input type="text" class="form-control" id="deck-name" v-model="newDeckName.name">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="toggleModal('createDeck')">Close</button>
            <button type="button" class="btn btn-secondary" @click="handleCreateDeck(newDeckName.name)">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { toggleModal, createDeck } from '../../methods'
import { Auth } from 'aws-amplify'
import _ from 'lodash'

export default {
  name: 'newDeckModal',
  methods: { toggleModal, createDeck,
    handleCreateDeck: async (newDeckName) => {
      const session = await Auth.currentSession()
      const author = _.get(session, 'accessToken.payload.username')
      const newDeck = {
        author,
        name: newDeckName
      }
      createDeck(newDeck)
    }
  },
  data () {
    return {
      newDeckName: {}
    }
  },
}
</script>
