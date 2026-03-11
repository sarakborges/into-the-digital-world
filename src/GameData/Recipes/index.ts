import { KOROMON_RECIPES } from '@/GameData/Recipes/Koromon.data'
import { MOCHIMON_RECIPES } from '@/GameData/Recipes/Mochimon.data'
import { NYAROMON_RECIPES } from '@/GameData/Recipes/Nyaromon.data'
import { BUKAMON_RECIPES } from '@/GameData/Recipes/Bukamon.data'
import { PYOCOMON_RECIPES } from '@/GameData/Recipes/Pyocomon.data'
import { TANEMON_RECIPES } from '@/GameData/Recipes/Tanemon.data'
import { TOKOMON_RECIPES } from '@/GameData/Recipes/Tokomon.data'
import { TUNOMON_RECIPES } from '@/GameData/Recipes/Tunomon.data'
import { AGUMON_RECIPES } from './Agumon.data'

export const RECIPES_BY_DIGIMON = {
  KOROMON: KOROMON_RECIPES,
  MOCHIMON: MOCHIMON_RECIPES,
  NYAROMON: NYAROMON_RECIPES,
  BUKAMON: BUKAMON_RECIPES,
  PYOCOMON: PYOCOMON_RECIPES,
  TANEMON: TANEMON_RECIPES,
  TOKOMON: TOKOMON_RECIPES,
  TUNOMON: TUNOMON_RECIPES,
  AGUMON: AGUMON_RECIPES
}

export const ALL_RECIPES = [
  ...RECIPES_BY_DIGIMON.KOROMON,
  ...RECIPES_BY_DIGIMON.MOCHIMON,
  ...RECIPES_BY_DIGIMON.NYAROMON,
  ...RECIPES_BY_DIGIMON.BUKAMON,
  ...RECIPES_BY_DIGIMON.PYOCOMON,
  ...RECIPES_BY_DIGIMON.TANEMON,
  ...RECIPES_BY_DIGIMON.TOKOMON,
  ...RECIPES_BY_DIGIMON.TUNOMON,
  ...RECIPES_BY_DIGIMON.AGUMON
].reduce((obj, recipeItem) => {
  obj[recipeItem.id] = recipeItem
  return obj
}, {})

export {
  KOROMON_RECIPES,
  MOCHIMON_RECIPES,
  NYAROMON_RECIPES,
  BUKAMON_RECIPES,
  PYOCOMON_RECIPES,
  TANEMON_RECIPES,
  TOKOMON_RECIPES,
  TUNOMON_RECIPES,
  AGUMON_RECIPES
}
