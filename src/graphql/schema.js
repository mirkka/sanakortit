export const typeDefs = `
  schema {
    query: Query
  }

  type Modals {
    exportDeck: Boolean,
    createDeck: Boolean,
    addCard: Boolean,
    editDeck: Boolean,
    deleteDeck: Boolean,
    createCard:  Boolean,
    copyCard: Boolean,
    deleteCard: Boolean,
  }

  type NewAccountPage {
    isVisible: Boolean
  }

  type ActiveDeck {
    id: String,
    name: String,
    due: Number,
    cardAmount: Number,
  }

  type Mutation {
    toggleModal (modalName: string): Modals,
    toggleNewAccountPage (empty: String): null,
    setActiveDeck (deck: ActiveDeck): ActiveDeck,
  }

  type Query {
    Modals (): Modals,
    NewAccountPage (): NewAccountPage,
    NewDeckName (): NewDeckName,
    ActiveDeck (): Deck
  }
`;
