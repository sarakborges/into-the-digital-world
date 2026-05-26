import { getTexts } from '@/Helpers/getTexts.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useDigivice } from '@/Hooks/Digivice.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './AcquintanceDetails.style.scss'

export const AcquintanceDetails = () => {
  const { digivice } = useDigivice()

  if (!digivice.currentDetails) {
    return
  }

  const npc = { ...AllNpcs.appmon, ...AllNpcs.digimon, ...AllNpcs.general }[
    digivice.currentDetails
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
            <Text>{getTexts('ACQUINTANCES_FULL_PICTURE')}</Text>
          </header>

          <main>
            <Portrait alt={npc.name} src={`/${npc.fullImage}.webp`} />
          </main>
        </section>

        <section>
          <header>
            <Text>{getTexts('ACQUINTANCES_DESCRIPTION')}</Text>
          </header>

          <main className="acquintance-description">
            <Text as="p">{npc.description}</Text>
          </main>
        </section>
      </main>
    </div>
  )
}
