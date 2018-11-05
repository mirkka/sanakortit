import gql from 'graphql-tag'
import apollo from './apolloClient'
import { GET_STUDY_CARD, GET_DECK } from './graphql/queries'

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

export const toggleNewAccountPage = () => {
  return apollo.mutate({
    mutation: gql`
      mutation($empty: String) {
        toggleNewAccountPage (empty: $empty) @client
      }
    `
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
    }
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
    }
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
    }
  })
}

export const createCard = input => {
  return apollo.mutate({
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
    }
  })
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

export const getStudyCard = id => {
  return apollo.query({
    query: GET_STUDY_CARD,
    variables: {
      id
    }
  })
}

export const getDeck = id => {
  return apollo.query({
    query: GET_DECK,
    variables: {
      id
    }
  })
}
