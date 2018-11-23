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
  ActiveCards: {
    items: [],
    __typename: 'activeCardsConnection'
  },
  activeSearchFilter: {
    deckId: '',
    tag: '',
    phrase: '',
    __typename: 'activeSearchFilter'
  },
  NewDeckName: {
    name: '',
    __typename: 'NewDeckName'
  },
  searchResults: {
    items: [],
    __typename: 'activeCardsConnection'
  }
};
