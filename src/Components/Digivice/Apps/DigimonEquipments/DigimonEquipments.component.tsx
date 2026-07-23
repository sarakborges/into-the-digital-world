import { findItem } from '@/GameData/Registries/Item.registry'

import { getTexts } from '@/Helpers/Language'
import { getCurrentDigimon, getPartnerDigimon } from '@/Helpers/Systems/Digimon'
import { updateEquipment } from '@/Helpers/Systems/Profile'
import { openEquipDialog } from '@/Helpers/Systems/Scenes'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Digivice/Apps/DigimonEquipments/DigimonEquipments.style.scss'

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
        <Text>{getTexts('ENCYCLOPEDIA_EQUIPMENTS')}</Text>
      </header>

      <main className="equipments">
        {!!baseDigimon.equipmentsSlots && (
          <>
            {new Array(baseDigimon.equipmentsSlots)
              .fill(null)
              .map((_, equipmentSlot) => {
                const equipmentId =
                  partner.equipments?.[equipmentSlot]?.equipmentId
                const equipment = equipmentId
                  ? findItem(equipmentId)
                  : undefined

                return (
                  <div
                    key={`digimon-${partner.id}-equipments-${equipmentSlot}`}
                  >
                    {!!equipment && (
                      <>
                        <Portrait
                          alt={equipment.name}
                          src={`/${equipment.portrait}.webp`}
                        />

                        <Text>{equipment.name}</Text>
                      </>
                    )}

                    {!equipment && (
                      <Text>{getTexts('ENCYCLOPEDIA_EQUIPMENTS_NOITEMS')}</Text>
                    )}

                    <footer>
                      {!!equipment && (
                        <Button
                          onClick={() =>
                            updateEquipment({
                              digimonId: partner.id,
                              equipmentSlot,
                              equipmentId: undefined
                            })
                          }
                          style="secondary"
                          disabled={!!scene}
                        >
                          Remove
                        </Button>
                      )}

                      {!equipment && (
                        <Button
                          onClick={() => openEquipDialog(equipmentSlot)}
                          style="secondary"
                          disabled={!!scene}
                        >
                          Equip
                        </Button>
                      )}
                    </footer>
                  </div>
                )
              })}
          </>
        )}
      </main>
    </section>
  )
}
