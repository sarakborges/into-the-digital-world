import { FaPlus, FaTimes } from 'react-icons/fa'
import { BiPencil, BiSolidStar, BiStar } from 'react-icons/bi'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { DIGIMON_STATS } from '@/Consts/Stats.const'
import { DIGIMON_FAMILIES } from '@/Consts/Families.const'
import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

import { saveSession } from '@/Helpers/saveSession.helper'

import { AllDigimons } from '@/GameData/Digimons'
import { AllAttacks } from '@/GameData/Attacks'
import { AllItems } from '@/GameData/Items'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'
import { getTexts } from '@/Helpers/getTexts.helper'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './PartnerDetails.style.scss'

export const PartnerDetails = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice?.currentDetails) {
    return
  }

  const partner = profile!.partnerDigimons[
    digivice?.currentDetails
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  const openRenamePartner = () => {
    setScene({
      currentScene: 'renamePartner',
      currentStage: '001'
    })
  }

  const togglePartnerFavorite = () => {
    const currentDigimon = {
      ...profile!.partnerDigimons[digivice?.currentDetails!]
    }

    setProfile({
      ...profile!,

      partnerDigimons: {
        ...profile!.partnerDigimons,

        [digivice?.currentDetails!]: {
          ...currentDigimon,
          isFavorite: !currentDigimon.isFavorite
        }
      }
    })
  }

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
    profile!.partnerDigimons[digimonId].equipments![equipmentSlot] = {
      equipmentId: undefined
    }

    setProfile(profile)
    saveSession({ key: 'profile', value: profile })
  }

  const getExtraStats = (stat: string) => {
    const { profile } = useProfileStore.getState()
    const partner = profile!.partnerDigimons[digivice!.currentDetails!]

    const equipments = partner.equipments

    const equipmentsBoostingStat = Object.values(equipments ?? {})
      .filter((item) =>
        Object.keys(
          AllItems[item!.equipmentId!]?.equipmentBonuses?.stats ?? {}
        ).includes(stat)
      )
      .map((item) => AllItems[item!.equipmentId!].equipmentBonuses?.stats)

    return equipmentsBoostingStat.reduce((acc, cur) => {
      if (cur![stat].type === 'fixed') {
        return acc + cur![stat].amount
      }

      return 0
    }, 0)
  }

  return (
    <div className="partner-details">
      <header className="partner-header">
        <CharacterHeader
          character={{ ...baseDigimon, name: partner.name || baseDigimon.name }}
          lg
        >
          <>{!!partner.name && <Text>{baseDigimon.name}</Text>}</>
        </CharacterHeader>

        <div className="partner-actions">
          <Button disabled={!!scene} onClick={openRenamePartner}>
            <BiPencil />
          </Button>

          <Button
            disabled={!!scene}
            onClick={togglePartnerFavorite}
            cancel={!!partner.isFavorite}
          >
            {!partner.isFavorite && <BiSolidStar />}
            {!!partner.isFavorite && <BiStar />}
          </Button>
        </div>
      </header>

      <main>
        <section>
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_FULL_PICTURE')}</Text>
          </header>

          <main>
            <Portrait
              alt={baseDigimon.name}
              src={`/${baseDigimon.fullImage}.webp`}
            />
          </main>
        </section>

        <section>
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_DESCRIPTION')}</Text>
          </header>

          <main className="partner-description">
            <Text as="p">{baseDigimon.description}</Text>
          </main>
        </section>

        <section>
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_ATTRIBUTE')}</Text>
          </header>

          <main className="partner-families">
            <div>
              <Portrait
                alt={DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}
                src={`/attributes/${baseDigimon.attribute}.webp`}
              />

              <Text>{DIGIMON_ATTRIBUTES[baseDigimon.attribute].name}</Text>
            </div>
          </main>
        </section>

        <section>
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_FAMILIES')}</Text>
          </header>

          <main className="partner-families">
            {Object.keys(baseDigimon.families).map((family) => (
              <div key={`digimon-${partner.id}-families-${family}`}>
                <Portrait
                  alt={DIGIMON_FAMILIES[family].name}
                  src={`/families/${family}.webp`}
                />

                <Text>{DIGIMON_FAMILIES[family].name}</Text>
              </div>
            ))}
          </main>
        </section>

        <section>
          <header>
            <Text>Equipments</Text>
          </header>

          <main className="partner-equipments">
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
                              AllItems[partner.equipments?.[item].equipmentId]
                                .name
                            }
                            src={`/${
                              AllItems[partner.equipments?.[item].equipmentId]
                                .portrait
                            }.webp`}
                          />

                          <Text>
                            {
                              AllItems[partner.equipments?.[item].equipmentId]
                                .name
                            }
                          </Text>
                        </>
                      )}

                      {!partner.equipments?.[item]?.equipmentId && (
                        <Text>No item in this slot.</Text>
                      )}
                    </div>
                  ))}
              </>
            )}
          </main>
        </section>

        <section className="partner-stats">
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_STATS')}</Text>
          </header>

          <main>
            {DIGIMON_STATS.map((stat) => (
              <div className="stat" key={`digimon-${partner.id}-stats-${stat}`}>
                <Text>{stat.toLocaleUpperCase()}</Text>

                <Text>
                  <>{baseDigimon.stats[stat]}</>
                  <> + </>
                  <>{getExtraStats(stat)}</>
                </Text>
              </div>
            ))}
          </main>
        </section>

        <section className="partner-attacks">
          <header>
            <Text>{getTexts('ENCYCLOPEDIA_ATTACKS')}</Text>
          </header>

          <main>
            {Object.keys(baseDigimon.attacks).map((attack) => (
              <div
                className="attack"
                key={`digimon-${partner.id}-attacks-${attack}`}
              >
                <Text>
                  <>{AllAttacks[attack].name}</>
                  <> - Cooldown: </>
                  <>{AllAttacks[attack].cooldown || 0}</>
                  <> turns</>
                </Text>

                <Text as="p">{AllAttacks[attack].description}</Text>
              </div>
            ))}
          </main>
        </section>
      </main>
    </div>
  )
}
