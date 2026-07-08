import { getTranslation } from '@/Helpers/Language'
import { getCurrentDigimon } from '@/Helpers/Systems/Digimon'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text'

import './CharacterDescription.style.scss'

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
        <Text>{getTranslation('ENCYCLOPEDIA_DESCRIPTION')}</Text>
      </header>

      <main>
        <Text as="p">{baseDigimon.description}</Text>
      </main>
    </section>
  )
}
