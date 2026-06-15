import { FaPlus, FaTimes } from 'react-icons/fa'

import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveSession } from '@/Systems/Profile/saveSession.helper'

import { AllDigimons } from '@/GameData/Digimons'
import { AllItems } from '@/GameData/Items'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import './DigimonEquipments.style.scss'

export const DigimonEquipments = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[
    digivice.currentDetails
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  const openEquipDialog = (equipmentSlot) => {
    setScene({
      currentScene: 'equipment',
      currentStage: '001'
    })

    setDigivice({
      ...digivice,
      equipmentSlot
    })
  }

  const removeEquipement = ({
    digimonId,
    equipmentSlot
  }: {
    digimonId: number
    equipmentSlot: number
  }) => {
    profile.partnerDigimons[digimonId].equipments![equipmentSlot] = {
      equipmentId: undefined
    }

    setProfile(profile)
    saveSession({ key: 'profile', value: profile })
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
              .map((_, item) => (
                <div key={`digimon-${partner.id}-equipments-${item}`}>
                  <header>
                    <Text>Slot {item + 1}:</Text>

                    {!!partner.equipments?.[item]?.equipmentId && (
                      <Button
                        onClick={() =>
                          removeEquipement({
                            digimonId: partner.id,
                            equipmentSlot: item
                          })
                        }
                        disabled={!!scene}
                      >
                        <FaTimes />
                      </Button>
                    )}

                    {!partner.equipments?.[item]?.equipmentId && (
                      <Button
                        onClick={() => openEquipDialog(item)}
                        disabled={!!scene}
                      >
                        <FaPlus />
                      </Button>
                    )}
                  </header>

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
                    <Text>{getTexts('ENCYCLOPEDIA_EQUIPMENTS_NOITEMS')}</Text>
                  )}
                </div>
              ))}
          </>
        )}
      </main>
    </section>
  )
}
