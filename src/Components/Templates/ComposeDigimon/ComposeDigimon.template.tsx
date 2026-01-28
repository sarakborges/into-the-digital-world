import { useContext } from 'react'
import { useParams } from 'react-router'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import {
  AllCores,
  DigimonAttributes,
  DigimonFamilies
} from '@/Types/Cores.type'

import { COMPOSABLE_DIGIMONS } from '@/GameData/Digimons'

import { Portrait } from '@/Components/System/Portrait'
import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { ResourceBar } from '@/Components/App/ResourceBar'

import './ComposeDigimon.style.scss'

export const ComposeDigimonTemplate = () => {
  const profileContext = useContext(ProfileContext)
  const { id } = useParams()

  if (!profileContext || !id) {
    return
  }

  const upperId = id.toLocaleUpperCase()

  const { profile } = profileContext

  const digimon = COMPOSABLE_DIGIMONS[upperId]
  const digimonName = digimon.name
  const hasDigimonBeenSeen =
    profile.seenDigimon?.includes(upperId) && digimon.id === upperId

  if (!hasDigimonBeenSeen) {
    return
  }

  for (let coreItem in digimon.composeRecipe.cores) {
    const core = digimon.composeRecipe.cores[coreItem]
    const profileCore = profile.cores.find(
      (profileCoreItem) => profileCoreItem.coreId === core.id
    )

    core.baseCore = AllCores[core.id]
    core.profileQuantity = profileCore?.quantity || 0
  }

  return (
    <MenuWrapper>
      <main className="compose-digimon-template">
        <header className="compose-digimon-header">
          <Typography as="h1">
            {getTexts('COMPOSE_DIGIMON_TITLE').replace(':name', digimonName)}
          </Typography>

          <Typography as="h2">
            {getTexts('COMPOSE_DIGIMON_SUBTITLE').replace(':name', digimonName)}
          </Typography>
        </header>

        <main>
          <Portrait src={`/digimons/${digimon.id}.jpg`} alt={digimonName} />

          <section>
            <ul>
              {digimon.composeRecipe.cores?.map((coreItem) => (
                <li>
                  <img src={`/cores/${coreItem.baseCore.icon}.png`} />

                  <section>
                    <Typography>
                      <>{coreItem.baseCore.name}</>
                      <> core</>
                    </Typography>

                    <ResourceBar
                      currentValue={coreItem.profileQuantity}
                      maxValue={coreItem.quantity}
                      type="exp"
                    />
                  </section>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </main>
    </MenuWrapper>
  )
}
