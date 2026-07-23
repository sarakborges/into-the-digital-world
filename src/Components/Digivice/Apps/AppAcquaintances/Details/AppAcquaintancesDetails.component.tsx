import { getNpcsByCategory } from '@/GameData/Registries/Npc.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppAcquaintances/Details/AppAcquaintancesDetails.style.scss'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader/CharacterHeader.component'

export const AppAcquaintancesDetails = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const npc = {
    ...getNpcsByCategory('appmon'),
    ...getNpcsByCategory('digimon'),
    ...getNpcsByCategory('general')
  }[digivice?.currentDetails]

  if (!npc) {
    return
  }

  return (
    <div className="npc-profile">
      <header className="npc-header">
        <CharacterHeader character={npc} lg />
      </header>

      <main>
        <section>
          <header>
            <Text>{getTexts('ACQUAINTANCES_FULL_PICTURE')}</Text>
          </header>

          <main>
            <Portrait alt={npc.name} src={`/${npc.fullImage}.webp`} />
          </main>
        </section>

        <section>
          <header>
            <Text>{getTexts('ACQUAINTANCES_DESCRIPTION')}</Text>
          </header>

          <main className="acquaintance-description">
            <Text as="p">{npc.description}</Text>
          </main>
        </section>
      </main>
    </div>
  )
}
