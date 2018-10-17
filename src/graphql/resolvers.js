import {IS_MODAL_OPEN, NEW_ACCOUNT_PAGE, NEW_DECK_NAME} from "./queries";

export default {
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
    },
    setNewDeckName: (_, name, {  cache }) => {
      const data = cache.readQuery({ query: NEW_DECK_NAME });

      data.NewDeckName.name = name;

      cache.writeData({ data });
      return  name;
    },
  },
};
