export const typeDefs = `
  schema {
    query: Query
  }

  type Modals {
    exportDeck: Boolean,
    createDeck: Boolean,
    editDeck: Boolean,
    deleteDeck: Boolean,
    createCard:  Boolean,
    copyCard: Boolean,
    deleteCard: Boolean,
  }

  type ActiveDeck {
    id: String,
    name: String,
    due: Number,
    cardAmount: Number,
  }

  type ActiveCard {
    id: String,
    front: String,
    back: Number,
    tags: [String],
    deckId: String
  }

  type activeSearchFilter {
    deckId: String,
    tag: String,
    phrase: String
  }

  type ActiveCardsConnection {
    items: [ActiveCard]
  }

  type Mutation {
    toggleModal (modalName: string): Modals,
    setActiveDeck (deck: ActiveDeck): ActiveDeck,
    setActiveCard (card: ActiveCard): ActiveCard
    toggleActiveCard (card: ActiveCard): ActiveCardsConnection
    toggleAllActiveCards (serachResults: ActiveCardsConnection): ActiveCardsConnection
    setActiveSearchFilter (filter: activeSearchFilter): activeSearchFilter
    setSearchResults ([ActiveCard]): ActiveCardsConnection
  }

  type Query {
    Modals (): Modals,
    NewDeckName (): NewDeckName,
    ActiveDeck (): Deck,
    ActiveCard (): ActiveCard
    ActiveCards (): activeCardsConnection
    getActiveSearchFilter (): activeSearchFilter
    getSearchResults (): activeCardsConnection
  }
`;
