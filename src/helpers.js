import { toggleAllActiveCards, getCards, searchCards } from './methods.js'
import searchFilters from './searchFilters'
import apollo from './apolloClient'
import _ from 'lodash'
import { GET_SEARCH_FILTER } from './graphql/queries'
import { Auth } from 'aws-amplify'

export const clearActiveCards = () => {
  const emptyItems = {items: []}
  toggleAllActiveCards(emptyItems)
}

export const getActiveSearchFilter = async() => {
  const data = await apollo.query({
    query: GET_SEARCH_FILTER,
  })

  return _.pickBy(data.data.activeSearchFilter, value => value !== "")
}

export const updateSearchResultsList = async () => {
  let filter
  const activeSearchFilter = await getActiveSearchFilter()
  delete activeSearchFilter.__typename
  const { phrase, deckId, tag } = activeSearchFilter
  if (phrase) {
    return searchCards(activeSearchFilter)
  }
  if (deckId){
    filter = searchFilters.cardsByDeck(deckId)
    return getCards(filter)
  }

  if(tag) {
    filter = searchFilters.cardsByTag(tag)
    return getCards(filter)
  }
}

export const getUser = async () => {
  const session = await Auth.currentSession()
  return _.get(session, 'accessToken.payload.username')
}
