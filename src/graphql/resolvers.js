import { IS_MODAL_OPEN, NEW_ACCOUNT_PAGE, ACTIVE_DECK, ACTIVE_CARD, GET_ACTIVE_CARDS } from "./queries";
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
    },
    setActiveCard: (_, { ActiveCard }, { cache }) => {
      const data = cache.readQuery({ query: ACTIVE_CARD });
      data.ActiveCard = ActiveCard
      cache.writeData({data});
      return ActiveCard;
    },
    toggleActiveCard: (_, { ActiveCard }, { cache }) => {
      const data = cache.readQuery({ query: GET_ACTIVE_CARDS })
      const card = data.ActiveCards.items.find(card => ActiveCard.id === card.id)
      const index = data.ActiveCards.items.indexOf(card)

      if(index > -1) {
        data.ActiveCards.items.splice(index, 1);
      } else {
        data.ActiveCards.items = [...data.ActiveCards.items, ActiveCard]
      }

      cache.writeData({data})
      return data.ActiveCards
    }
  },
};
