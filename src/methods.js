import gql from 'graphql-tag'
import apollo from './apolloClient'

export const toggleModal = modalName => {
  apollo.mutate({
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
  apollo.mutate({
    mutation: gql`
      mutation($empty: String) {
        toggleNewAccountPage (empty: $empty) @client
      }
    `
  })
}

export const setActiveDeck = id => {
  apollo.mutate({
    mutation: gql`
      mutation($id: String) {
        setActiveDeck(id: $id) @client
      }
    `,
    variables: {
      id
    }
  })
}

export const createDeck = input => {
  apollo.mutate({
    mutation: gql`
      mutation($input: CreateDeckInput) {
        createDeck(input: $input) {
          name,
        }
      }
    `,
    variables: {
      input
    }
  })
}
