import { useContext, useId } from 'react'
import { useNavigate, useParams } from 'react-router'

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

export const ComposeRecipe = ({
  recipe
}: {
  recipe: CompositionRecipeType
}) => {
  const profileContext = useContext(ProfileContext)
  const compositionContext = useContext(CompositionContext)
  const { id } = useParams()

  if (!profileContext || !compositionContext || !id) {
    return
  }

  const { profile, setProfile } = profileContext
  const { baseDigimon } = compositionContext

  const navigate = useNavigate()
  const newDigimonId = useId()

  const cores = recipe?.cores?.map((coreItem) => {
    const playerCores = profile.cores.find(
      (profileCoreItem) => profileCoreItem.coreId === coreItem.id
    )

    return {
      ...coreItem,
      playerQuantity: playerCores?.quantity || 0
    }
  })

  const isButtonEnabled = cores?.every(
    (coreItem) => coreItem.playerQuantity >= coreItem.quantity
  )

  const compose = (recipe) => {
    const updatedProfile = composeNewDigimon({
      baseDigimon: baseDigimon!,
      id: newDigimonId,
      profile,
      recipe
    })

    if (!updatedProfile) {
      return
    }

    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setProfile(updatedProfile)
    navigate(ROUTES.HOME.path)
  }

  return (
    <ul className="composition-recipe">
      {cores?.map((coreItem) => (
        <li
          key={`${baseDigimon?.name}-compose-${recipe.id}-core-${coreItem.id}`}
          className="card"
        >
          <aside>
            <Icon
              src={`/cores/${ALL_CORES[coreItem.id].icon}.png`}
              alt={`Composing ${baseDigimon?.name}`}
            />
          </aside>

          <main className="composition-recipe-core">
            <Typography>
              {getTexts('COMPOSE_RECIPE_CORE').replace(
                '[NAME]',
                ALL_CORES[coreItem.id].name
              )}
            </Typography>

            <ResourceBar
              currentValue={coreItem.playerQuantity}
              maxValue={coreItem.quantity}
            />
          </main>
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
