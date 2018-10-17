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