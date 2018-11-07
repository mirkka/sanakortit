export default {
  Modals: {
    exportDeck: false,
    createDeck: false,
    editDeck: false,
    deleteDeck: false,
    createCard:  false,
    copyCard: false,
    deleteCard: false,
    finishStudy: false,
    __typename: 'Modals',
  },
  NewAccountPage: {
    isVisible: false,
    __typename: 'NewAccountPage'
  },
  ActiveDeck: {
    id: '',
    name: '',
    due: null,
    cardAmount: null,
    __typename: 'ActiveDeck'
  },
  ActiveCard: {
    id: '',
    front: '',
    back: '',
    tags: '',
    level: 0,
    deckId: '',
    __typename: 'ActiveCard'
  },
  NewDeckName: {
    name: '',
    __typename: 'NewDeckName'
  },
};
