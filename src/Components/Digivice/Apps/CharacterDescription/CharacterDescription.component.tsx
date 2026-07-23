import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getCurrentDigimon } from '@/Helpers/Systems/Digimon/getCurrentDigimon.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/CharacterDescription/CharacterDescription.style.scss'

export const CharacterDescription = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon) {
    return
  }

  return (
    <section className="character-description">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_DESCRIPTION')}</Text>
      </header>

      <main>
        <Text as="p">{baseDigimon.description}</Text>
      </main>
    </section>
  )
}
