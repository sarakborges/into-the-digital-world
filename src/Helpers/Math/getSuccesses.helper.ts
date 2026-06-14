import { rollDies } from '@/Helpers/Math/rollDies.helper'

export const getSuccesses = (amountOfDies) => {
  return rollDies(amountOfDies).filter((die) => die >= 4).length
}
