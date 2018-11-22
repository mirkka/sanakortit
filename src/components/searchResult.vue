<template>
  <tr>
    <td>
      <a class="pointer word-wrap"
         @click="handleEditCard(card)">{{card.front}}</a>
      <br>
      <small>{{card.back}}</small>
      </td>
      <td class="text-right">
        <input type="checkbox"
               class="pointer"
               :checked="isCardActive(ActiveCards, card.id)"
               @click="toggleActiveCard(card)">
      </td>
  </tr>
</template>

<script>
import { toggleModal, setActiveCard, toggleActiveCard } from '../methods.js'
import { GET_ACTIVE_CARDS, LIST_DECKS } from '../graphql/queries.js'

export default {
  name: 'searchResult',
  props: {
    card: Object,
  },
  methods: {
    toggleActiveCard,
    handleEditCard: async editCard => {
      await setActiveCard(editCard)
      toggleModal('createCard')
    },
    isCardActive: (activeCards, cardId) => {
      return !!activeCards.items.find(activeCard => activeCard.id === cardId)
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
