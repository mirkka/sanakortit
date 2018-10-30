<template>
  <div class="d-flex flex-column deck pt-2 pointer" @click="setActiveDeck(deck)">
    <div class="d-flex">
      <div class="col-sm-9 col-xs-7 pb-2">{{deck.name}}</div>
      <div class="col-sm-1 col-xs-2 text-danger font-weight-bold text-center">{{deck.due}}</div>
      <div class="col-sm-1 col-xs-3 text-center">{{deck.cardAmount}}</div>
    </div>
    <div class="col-sm-12 col-xs-12 pb-2" v-if="isDeckExpanded">
      <router-link to="/study" tag="button" class="btn btn-secondary mr-2">Study</router-link>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="$event.stopPropagation();toggleModal('createCard')">Add card</button>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="$event.stopPropagation();toggleModal('editDeck')">Edit</button>
      <button type="button" class="btn btn-outline-secondary" @click="$event.stopPropagation();toggleModal('deleteDeck')">Delete</button>
    </div>
  </div>
</template>

<script>
import { toggleModal, setActiveDeck } from '../methods.js';
import { ACTIVE_DECK } from '../graphql/queries.js';

export default {
  name: 'deckRow',
  methods: { toggleModal, setActiveDeck },
  computed: {
    isDeckExpanded() {
      return this.deck.id === this.ActiveDeck.id;
    }
  },
  data () {
    return {
      ActiveDeck: {}
    }
  },
  props: {
    deck: Object,
  },
  apollo: {
    ActiveDeck: {
      query: ACTIVE_DECK,
    }
  }
}
</script>
