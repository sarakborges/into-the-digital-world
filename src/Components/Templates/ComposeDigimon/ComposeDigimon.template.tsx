import { Fragment, useContext, useId } from 'react'
import { useNavigate, useParams } from 'react-router'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { AllCores } from '@/Types/Cores.type'

import { COMPOSABLE_DIGIMONS } from '@/GameData/Digimons'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Icon } from '@/Components/System/Icon'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { ResourceBar } from '@/Components/App/ResourceBar'

import './ComposeDigimon.style.scss'
import { StarterDigimonCard } from '@/Components/App/StarterDigimonCard'
import type { PartnerDigimonType } from '@/Types/Digimon.type'
import { ROUTES } from '@/Routes/Routes'

export const ComposeDigimonTemplate = () => {
  const profileContext = useContext(ProfileContext)
  const { id } = useParams()

  if (!profileContext || !id) {
    return
  }

  const upperId = id.toLocaleUpperCase()

  const { profile, setProfile } = profileContext

  const digimon = COMPOSABLE_DIGIMONS[upperId]

  if (!digimon) {
    return <></>
  }

  const digimonName = digimon.name
  const hasDigimonBeenSeen =
    profile.seenDigimon?.includes(upperId) && digimon.id === upperId

  if (!hasDigimonBeenSeen) {
    return <></>
  }

  const navigate = useNavigate()
  const newDigimonId = useId()

  const composeDigimon = (recipe) => {
    const newDigimon: PartnerDigimonType = {
      id: newDigimonId,
      baseDigimon: digimon.id,
      level: 1,
      experience: 0,
      points: 0,
      name: '',
      isStarter: false
    }

    const newProfile = {
      ...profile,
      partners: [...profile.partners!, { ...newDigimon }],
      cores: profile.cores.map((coreItem) => {
        const recipeCore = recipe.cores.find(
          (recipeCoreItem) => recipeCoreItem.id === coreItem.coreId
        )

        if (!recipeCore) {
          return coreItem
        }

        return {
          ...coreItem,
          quantity: coreItem.quantity - recipeCore.quantity
        }
      })
    }

    setProfile(newProfile)
    localStorage.setItem('profile', JSON.stringify(newProfile))

    navigate(ROUTES.HOME.path)
  }

  return (
    <MenuWrapper>
      <main className="compose-digimon-template">
        <header className="compose-digimon-header">
          <Typography as="h1">{getTexts('COMPOSE_DIGIMON_TITLE')}</Typography>

          <StarterDigimonCard digimon={digimon} />
        </header>

        <main>
          <header>
            <Typography as="h2">
              {getTexts('COMPOSE_DIGIMON_CORE_TITLE').replace(
                ':name',
                digimonName
              )}
            </Typography>
          </header>

          <main>
            {digimon.composeRecipe.map((composeItem) => (
              <Fragment key={`${digimonName}-compose-${composeItem.id}`}>
                <ul>
                  {composeItem.cores?.map((coreItem) => (
                    <li
                      key={`${digimonName}-compose-${composeItem.id}-core-${coreItem.id}`}
                    >
                      <aside>
                        <Icon
                          src={`/cores/${AllCores[coreItem.id].icon}.png`}
                          alt={`Composing ${digimonName}`}
                        />
                      </aside>

                      <main>
                        <Typography>
                          <>{AllCores[coreItem.id].name}</>
                          <> core:</>
                        </Typography>

                        <ResourceBar
                          currentValue={
                            profile.cores.find(
                              (profileCoreItem) =>
                                profileCoreItem.coreId === coreItem.id
                            )?.quantity || 0
                          }
                          maxValue={coreItem.quantity}
                          type="exp"
                        />
                      </main>
                    </li>
                  ))}

                  <li>
                    <Button
                      onClick={() => composeDigimon(composeItem)}
                      disabled={
                        !composeItem.cores.every(
                          (coreItem) =>
                            (profile.cores.find(
                              (profileCoreItem) =>
                                profileCoreItem.coreId === coreItem.id
                            )?.quantity || 0) >= coreItem.quantity
                        )
                      }
                    >
                      <>Compose</>
                    </Button>
                  </li>
                </ul>
              </Fragment>
            ))}
          </main>
        </main>
      </main>
    </MenuWrapper>
  )
}
