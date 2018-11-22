<template>
  <div>
    <div class="row">
      <div class="col-sm-3 pt-2 row d-flex flex-column">
        <div class="border-bottom">
          <strong class="pl-3">Deck</strong>
          <ul class="list">
            <li class="px-3 pointer"
                v-for="deck in listDecks.items"
                :key="deck.id"
                :class="{ 'bg-warning': isDeckSelected(deck) }"
                @click="selectDeck(deck)">
              {{deck.name}}
            </li>
          </ul>
        </div>
        <div class="py-2">
          <strong class="pl-3">Tags</strong>
          <ul class="list">
            <li class="px-3 pointer"
                v-for="tag in listTags.tags"
                :key="tag"
                :class="{ 'bg-warning': isTagSelected(tag) }"
                @click="selectTag(tag)">
              {{tag}}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8 border-left">
        <div class="row py-2 px-3 justify-content-end">
          <button type="button"
                  class="btn btn-outline-secondary btn-xs"
                  title="Create New card"
                  @click="toggleModal('createCard')">
            <i class="fa fa-file-alt"></i>
          </button>
          <div :class="{'d-none':ActiveCards.items.length === 0}">
            <button type="button"
                    class="btn btn-outline-secondary btn-xs mx-2"
                    title="Copy or Move card"
                    @click="toggleModal('copyCard')">
              <i class="fa fa-copy"></i>
            </button>
            <button type="button"
                    class="btn btn-outline-secondary btn-xs"
                    title="Delete card"
                    @click="toggleModal('deleteCard')">
              <i class="fa fa-trash-alt"></i>
            </button>
          </div>
        </div>

        <div class="">
          <div class="input-group mb-3">
            <input type="text"
                   class="form-control"
                   placeholder="Search"
                   v-model="phrase"
                   @input="handleSearch(phrase, selectedDeck.id, selectedTag)">
            <div class="d-flex align-items-center px-2 text-secondary">
                <i class="fa fa-search"></i>
            </div>
          </div>
        </div>

        <div class="">
          <table class="table table-striped table-condensed border-top">
            <thead>
              <tr>
                <th class="pointer"
                    @click="reverse(searchResults)">
                  <i class="fa fa-sort"></i> Found cards (<span>{{searchResults.items.length}}</span>)
                </th>
                <th class="text-right">All
                  <input type="checkbox"
                         class="ml-2 pointer"
                         :checked="ActiveCards.items.length === searchResults.items.length && searchResults.items.length !== 0"
                         @click="toggleAllActiveCards({items: searchResults.items})"
                         :disabled="searchResults.items.length === 0">
                </th>
              </tr>
            </thead>
            <tbody>
              <search-result v-for="card in searchResults.items" :key="card.id" :card="card"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from '../components/searchResult.vue'
import { LIST_DECKS,
         LIST_TAGS,
         GET_ACTIVE_CARDS,
         LIST_SEARCH_RESULTS }  from '../graphql/queries'
import searchFilters from '../searchFilters'
import { clearActiveCards, getActiveSearchFilter } from '../helpers.js'
import defaults  from '../graphql/defaults'

import { toggleModal,
         searchCards,
         getCards,
         toggleActiveCard,
         toggleAllActiveCards,
         setActiveDeck,
         setActiveSearchFilter,
         setSearchResults } from '../methods.js'

export default {
  name: 'browse',
  methods: {
    toggleModal,
    toggleActiveCard,
    toggleAllActiveCards,
    clearActiveCards,
    getActiveSearchFilter,
    setActiveDeck,
    setActiveSearchFilter,
    setSearchResults,
    handleSearch: async function (phrase, deckId, tag) {
      if(phrase === "") {
        setSearchResults(defaults.searchResults)
        return;
      }
      const searchFilter = {
        deckId: deckId,
        tag: tag,
        phrase: phrase
      }
      const searchParams = { deckId, phrase, tag }
      await searchCards(searchParams)
      setActiveSearchFilter(searchFilter)
    },
    getCardsForDeck: async function (deckId) {
      const searchFilter = {
        deckId: deckId,
        tag: '',
        phrase: this.phrase
      }
      clearActiveCards()
      await getCards(searchFilters.cardsByDeck(deckId))
      setActiveSearchFilter(searchFilter)
    },
    getCardsForTag: async function (tag) {
      const searchFilter = {
        deckId: '',
        tag: tag,
        phrase: this.phrase
      }
      clearActiveCards()
      await getCards(searchFilters.cardsByTag(tag))
      setActiveSearchFilter(searchFilter)
    },
    selectDeck: function (deck) {
      this.selectedTag = undefined
      this.phrase = ""
      if(this.selectedDeck.id === deck.id) {
        this.selectedDeck = {}
        setActiveDeck(defaults.ActiveDeck)
      } else {
        this.selectedDeck = deck;
        this.getCardsForDeck(deck.id)
        setActiveDeck(deck)
      }
    },
    isDeckSelected(deck) {
      return deck.id === this.selectedDeck.id;
    },
    selectTag: function (tag) {
      this.selectedDeck = {}
      setSearchResults(defaults.searchResults)
      this.phrase = ""
      if(this.selectedTag === tag) {
        this.selectedTag = undefined
      } else {
        this.selectedTag = tag;
        this.getCardsForTag(tag)
      }
    },
    isTagSelected(tag) {
      return tag === this.selectedTag;
    },
    reverse(searchResults) {
      const reversedSearchResults = searchResults.items.reverse()
      setSearchResults(reversedSearchResults)
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
      selectedDeck: {},
      selectedTag: undefined,
      listTags: [],
      searchResults: {
        items: []
      },
      ActiveCards: {
        items: []
      }
    }
  },
  apollo: {
    listDecks: {
      query: LIST_DECKS
    },
    listTags: {
      query: LIST_TAGS,
    },
    ActiveCards: {
      query: GET_ACTIVE_CARDS
    },
    searchResults: {
      query: LIST_SEARCH_RESULTS
    }
  }
}
</script>
