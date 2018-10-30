import {IS_MODAL_OPEN, NEW_ACCOUNT_PAGE, ACTIVE_DECK} from "./queries";
import defaults from './defaults';

export default {
  Mutation: {
    toggleModal: (_, modalName, { cache }) => {
      const modals = cache.readQuery({ query: IS_MODAL_OPEN })
      const key = modalName.modalName;

      const newVal = !modals.Modals[key]

      modals.Modals = { 
        ...modals.Modals,
        [ key ]: newVal
      }

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
    setActiveDeck: (_, { ActiveDeck }, { cache }) => {
      const data = cache.readQuery({ query: ACTIVE_DECK });
      const updatedActiveDeck = (data.ActiveDeck.id !== ActiveDeck.id) ? ActiveDeck : defaults.ActiveDeck;
      
      Object.assign(data.ActiveDeck, updatedActiveDeck)
      
      cache.writeData({ data });
      return updatedActiveDeck;
    }
  },
};
