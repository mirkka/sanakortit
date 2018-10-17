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

  type Mutation {
    toggleModal (modalName: string): Modals,
    toggleNewAccountPage (empty: String): null,
    setNewDeckName (name: String): String,
  }

  type Query {
    Modals (): Modals,
    NewAccountPage (): NewAccountPage,
    NewDeckName (): NewDeckName,
  }

  type NewDeckName {
    name: String,
  }
`;
