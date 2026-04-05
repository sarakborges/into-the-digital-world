import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { FaMinus, FaPlus } from 'react-icons/fa'

import { ALL_CORES } from '@/Consts/Cores.const'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CompositionContext } from '@/Contexts/Composition.context'

import { composeNewDigimon } from '@/Helpers/ComposeDigimon.helper'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Icon } from '@/Components/System/Icon'

import { ResourceBar } from '@/Components/App/ResourceBar'

import './ComposeDigimonTemplate.style.scss'

export const ComposeDigimonTemplate = ({}: {}) => {
  const profileContext = useContext(ProfileContext)
  const compositionContext = useContext(CompositionContext)

  if (!profileContext || !compositionContext) {
    return
  }

  const { profile, setProfile } = profileContext
  const {
    baseDigimon,
    setBaseDigimon,
    components,
    setComponents,
    progress,
    setProgress
  } = compositionContext

  if (!baseDigimon) {
    return
  }

  const navigate = useNavigate()
  const newDigimonId = (
    Number(profile.partners?.[profile.partners?.length - 1]?.id || 0) + 1
  ).toString()

  if (!profile.templates.includes(baseDigimon.id)) {
    return
  }

  const data: Array<{
    id: string
    name: string
    playerQuantity: number
    weight: number
    directory: string
    icon: string
  }> =
    baseDigimon.compositionTemplate?.data?.map((dataItem) => {
      const playerCores = profile.cores[dataItem.id] || 0

      if (!!ALL_CORES[dataItem.id]) {
        return {
          ...dataItem,
          name: ALL_CORES[dataItem.id].name,
          icon: ALL_CORES[dataItem.id].icon,
          directory: 'cores',
          playerQuantity: playerCores
        }
      }

      if (!!ALL_DIGIMONS[dataItem.id]) {
        return {
          ...dataItem,
          name: ALL_DIGIMONS[dataItem!.id].name,
          icon: dataItem.id,
          directory: 'digimon_portraits',
          playerQuantity: playerCores
        }
      }

      return {
        ...dataItem,
        name: '',
        icon: '',
        directory: '',
        playerQuantity: 0
      }
    }) ?? []

  const closeModal = () => {
    setBaseDigimon(undefined)
    setComponents({})
  }

  const compose = () => {
    const digimonName = prompt(getTexts('COMPOSE_DIGIMON_NAME'))

    const updatedProfile = composeNewDigimon({
      baseDigimon: baseDigimon!,
      id: newDigimonId,
      name: digimonName || '',
      profile,
      components
    })

    if (!updatedProfile) {
      return
    }

    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setProfile(updatedProfile)
    navigate(ROUTES.COLLECTION.path)
  }

  const updateComponent = ({ dataItem, quantity }) => {
    const updatedComponents = { ...components }

    updatedComponents[dataItem.id] = (components[dataItem.id] || 0) + quantity

    let progress = 0

    for (let componentItem of Object.keys(updatedComponents)) {
      progress +=
        baseDigimon.compositionTemplate!.data!.find(
          (dataItem) => dataItem.id === componentItem
        )!.weight * updatedComponents[componentItem]
    }

    setProgress(progress)
    setComponents(updatedComponents)
  }

  return (
    <>
      <ul className="compose-digimon-template">
        {data?.map((dataItem) => (
          <li key={`${baseDigimon?.id}-compose-data-${dataItem.id}`}>
            <aside>
              <Icon
                src={`/${dataItem.directory}/${dataItem.icon}.jpg`}
                alt={`Data to compose ${baseDigimon?.name}`}
              />
            </aside>

            <section className="compose-digimon-template-core">
              <Typography as="span">
                {getTexts('COMPOSE_TEMPLATE_CORE')
                  .replace('[NAME]', dataItem.name)
                  .replace('[PERCENTAGE]', dataItem.weight)}
              </Typography>

              <Typography as="span">
                {getTexts('COMPOSE_TEMPLATE_PLAYER_QUANTITY').replace(
                  '[PLAYER_QUANTITY]',
                  dataItem.playerQuantity
                )}
              </Typography>
            </section>

            <main>
              <Button
                disabled={(components[dataItem.id] || 0) <= 0}
                onClick={() =>
                  updateComponent({
                    dataItem,
                    quantity: -1
                  })
                }
              >
                <FaMinus />
              </Button>

              <Typography>{components[dataItem.id] || 0}</Typography>

              <Button
                disabled={
                  (profile.cores[dataItem.id] || 0) -
                    (components[dataItem.id] || 0) <=
                    0 || progress >= 100
                }
                onClick={() =>
                  updateComponent({
                    dataItem,
                    quantity: 1
                  })
                }
              >
                <FaPlus />
              </Button>
            </main>
          </li>
        ))}
      </ul>

      <div className="card compose-progress">
        <Typography>Composing progress:</Typography>

        <ResourceBar maxValue={100} currentValue={progress} />
      </div>

      <div className="compose-digimon-actions">
        <Button onClick={closeModal} cancel>
          {getTexts('COMPOSE_TEMPLATE_CANCEL')}
        </Button>

        <Button onClick={compose} disabled={progress < 100}>
          {getTexts('COMPOSE_TEMPLATE_CTA')}
        </Button>
      </div>
    </>
  )
}
