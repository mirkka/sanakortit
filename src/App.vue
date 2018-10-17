<template>
  <div id="app">
    <div class="container mt-3 mb-3">
      <navigation />
      <router-view></router-view>
    </div>
    <card-form-modal  v-if="Modals.createCard" />
    <export-deck-modal v-if="Modals.exportDeck" />
    <new-deck-modal v-if="Modals.createDeck" />
    <edit-deck-modal v-if="Modals.editDeck" />
    <delete-deck-modal v-if="Modals.deleteDeck" />
    <copy-move-modal v-if="Modals.copyCard"  />
    <delete-card-modal v-if="Modals.deleteCard" />
    <finish-study-modal v-if="false" />
  </div>
</template>

<script>
import CardFormModal from './components/Card/cardFormModal'
import NewDeckModal from './components/Deck/newDeckModal'
import ExportDeckModal from './components/Deck/exportDeckModal'
import EditDeckModal from './components/Deck/editDeckModal'
import DeleteDeckModal from './components/Deck/deleteDeckModal'
import CopyMoveModal from './components/Card/copyMoveModal'
import DeleteCardModal from './components/Card/deleteCardModal'
import FinishStudyModal from './components/finishStudyModal'

import Navigation from './components/nav'

import { IS_MODAL_OPEN } from './graphql/resolvers'

export default {
  name: 'app',
  components: {
    'card-form-modal': CardFormModal,
    'new-deck-modal': NewDeckModal,
    'export-deck-modal': ExportDeckModal,
    'edit-deck-modal': EditDeckModal,
    'delete-deck-modal': DeleteDeckModal,
    'delete-card-modal': DeleteCardModal,
    'copy-move-modal': CopyMoveModal,
    'finish-study-modal': FinishStudyModal,
    'navigation': Navigation,
  },
  data () {
    return {
      Modals: {},
    }
  },
  apollo: {
    Modals: {
      query: IS_MODAL_OPEN,
    },
  },
}

</script>

<style>
  body {
    background-color: rgb(218, 218, 218);
  } 

  .container {
    background-color: white;
    box-shadow: 0px 0px 40px #888888;
    max-width: 960px;
  }

  .header {
    font-size: 18px;
    line-height: 1;
    background-color: rgb(234, 103, 26, 1);
  }

  .deck:nth-child(2n) {
    background-color: rgb(240, 240, 240);
  }

  a {
    color: grey;
  }

  a:focus {
    outline: 0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: grey;
  }

  .list {
    list-style: none;
    padding: 0;
  }

  .disclaimer {
    font-size: 14px;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #eee;
    border-left-color: rgb(220, 53, 69);
    border-left-width: .25rem;
    border-radius: .25rem;
  }

  .has-error .glyphicon {
    display: block;
  }

  /* helpers */
  .pointer {
    cursor: pointer;
  }

  .router-link-exact-active {
    background-color: white;
  }

  .study-card {
    min-height: 450px;
  }
  
</style>
