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