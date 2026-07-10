import { getTexts } from '@/Helpers/Language'
import { getCurrentDigimon } from '@/Helpers/Systems/Digimon'

import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './DigimonAttribute.style.scss'

export const DigimonAttribute = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon || !baseDigimon.attribute) {
    return
  }

  return (
    <section className="digimon-attribute">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_ATTRIBUTE')}</Text>
      </header>

      <main className="attribute">
        <div>
          <Portrait
            alt={DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}
            src={`/attributes/${baseDigimon.attribute}.webp`}
          />

          <Text>{DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}</Text>
        </div>
      </main>
    </section>
  )
}
