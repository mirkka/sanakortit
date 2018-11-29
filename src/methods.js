import gql from 'graphql-tag'
import apollo from './apolloClient'
import { GET_STUDY_CARD,
         GET_DECK,
         SEARCH_CARDS,
         GET_CARDS,
         LIST_TAGS,
         LIST_DECKS} from './graphql/queries'
import { updateSearchResultsList } from './helpers'

export const toggleModal = modalName => {
  return apollo.mutate({
    mutation: gql`
      mutation($modalName: String) {
        toggleModal (modalName: $modalName) @client
      }
    `,
    variables: {
      modalName
    }
  })
}

export const setActiveDeck = ActiveDeck => {
  return apollo.mutate({
    mutation: gql`
      mutation($ActiveDeck: ActiveDeck) {
        setActiveDeck(ActiveDeck: $ActiveDeck) @client
      }
    `,
    variables: {
      ActiveDeck
    },
    fetchPolicy: 'no-cache',
  })
}

export const setActiveSearchFilter = filter => {
  return apollo.mutate({
    mutation: gql`
      mutation($filter: ActiveSearchFilter) {
        setActiveSearchFilter(filter: $filter) @client
      }
    `,
    variables: {
      filter
    }
  })
}

export const setActiveCard = ActiveCard => {
  return apollo.mutate({
    mutation: gql`
      mutation($ActiveCard: ActiveCard) {
        setActiveCard(ActiveCard: $ActiveCard) @client
      }
    `,
    variables: {
      ActiveCard
    }
  })
}

export const toggleActiveCard = ActiveCard => {
  return apollo.mutate({
    mutation: gql`
      mutation($ActiveCard: ActiveCard) {
        toggleActiveCard(ActiveCard: $ActiveCard) @client
      }
    `,
    variables: {
      ActiveCard
    }
  })
}

export const toggleAllActiveCards = searchResults => {
  return apollo.mutate({
    mutation: gql`
      mutation($searchResults: ActiveCardsConnection) {
        toggleAllActiveCards(searchResults: $searchResults) @client
      }
    `,
    variables: {
      searchResults
    }
  })
}

export const createDeck = input => {
  return apollo.mutate({
    mutation: gql`
      mutation($input: CreateDeckInput) {
        createDeck(input: $input) {
          name,
          id,
          due,
          cardAmount
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [{query: LIST_DECKS}]
  })
}

export const deleteDeck = input => {
  return apollo.mutate({
    mutation: gql`
      mutation($input: DeleteDeckInput) {
        deleteDeck(input: $input) {
          id,
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [{query: LIST_DECKS}]
  })
}

export const updateDeck = input => {
  return apollo.mutate({
    mutation: gql`
      mutation($input: UpdateDeckInput) {
        updateDeck(input: $input) {
          name,
          id,
          due,
          cardAmount
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [{query: LIST_DECKS}]
  })
}

export const createCard = async input => {
  const response = await apollo.mutate({
    mutation: gql`
      mutation($input: CreateCardInput) {
        createCard(input: $input) {
          front
	        back
	        tags
          deckId
          id
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [{query: LIST_DECKS}]
  })

  await updateSearchResultsList()
  return response
}

export const flipAllCards = input => {
  return apollo.mutate({
    mutation: gql`
      mutation($input: UpdateCardsInput) {
        updateCards(input: $input) {
          id
        }
      }
    `,
    variables: {
      input
    }
  })
}

export const updateStudyCard = input => {
  return apollo.mutate({
    mutation: gql`
      mutation($input: UpdateStudyCardInput) {
        updateStudyCard(input: $input) {
          id
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [{query: GET_STUDY_CARD}]
  })
}

export const editCard = async input => {
  const response = await apollo.mutate({
    mutation: gql`
      mutation($input: UpdateCardInput) {
        updateCard(input: $input) {
          front
          back
          tags
          id
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [ { query: LIST_TAGS }]
  })
  await updateSearchResultsList()
  return response

}

export const deleteCard = async input => {
  const response = await apollo.mutate({
    mutation: gql`
      mutation($input: DeleteCardInput) {
        deleteCard(input: $input) {
          id
        }
      }
    `,
    variables: {
      input
    },
    refetchQueries: [ { query: LIST_TAGS }]
  })
  await updateSearchResultsList()
  return response
}

export const setSearchResults = searchResults => {
  return apollo.mutate({
    mutation: gql`
      mutation($searchResults: ActiveCardsConnection) {
        setSearchResults(searchResults: $searchResults) @client {
          items {
            front
            back
            level
            tags
            id
            deckId
          }
        }
      }
    `,
    variables: {
      searchResults
    },
  })
}

export const getStudyCard = id => {
  return apollo.query({
    query: GET_STUDY_CARD,
    variables: {
      id
    },
    fetchPolicy: 'no-cache'
  })
}

export const getDeck = id => {
  return apollo.query({
    query: GET_DECK,
    variables: {
      id
    },
    fetchPolicy: 'no-cache'
  })
}

export const searchCards = async searchParams => {
  const response = await apollo.query({
    query: SEARCH_CARDS,
    variables: {
      searchParams
    },
    fetchPolicy: 'no-cache'
  })

  await setSearchResults({items: response.data.searchCards.items})
  return response
}

export const getCards = async filter => {
  const response = await apollo.query({
    query: GET_CARDS,
    variables: {
      filter
    },
    fetchPolicy: 'no-cache'
  })

  await setSearchResults({items: response.data.listCards.items})
  return response
}
