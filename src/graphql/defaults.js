export default {
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
      __typename: 'Deck'
    },
    __typename: 'Decks'
  },
  NewDeckName: {
    name: '',
    __typename: 'NewDeckName'
  }
};