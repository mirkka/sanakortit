export default {
  cardsByFront: phrase => {
    return {front: {contains: phrase}}
  },
  cardsByDeck: id => {
    return {deckId: {contains: id}}
  },
  cardsByBack: (phrase) => {
    return {back: {contains: phrase}}
  },
  cardsByTag: (phrase) => {
    return {tags: {contains: phrase}}
  }
}
