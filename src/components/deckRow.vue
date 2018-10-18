<template>
  <div class="d-flex flex-column deck pt-1 pointer" @click="setActiveDeck(id)">
    <div class="d-flex">
      <div class="col-sm-9 col-xs-7">{{name}}</div>
      <div class="col-sm-1 col-xs-2 text-danger"><strong>{{due}}</strong></div>
      <div class="col-sm-1 col-xs-3 text-primary">{{cards}}</div>
    </div>
    <div class="col-sm-12 col-xs-12 py-3" v-if="isDeckExpanded">
      <router-link to="/study" tag="button" class="btn btn-secondary mr-2">Study</router-link>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('createCard')">Add card</button>
      <button type="button" class="btn btn-outline-secondary mr-2" @click="toggleModal('editDeck')">Edit</button>
      <button type="button" class="btn btn-outline-secondary" @click="toggleModal('deleteDeck')">Delete</button>
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
      return this.id === this.ActiveDeck.id;
    }
  },
  data () {
    return {
      ActiveDeck: {}
    }
  },
  props: {
    id: String,
    due: Number,
    cards: Number,
    name: String
  },
  apollo: {
    ActiveDeck: {
      query: ACTIVE_DECK,
    }
  }
}
</script>
