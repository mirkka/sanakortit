import gql from "graphql-tag";

export const defaults = {
  ExportModal: {
    __typename: 'ExportModal',
    isOpen: false
  },
};

export const IS_EXPORT_MODAL_OPEN = gql`
  query {
    ExportModal @client {
      isOpen
    }
  }
`

export const resolvers = {
  Mutation: {
    toggleExportModal: (_, isOpen, { cache }) => {
      const previous = cache.readQuery({ query: IS_EXPORT_MODAL_OPEN })
      const data = {
        ExportModal: {
          __typename: 'ExportModal',
          isOpen: !previous.ExportModal.isOpen,
        }
      };
      cache.writeData({ data });
      return isOpen;
    }
  },
};
