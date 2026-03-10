import { useContext } from 'react'
import { useNavigate } from 'react-router'

import type { CompositionRecipeType } from '@/Types/Composition.type'
import { ALL_CORES } from '@/Consts/Cores.const'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CompositionContext } from '@/Contexts/Composition.context'

import { composeNewDigimon } from '@/Helpers/ComposeDigimon.helper'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Icon } from '@/Components/System/Icon'

import { ResourceBar } from '@/Components/App/ResourceBar'

import './ComposeRecipe.style.scss'
import { ALL_DIGIMONS } from '@/GameData/Digimons'

export const ComposeRecipe = ({
  recipe
}: {
  recipe: CompositionRecipeType
}) => {
  const profileContext = useContext(ProfileContext)
  const compositionContext = useContext(CompositionContext)

  if (!profileContext || !compositionContext) {
    return
  }

  const { profile, setProfile } = profileContext
  const { baseDigimon } = compositionContext

  const navigate = useNavigate()
  const newDigimonId = (
    Number(profile.partners?.[profile.partners?.length - 1]?.id || 0) + 1
  ).toString()

  const ingredients: Array<{
    id: string
    type: 'attribute' | 'families' | 'item' | 'digimon'
    name: string
    playerQuantity: number
    quantity: number
    directory: string
    icon: string
  }> =
    recipe?.ingredients?.map((ingredientItem) => {
      if (['attribute', 'families'].includes(ingredientItem.type)) {
        const playerCores = profile.cores.find(
          (profileCoreItem) => profileCoreItem.id === ingredientItem.id
        )

        return {
          ...ingredientItem,
          name: ALL_CORES[ingredientItem.id].name,
          icon: ALL_CORES[ingredientItem.id].icon,
          directory: 'cores',
          playerQuantity: playerCores?.quantity || 0
        }
      }

      if (['digimon'].includes(ingredientItem.type)) {
        const playerCores = profile.cores.find(
          (profileCoreItem) => profileCoreItem.id === ingredientItem.id
        )

        return {
          ...ingredientItem,
          name: ALL_DIGIMONS[playerCores!.id].name,
          icon: ingredientItem.id,
          directory: 'digimon_portraits',
          playerQuantity: playerCores?.quantity || 0
        }
      }

      return {
        ...ingredientItem,
        name: '',
        icon: '',
        directory: '',
        playerQuantity: 0
      }
    }) ?? []

  const isButtonEnabled = ingredients?.every(
    (coreItem) => coreItem.playerQuantity >= coreItem.quantity
  )

  const compose = (recipe) => {
    const digimonName = prompt(getTexts('COMPOSE_DIGIMON_NAME'))

    const updatedProfile = composeNewDigimon({
      baseDigimon: baseDigimon!,
      id: newDigimonId,
      name: digimonName || '',
      profile,
      recipe
    })

    if (!updatedProfile) {
      return
    }

    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setProfile(updatedProfile)
    navigate(ROUTES.COLLECTION.path)
  }

  return (
    <ul className="composition-recipe">
      {ingredients?.map((ingredientItem) => (
        <li
          key={`${baseDigimon?.name}-compose-${recipe.id}-core-${ingredientItem.id}`}
        >
          {['attribute', 'families', 'digimon'].includes(
            ingredientItem.type
          ) && (
            <>
              <aside>
                <Icon
                  src={`/${ingredientItem.directory}/${ingredientItem.icon}.jpg`}
                  alt={`Composing ${baseDigimon?.name}`}
                />
              </aside>

              <main className="composition-recipe-core">
                <Typography>
                  {getTexts('COMPOSE_RECIPE_CORE').replace(
                    '[NAME]',
                    ingredientItem.name
                  )}
                </Typography>

                <ResourceBar
                  currentValue={ingredientItem.playerQuantity}
                  maxValue={ingredientItem.quantity}
                />
              </main>
            </>
          )}
        </li>
      ))}

      <li>
        <Button onClick={() => compose(recipe)} disabled={!isButtonEnabled}>
          {getTexts('COMPOSE_RECIPE_CTA')}
        </Button>
      </li>
    </ul>
  )
}
