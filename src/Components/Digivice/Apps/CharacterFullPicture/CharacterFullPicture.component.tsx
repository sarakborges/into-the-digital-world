import { getTranslation } from '@/Helpers/Language'
import { getCurrentDigimon } from '@/Helpers/Systems/Digimon'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './CharacterFullPicture.style.scss'

export const CharacterFullPicture = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon) {
    return
  }

  return (
    <section className="character-full-picture">
      <header>
        <Text>{getTranslation('ENCYCLOPEDIA_FULL_PICTURE')}</Text>
      </header>

      <main>
        <Portrait
          alt={baseDigimon.name}
          src={`/${baseDigimon.fullImage}.webp`}
        />
      </main>
    </section>
  )
}
