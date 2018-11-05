import gql from "graphql-tag";

export const IS_MODAL_OPEN = gql`
  query {
    Modals @client {
      exportDeck,
      createDeck,
      addCard,
      editDeck,
      deleteDeck,
      createCard,
      copyCard,
      deleteCard,
    }
  }
`
export const NEW_ACCOUNT_PAGE = gql`
  query {
    NewAccountPage @client {
      isVisible
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
export const NEW_DECK_SUBSCRIPTION = gql`
  subscription {
    onCreateDeck {
      id,
      name,
      due,
      cardAmount
    }
  }
`
export const DELETE_DECK_SUBSCRIPTION = gql`
  subscription {
    onDeleteDeck {
      id,
    }
  }
`

export const CREATE_CARD_SUBSCRIPTION = gql`
  subscription {
    onCreateCard {
      deckId,
    }
  }
`
