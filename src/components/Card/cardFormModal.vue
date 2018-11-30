<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click="toggleModal('createCard')">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" @click="closeDropdown($event, false)">
          <div class="modal-header">
            <h4 class="modal-title" v-if="isEdit"><i class="fa fa-file-alt"></i> Edit card</h4>
            <h4 class="modal-title" v-if="!isEdit"><i class="fa fa-file-alt"></i> Add card</h4>
            <button type="button" class="close" @click="toggleModal('createCard')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="dropdown">
              <strong>Deck:</strong>
              <div v-if="isEdit">{{ActiveDeck.name}}</div>
              <div v-if="!isEdit">
                <button class="btn btn-secondary dropdown-toggle"
                        type="button"
                        @click="toggleDropdown($event)">
                  {{newDeck.name || 'select deck'}}
                </button>
                <div class="dropdown-menu" :class="{ 'd-block': isExpanded }">
                  <button class="dropdown-item pointer"
                          @click="setNewDeck(deck)"
                          v-for="deck in listDecks.items"
                          :key="deck.id"
                          :disabled="deck.id ===  newDeck.id">{{deck.name}}</button>
                </div>
              </div>
            </div>
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
                <router-link to="/browse"
                             tag="button"
                             class="btn btn-outline-secondary"
                             @click.native="toggleModal('createCard')">
                  <i class="fa fa-globe-americas"></i>
                </router-link>
              </div>
              <div>
                <button type="button"
                        class="btn btn-outline-secondary mr-2"
                        @click="toggleModal('createCard')">Close</button>
                <button type="button"
                        class="btn btn-secondary"
                        tabindex="4"
                        v-if="!isEdit"
                        :disabled="!newDeck.id"
                        @click="handleCreateCard(newCard)">Save</button>
                <button type="button"
                        v-if="isEdit"
                        class="btn btn-secondary"
                        tabindex="4"
                        :disabled="!newDeck.id"
                        @click="handleEditCard(newCard)">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleModal, createCard, editCard, getDeck } from '../../methods.js'
import { ACTIVE_DECK, LIST_DECKS, ACTIVE_CARD } from '../../graphql/queries.js'
import defaults  from '../../graphql/defaults'
import { getUser } from '../../helpers.js'
import _ from 'lodash'

export default {
  name: 'cardFormModal',
  data () {
    return {
      newCard: {},
      newDeck: {},
      isExpanded: false,
      isEdit: false,
      listDecks: {
        items: []
      }
    }
  },
  async mounted() {
    if (!this.ActiveDeck.id === "") {
      const response  = await getDeck(this.ActiveCard.deckId)
      const deck = _.get(response.data, 'getDeck')
      this.newDeck = this.ActiveDeck = deck
    } else {
      this.newDeck = this.ActiveDeck
    }

    if (this.ActiveCard.id !== "") {
      this.newCard = this.ActiveCard
      this.isEdit = true
    }
  },
  methods: {
    toggleModal,
    createCard,
    handleCreateCard: async function(cardData) {
      const author = await getUser()
      const newCardObj = {
        front: cardData.front,
        back: cardData.back,
        tags: cardData.tags,
        deckId: this.newDeck.id,
        author,
      }
      await createCard(newCardObj);

      this.newCard = { ...defaults.ActiveCard }
    },
    handleEditCard: async function(cardData) {
      const tags = cardData.tags === "" ? null : cardData.tags
      const updatedCard = {
        front: cardData.front,
        back: cardData.back,
        tags,
        deckId: cardData.deckId,
        id: cardData.id
      }
      await editCard(updatedCard)
      toggleModal('createCard')
    },
    toggleDropdown: function (event) {
      event.stopPropagation()
      this.isExpanded = !this.isExpanded
    },
    closeDropdown: function (event, boolean) {
      event.stopPropagation()
      this.isExpanded = boolean
    },
    flipSides: function(cardData) {
      const flippedCard = {
        ...this.newCard,
        front: cardData.back,
        back: cardData.front
      }

      this.newCard = flippedCard
    },
    setNewDeck: function(newDeck) {
      this.newDeck = newDeck;
    }
  },
  apollo: {
    ActiveDeck: {
      query: ACTIVE_DECK,
    },
    ActiveCard: {
      query: ACTIVE_CARD,
    },
    listDecks: {
      query: LIST_DECKS,
      fetchPolicy: 'no-cache',
    }
  }
}
</script>
