import gql from "graphql-tag";

export const defaults = {
  Modals: {
    exportDeck: false,
    createDeck: false,
    addCard: false,
    editDeck: false,
    deleteDeck: false,
    createCard:  false,
    copyCard: false,
    deleteCard: false,
    __typename: 'Modals',
  },
  NewAccountPage: {
    isVisible: false,
    __typename: 'NewAccountPage'
  },
  Deck: {
    id: 1,
    name: '',
    due: null,
    cardAmount: null,
    __typename: 'Deck'
  },
  Decks: {
    items:{
      id: 1,
      name: '',
      due: null,
      cardAmount: null,
      __typename: 'deck'
    },
    __typename: 'Decks'
  }
};

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

export const resolvers = {
  Mutation: {
    toggleModal: (_, modalName, { cache }) => {
      const modals = cache.readQuery({ query: IS_MODAL_OPEN })
      const key = modalName.modalName;
      modals.Modals[key] = !modals.Modals[key];

      const data = modals;

      cache.writeData({ data });
      return modalName; 
    },
    toggleNewAccountPage: (_, empty, {  cache }) => {
      const data = cache.readQuery({ query: NEW_ACCOUNT_PAGE });

      data.NewAccountPage.isVisible = !data.NewAccountPage.isVisible;

      cache.writeData({ data });
      return  null;
    }
  },
};
