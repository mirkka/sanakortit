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
            <div class="dropdown">
              <strong>Deck:</strong>
              <div>
                <button class="btn btn-secondary dropdown-toggle" 
                        type="button" 
                        @click="toggleDropdown">
                  {{ActiveDeck.name}}
                </button>
                <div class="dropdown-menu" :class="{ 'd-block': isExpanded }">
                  <button class="dropdown-item pointer" 
                       @click="setActiveDeck(deck)" 
                       v-for="deck in listDecks.items" 
                       :key="deck.id"
                       :disabled="deck.id ===  ActiveDeck.id">{{deck.name}}</button>
                </div>
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
                <button type="button" 
                        class="btn btn-secondary mr-2" 
                        title="Switch card sides"
                        @click="flipSides(newCard)">
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
import { toggleModal, createCard, setActiveDeck } from '../../methods.js'
import { ACTIVE_DECK, LIST_DECKS } from '../../graphql/queries.js'

export default {
  name: 'cardFormModal',
  data () {
    return {
      ActiveDeck: {},
      newCard: {},
      listDecks: [],
      isExpanded: false,
    }
  },
  methods: {
    toggleModal,
    createCard,
    setActiveDeck,
    handleCreateCard: async function(cardData) {
      const newCard = {
        front: cardData.front,
        back: cardData.back,
        level: 1,
        tags: cardData.tags ? cardData.tags.split(',') : [],
        deckId: this.ActiveDeck.id,
      } 
      await createCard(newCard);
    },
    toggleDropdown: function () {
      this.isExpanded = !this.isExpanded;
    },
    flipSides: function(cardData) {
      const flippedCard = {
        ...this.newCard,
        front: cardData.back,
        back: cardData.front
      }

      this.newCard = flippedCard
    }
  },
  apollo: {
    ActiveDeck: {
      query: ACTIVE_DECK,
    },
    listDecks: {
      query: LIST_DECKS,
    }
  }
}
</script>
