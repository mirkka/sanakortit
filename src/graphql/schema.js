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
  }

  type Mutation {
    toggleModal (modalName: string): Modals,
    toggleNewAccountPage (empty: String): null,
    setActiveDeck (id: String): String
  }

  type Query {
    Modals (): Modals,
    NewAccountPage (): NewAccountPage,
    NewDeckName (): NewDeckName,
    ActiveDeck (): ActiveDeck
  }

  type NewDeckName {
    name: String,
  }
`;
