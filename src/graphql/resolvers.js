import gql from "graphql-tag";

export const defaults = {
  Modals: {
    exportDeck: false,
    createDeck: false,
    __typename: 'Modals',
  },
};

export const IS_MODAL_OPEN = gql`
  query {
    Modals @client {
      exportDeck,
      createDeck
    }
  }
`

export const resolvers = {
  Mutation: {
    toggleModal: (_, modalName, { cache }) => {
      const modals = cache.readQuery({ query: IS_MODAL_OPEN })
      const key = modalName.modalName;
      modals.Modals[key] = !modals.Modals[key];

      const data = modals

      cache.writeData({ data });
      return modalName; 
    }
  },
};
