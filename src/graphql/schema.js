export const typeDefs = `
  schema {
    query: Query
  }

  type Modals {
    exportDeck: Boolean,
    createDeck: Boolean
  }

  type Mutation {
    toggleModal (modalName: string): Modals
  }

  type Query {
    Modals (): Modals
  }
`;
