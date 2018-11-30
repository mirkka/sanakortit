<template>
  <div>
    <div class="d-flex mt-2">
      <div class="col-sm-9 col-xs-7"><strong>Deck</strong>
      </div>
      <div class="col-sm-1 col-xs-2"><strong>Due</strong>
      </div>
      <div class="col-sm-1 col-xs-3"><strong>Total</strong>
      </div>
    </div>
    <deck-row v-for="deck in listDecks.items" :key="deck.id" :deck="deck"/>
    <div class="col-xs-12 border-top mt-3 pt-3 pb-4 d-flex">
      <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('createDeck')">
        <i class="fa fa-plus"></i> Create deck
      </button>
        <button type="button" disabled class="btn btn-outline-secondary" @click="toggleModal('exportDeck')">
          <i class="fa fa-paperclip"></i> Export / Import deck
        </button>
    </div>
  </div>
</template>

<script>

import DeckRow from '../components/deckRow.vue'
import { toggleModal } from '../methods.js'
import { LIST_DECKS }  from '../graphql/queries'

export default {
  name: 'decks',
  components: {
    'deck-row': DeckRow,
  },
  methods: { toggleModal },
  data () {
    return {
      listDecks: {
        items: []
      }
    }
  },
  apollo: {
    listDecks: {
      query: LIST_DECKS,
      fetchPolicy: 'no-cache'
    }
  }
}
</script>
