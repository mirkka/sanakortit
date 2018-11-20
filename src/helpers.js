import { toggleAllActiveCards  } from './methods.js'

export const clearActiveCards = () => {
  const emptyItems = {items: []}
  toggleAllActiveCards(emptyItems)
}

