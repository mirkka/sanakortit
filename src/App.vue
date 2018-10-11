<template>
  <div id="app">
    <router-view></router-view>
    <export-deck-modal v-if="ExportModal.isOpen"/>
    <div>test: {{ ExportModal }}</div>
  </div>
</template>

<script>
import DeleteCardModal from './components/Card/deleteCardModal'
import CardFormModal from './components/Card/cardFormModal'
import CopyMoveModal from './components/Card/copyMoveModal'
import NewDeckModal from './components/Deck/newDeckModal'
import ExportDeckModal from './components/Deck/exportDeckModal'
import EditDeckModal from './components/Deck/editDeckModal'
import DeleteDeckModal from './components/Deck/deleteDeckModal'

import { IS_EXPORT_MODAL_OPEN } from './graphql/resolvers'

export default {
  name: 'app',
  components: {
    'delete-card-modal': DeleteCardModal,
    'card-form-modal': CardFormModal,
    'copy-move-modal': CopyMoveModal,
    'new-deck-modal': NewDeckModal,
    'export-deck-modal': ExportDeckModal,
    'edit-deck-modal': EditDeckModal,
    'delete-deck-modal': DeleteDeckModal,
  },
  data () {
    return {
      ExportModal: {},
    }
  },
  apollo: {
    ExportModal: {
      query: IS_EXPORT_MODAL_OPEN,
    },
  }
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

</style>
