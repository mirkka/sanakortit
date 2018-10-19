<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
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
              <input type="text" class="form-control" id="deck-name" v-model="NewDeckName.name">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="toggleModal('createDeck')">Close</button>
            <button type="button" class="btn btn-secondary" @click="createDeck({name: NewDeckName.name})">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { toggleModal, createDeck } from '../../methods'

export default {
  name: 'newDeckModal',
  methods: { toggleModal, createDeck },
  data () {
    return {
      NewDeckName: {}
    }
  },
}
</script>