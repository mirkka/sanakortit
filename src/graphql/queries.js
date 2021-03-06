import gql from "graphql-tag";

export const IS_MODAL_OPEN = gql`
  query {
    Modals @client {
      exportDeck,
      createDeck,
      editDeck,
      deleteDeck,
      createCard,
      copyCard,
      deleteCard,
      finishStudy
    }
  }
`

export const ACTIVE_DECK = gql`
  query {
    ActiveDeck @client {
      id
      name
      due
      cardAmount
    }
  }
`

export const ACTIVE_CARD = gql`
  query {
    ActiveCard @client {
      id
      front
      back
      tags
      deckId
    }
  }
`

export const GET_DECK = gql`
  query GetDeck($id: ID!) {
    getDeck(id: $id) {
      id
      name
      due
      cardAmount
    }
  }
`
export const LIST_DECKS = gql`
  query {
    listDecks {
      items {
        id
        name
        due
        cardAmount
      }
    }
  }
`
export const LIST_TAGS = gql`
  query {
    listTags {
      tags
    }
  }
`
export const GET_ACTIVE_CARDS = gql`
  query {
    ActiveCards @client {
      items {
        front
        back
        level
        tags
        id
        deckId
      }
    }
  }
`

export const GET_STUDY_CARD = gql`
  query studyCard($id: ID){
    studyCard(deckId: $id) {
      front
      back
      level
      tags
      id
      deckId
    }
  }
`
export const GET_SEARCH_FILTER = gql`
  query {
    activeSearchFilter @client {
      deckId
      phrase
      tag
    }
  }
`
export const LIST_SEARCH_RESULTS = gql`
  query {
    searchResults @client {
      items {
        front
        back
        level
        tags
        id
        deckId
      }
    }
  }
`
export const SEARCH_CARDS = gql`
  query searchCards($searchParams: SearchParamsInput) {
    searchCards(
      searchParams: $searchParams
    ) {
        items {
          front
          back
          level
          tags
          id
          deckId
        }
    }
  }
`
export const GET_CARDS = gql`
  query listCards($filter: TableCardFilterInput) {
    listCards(
      filter: $filter
    ) {
        items {
          front
          back
          level
          tags
          id
          deckId
        }
    }
  }
`
