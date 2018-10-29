<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><i class="fa fa-file-alt"></i> Edit card</h4>
            <button type="button" class="close" @click="toggleModal('createCard')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>
          <div class="modal-body">
            <strong>Deck: </strong>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button">
                Dropdown button
              </button>
              <div class="dropdown-menu">
                <div class="dropdown-item">Action</div>
                <div class="dropdown-item">Another action</div>
                <div class="dropdown-item">Something else here</div>
              </div>
            </div>
            <!-- <div class="dropdown">
              <span class="deckName">Deck1</span>
            </div> -->
            <hr />
            <!-- <div class="disclaimer">
              <div>
                <strong>This card is a duplicity</strong><br/>
                <strong>Deck:</strong> <span>test</span><br/>
                <strong>Front:</strong> <span>test</span><br/>
                <strong>Back:</strong> <span>test</span><br/>
              </div>
              <div>
                <span class="mr-2">Delete and move to current deck</span> 
                <button class="btn btn-secondary btn-sm">Move</button>
                <span class="mx-2">or delete original card</span>
                <button class="btn btn-secondary btn-sm">Delete</button>
              </div>
            </div> -->
            <div class="form-group">
              <label class="control-label">Front</label>
              <textarea class="form-control" tabindex="1" v-model="newCard.front"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label">Back</label>
              <textarea class="form-control" tabindex="2" v-model="newCard.back"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label">Tags</label>
              <input type="text" class="form-control" tabindex="3" v-model="newCard.tags">
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <div>
                <button type="button" class="btn btn-secondary mr-2" title="Switch card sides">
                  <i class="fa fa-exchange-alt"></i>
                </button>
                <router-link to="/browse" tag="button" class="btn btn-outline-secondary" @click.native="toggleModal('createCard')">
                  <i class="fa fa-globe-americas"></i>
                </router-link>
              </div>
              <div>
                <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('createCard')">Close</button>
                <button type="button" class="btn btn-secondary" tabindex="4" @click="handleCreateCard(newCard)">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleModal, createCard } from '../../methods.js'

export default {
  name: 'cardFormModal',
  methods: { 
    toggleModal, 
    createCard,
    handleCreateCard: async function(formData) {
      const newCard = {
        front: formData.front,
        back: formData.back,
        level: 1,
        tags: formData.tags.split(','),
        deckId: '14b8475f-407e-49c9-b7b6-79646fee32a3',
      } 
      await createCard(newCard);
    }
  },
  data () {
    return {
      newCard: {}
    }
  },
}
</script>
