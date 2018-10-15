import gql from "graphql-tag";

export const defaults = {
  Modals: {
    exportDeck: false,
    createDeck: false,
    __typename: 'Modals',
  },
  NewAccountPage: {
    isVisible: false,
    __typename: 'NewAccountPage'
  }
};

export const IS_MODAL_OPEN = gql`
  query {
    Modals @client {
      exportDeck,
      createDeck
    }
  }
`
export const NEW_ACCOUNT_PAGE = gql`
  query {
    NewAccountPage @client {
      isVisible
    }
  }
`

export const resolvers = {
  Mutation: {
    toggleModal: (_, modalName, { cache }) => {
      const modals = cache.readQuery({ query: IS_MODAL_OPEN })
      const key = modalName.modalName;
      modals.Modals[key] = !modals.Modals[key];

      const data = modals;

      cache.writeData({ data });
      return modalName; 
    },
    toggleNewAccountPage: (_, empty, {  cache }) => {
      const data = cache.readQuery({ query: NEW_ACCOUNT_PAGE });

      data.NewAccountPage.isVisible = !data.NewAccountPage.isVisible;

      cache.writeData({ data });
      return  null;
    }
  },
};
