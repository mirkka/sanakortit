export default {
  allCardsByPhrase: phrase => {
    return {
      front: {
        contains: phrase
      },
      back: {
        contains: phrase
      }
    }
  },
  cardsByDeck: deckId => {
    return {
      deckId: {
        contains: deckId
      }
    }
  }
}
