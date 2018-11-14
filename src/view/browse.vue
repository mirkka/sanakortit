<template>
  <div>
    <div class="row">
      <div class="col-sm-3 pt-2 row d-flex flex-column">
        <div class="border-bottom">
          <strong class="pl-3">Deck</strong>
          <ul class="list">
            <li class="bg-warning px-3 pointer">
              <a href="">test</a>
            </li>
            <li class="pointer px-3">
              <a href="">test2</a>
            </li>
          </ul>
        </div>
        <div class="py-2">
          <strong class="pl-3">Tags</strong>
          <ul class="list">
            <li class="px-3 pointer">
              <a href="">test</a>
            </li>
            <li class="px-3 bg-warning pointer">
              <a href="">test2</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8 border-left">
        <div class="row py-2 px-3 justify-content-end">
          <button type="button" class="btn btn-outline-secondary btn-xs" title="Create New card" @click="toggleModal('createCard')">
            <i class="fa fa-file-alt"></i>
          </button>
          <button type="button" class="btn btn-outline-secondary btn-xs" title="Copy or Move card" @click="toggleModal('copyCard')">
            <i class="fa fa-copy"></i>
          </button>
          <button type="button" class="btn btn-outline-secondary btn-xs" title="Delete card" @click="toggleModal('deleteCard')">
            <i class="fa fa-trash-alt"></i>
          </button>
        </div>

        <div class="">
          <div class="input-group mb-3">
            <input type="text"
                   class="form-control"
                   placeholder="Search"
                   v-model="phrase"
                   @input="handleSearch(phrase)">
            <div class="d-flex align-items-center px-2 text-secondary">
                <i class="fa fa-search"></i>
            </div>
          </div>
        </div>

        <div class="">
          <table class="table table-striped table-condensed border-top">
            <thead>
              <tr>
                <th id="sort" class="pointer">
                  <i class="fa fa-sort"></i> Found cards (<span>{{searchResults.length}}</span>)
                </th>
                <th class="text-right">All
                  <input type="checkbox" id="selectAll" class="ml-2 pointer">
                </th>
              </tr>
            </thead>
            <tbody>
              <search-result v-for="card in searchResults" :key="card.id" :card="card"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from '../components/searchResult.vue'
import { LIST_DECKS, LIST_CARDS }  from '../graphql/queries'

import { toggleModal, getCards } from '../methods.js'

export default {
  name: 'browse',
  methods: {
    toggleModal,
    handleSearch: async function (phrase) {
      if (phrase === "") {
        this.searchResults = []
        return;
      }
      const filter = {
        front: {
          contains: phrase
        },
        back: {
          contains: phrase
        }
      }
      const resp = await getCards(filter)
      this.searchResults = resp.data.listCards.items
    }
  },
  components: {
    'search-result': SearchResult,
  },
  data () {
    return {
      phrase: "",
      listDecks: [],
      listCards: [],
      searchResults: []
    }
  },
  apollo: {
    listDecks: {
      query: LIST_DECKS
    }
  }
}
</script>
