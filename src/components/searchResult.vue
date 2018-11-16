<template>
  <tr>
    <td>
      <a class="pointer word-wrap"
         @click="handleEditCard(card)">{{card.front}}</a>
      <br>
      <small>{{card.back}}</small>
      </td>
      <td class="text-right">
        <input type="checkbox" class="pointer">
      </td>
  </tr>
</template>

<script>
import { toggleModal, setActiveCard } from '../methods.js'

export default {
  name: 'searchResult',
  props: {
    card: Object,
  },
  methods: {
    handleEditCard: async activeCard => {
      await setActiveCard(activeCard)
      toggleModal('createCard')
    }
  }
}
</script>
