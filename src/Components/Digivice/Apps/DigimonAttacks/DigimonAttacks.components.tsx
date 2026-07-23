import { getAttack } from '@/GameData/Registries/Attack.registry'

import { getTexts } from '@/Helpers/Language'
import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Digivice/Apps/DigimonAttacks/DigimonAttacks.style.scss'

export const DigimonAttacks = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const partner = getPartnerDigimon()
  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon || !partner) {
    return
  }

  return (
    <section className="digimon-attacks">
      <header>
        <Text>{getTexts('ENCYCLOPEDIA_ATTACKS')}</Text>
      </header>

      <main>
        {Object.keys(baseDigimon.attacks).map((attackId) => {
          const attack = getAttack(attackId)

          return (
            <div
              className="attack"
              key={`digimon-${partner.id}-attacks-${attackId}`}
            >
              <Text>
                {getTexts('ENCYCLOPEDIA_ATTACKS_DETAILS', {
                  '[NAME]': attack.name,
                  '[COOLDOWN]': String(attack.cooldown || 0)
                })}
              </Text>

              <Text as="p">{attack.description}</Text>
            </div>
          )
        })}
      </main>
    </section>
  )
}
