import { IS_MODAL_OPEN, ACTIVE_DECK, ACTIVE_CARD, GET_ACTIVE_CARDS } from './queries'
import defaults from './defaults'
import lodash from 'lodash'

export default {
  Mutation: {
    toggleModal: (_, modalName, { cache }) => {
      const modals = cache.readQuery({ query: IS_MODAL_OPEN })
      const key = modalName.modalName;

      const newVal = !modals.Modals[key]

      const newModals = {
        ...modals.Modals,
        [ key ]: newVal
      }

      const data = {
        Modals: newModals
      };
      cache.writeData({ data });
      return data;
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
    },
    toggleAllActiveCards: (_, { searchResults }, { cache }) => {
      let data = {}
      const prevData = cache.readQuery({ query: GET_ACTIVE_CARDS })
      if(prevData.ActiveCards.items.length === searchResults.items.length) {
        data.ActiveCards = {items: [], __typename: 'toggleAllActiveCards' }
      } else {
        data.ActiveCards = {...searchResults, __typename: 'toggleAllActiveCards' }
      }

      cache.writeData({data})
      return data
    },
    setActiveSearchFilter: (_, { filter }, { cache }) => {
      const removedEmptyValues = lodash.pickBy(filter, _.isString)
      const data = {
        activeSearchFilter: {...removedEmptyValues, __typename: 'activeSearchFilter'}
      }


      cache.writeData({data})
      return data
    },
    setSearchResults: (_, { searchResults }, { cache }) => {
      const data = {
        searchResults: { items: searchResults.items, __typename: 'activeCardsConnection'}
      }

      cache.writeData({data})
      return data.searchResults
    }
  },
};
