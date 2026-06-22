import {generateRandomNumber} from '.'

export const rollDies = (amountOfDies) => {
  const results: Array<number> = []

  for (let die = 0; die < amountOfDies; die++) {
    results.push(
      generateRandomNumber({
        min: 1,
        max: 6
      })
    )
  }

  return results
}
