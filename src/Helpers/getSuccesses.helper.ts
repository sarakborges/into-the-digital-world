import { rollDies } from './rollDies.helper'

export const getSuccesses = (amountOfDies) => {
  return rollDies(amountOfDies).filter((die) => die >= 4).length
}
