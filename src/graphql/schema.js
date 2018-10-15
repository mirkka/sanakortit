export const typeDefs = `
  schema {
    query: Query
  }

  type Modals {
    exportDeck: Boolean,
    createDeck: Boolean
  }

  type NewAccountPage {
    isVisible: Boolean
  }

  type Mutation {
    toggleModal (modalName: string): Modals,
    toggleNewAccountPage (empty: String): null,
  }

  type Query {
    Modals (): Modals,
    NewAccountPage (): NewAccountPage,
  }
`;
