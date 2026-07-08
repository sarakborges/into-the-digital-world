import { AllItems } from '@/GameData/Items'

import { getTranslation } from '@/Helpers/Language'
import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'
import { updateEquipement } from '@/Helpers/Systems/Profile'
import { openEquipDialog } from '@/Helpers/Systems/Scenes'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './DigimonEquipments.style.scss'

export const DigimonEquipments = () => {
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const partner = getPartnerDigimon()
  const baseDigimon = getCurrentDigimon()

  if (!baseDigimon || !partner) {
    return
  }

  return (
    <section className="digimon-equipments">
      <header>
        <Text>{getTranslation('ENCYCLOPEDIA_EQUIPMENTS')}</Text>
      </header>

      <main className="equipments">
        {!!baseDigimon.equipmentsSlots && (
          <>
            {new Array(baseDigimon.equipmentsSlots)
              .fill(null)
              .map((_, item) => (
                <div key={`digimon-${partner.id}-equipments-${item}`}>
                  {!!partner.equipments?.[item]?.equipmentId && (
                    <>
                      <Portrait
                        alt={
                          AllItems[partner.equipments?.[item].equipmentId].name
                        }
                        src={`/${
                          AllItems[partner.equipments?.[item].equipmentId]
                            .portrait
                        }.webp`}
                      />

                      <Text>
                        {AllItems[partner.equipments?.[item].equipmentId].name}
                      </Text>
                    </>
                  )}

                  {!partner.equipments?.[item]?.equipmentId && (
                    <Text>
                      {getTranslation('ENCYCLOPEDIA_EQUIPMENTS_NOITEMS')}
                    </Text>
                  )}

                  <footer>
                    {!!partner.equipments?.[item]?.equipmentId && (
                      <Button
                        onClick={() =>
                          updateEquipement({
                            digimonId: partner.id,
                            equipmentSlot: item,
                            equipmentId: undefined
                          })
                        }
                        style="secondary"
                        disabled={!!scene}
                      >
                        Remove
                      </Button>
                    )}

                    {!partner.equipments?.[item]?.equipmentId && (
                      <Button
                        onClick={() => openEquipDialog(item)}
                        style="secondary"
                        disabled={!!scene}
                      >
                        Equip
                      </Button>
                    )}
                  </footer>
                </div>
              ))}
          </>
        )}
      </main>
    </section>
  )
}
