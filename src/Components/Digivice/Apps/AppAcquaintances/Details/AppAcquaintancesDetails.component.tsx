import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

import './AppAcquaintancesDetails.style.scss'

export const AppAcquaintancesDetails = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const npc = { ...AllNpcs.appmon, ...AllNpcs.digimon, ...AllNpcs.general }[
    digivice?.currentDetails
  ]!

  return (
    <div className="npc-profile">
      <header className="npc-header">
        <CharacterHeader character={npc} lg>
          <>{!!npc.title && <Text>{getTexts(npc.title)}</Text>}</>
        </CharacterHeader>
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
