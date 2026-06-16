import { rollDies } from '@/Helpers/Math'

export const getSuccesses = (amountOfDies) => {
  return rollDies(Math.max(amountOfDies, 1)).filter((die) => die >= 4).length
}
