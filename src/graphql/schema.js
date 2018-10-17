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

  type Deck {
    id: ID,
    name: String,
    due: Int,
    cardAmount: Int,
  }

  type Decks {
    items { Deck }
  }

  type Mutation {
    toggleModal (modalName: string): Modals,
    toggleNewAccountPage (empty: String): null,
  }

  type Query {
    Modals (): Modals,
    NewAccountPage (): NewAccountPage,
    GetDeck (id: !ID): Deck
    GetDecks (): Decks
  }
`;
