<template>
  <div class="modal-open">
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click="toggleModal('copyCard')">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fa fa-file-alt"></i> Copy / Move card(s)
            </h4>
            <button type="button"
                    class="close"
                    @click="toggleModal('copyCard')">
              <span>&times;</span>
              <span class="sr-only">Close</span>
            </button>
          </div>
          <div class="modal-body p-2">
            <div class="row">
              <div class="col-sm-4 col-xs-12">
                <h4 class="modal-title">To existing deck</h4>
                <button class="btn btn-secondary dropdown-toggle"
                        type="button"
                        @click="toggleDropdown">
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

              <div class="col-sm-2 col-xs-12 or">
                  <h4 class="modal-title">or</h4>
              </div>

              <div class="form-group col-sm-6 col-xs-12">
                <h4 class="modal-title">To new deck</h4>
                <input type="text"
                       class="form-control"
                       v-model="newDeckName">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="toggleModal('copyCard')">Discard</button>
            <button type="button"
                    class="btn btn-secondary"
                    :disabled="actionNotAvailable()"
                    @click="handleAction('copy', ActiveCards)">Copy</button>
            <strong> or </strong>
            <button type="button"
                    class="btn btn-secondary"
                    :disabled="actionNotAvailable()"
                    @click="handleAction('move', ActiveCards)">Move</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toggleModal, createCard, editCard, createDeck  } from '../../methods.js'
import { GET_ACTIVE_CARDS, LIST_DECKS } from '../../graphql/queries.js'
import { clearActiveCards } from '../../helpers.js'

export default {
  name: 'copyMoveModal',
  data () {
    return {
      isExpanded: false,
      newDeck: {},
      newDeckName: ''
    }
  },
  methods: {
    toggleModal,
    clearActiveCards,
    toggleDropdown: function () {
      this.isExpanded = !this.isExpanded;
    },
    setNewDeck: function(newDeck) {
      this.newDeck = newDeck;
    },
    actionNotAvailable: function() {
      //either new deck name is defined or
      //destination deck is selected from dropdown
      return !this.newDeckName === '' || !this.newDeck.id
    },
    handleAction: async function(action, activeCards) {
      let newDeckId
      let newCard
      if(this.newDeckName) {
        const resp = await createDeck({name: this.newDeckName})
        newDeckId = resp.data.createDeck.id
      } else {
        newDeckId = this.newDeck.id
      }
      const updatedCardsPromises = activeCards.items.map(activeCard => {
        newCard = {
          deckId: newDeckId,
          back: activeCard.back,
          front: activeCard.front,
          tags: activeCard.tags,
        }

        if(action === 'copy') {
          return createCard(newCard)
        }

        if(action === 'move') {
          newCard.id = activeCard.id
          return editCard(newCard)
        }
      })

      await Promise.all(updatedCardsPromises)
      clearActiveCards()
      toggleModal('copyCard')
    }
  },
  apollo: {
    listDecks: {
      query: LIST_DECKS
    },
    ActiveCards: {
      query: GET_ACTIVE_CARDS
    }
  }
}
</script>
