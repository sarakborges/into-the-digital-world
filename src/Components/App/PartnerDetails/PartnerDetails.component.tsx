import { BiPencil, BiSolidStar, BiStar } from 'react-icons/bi'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { DIGIMON_STATS } from '@/Consts/Stats.const'
import { DIGIMON_FAMILIES } from '@/Consts/Families.const'
import { DIGIMON_ATTRIBUTES } from '@/Consts/Attributes.const'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigivice } from '@/Hooks/Digivice.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'
import { getTexts } from '@/Helpers/getTexts.helper'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './PartnerDetails.style.scss'

export const PartnerDetails = () => {
  const setProfile = useProfileStore((state) => state.setProfile)
  const profile = useProfileStore((state) => state.profile)

  const { digivice } = useDigivice()
  const { scene, setScene } = useScene()

  if (!digivice.currentDetails) {
    return
  }

  const partner = profile!.partnerDigimons[
    digivice.currentDetails
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
      ...profile!.partnerDigimons[digivice.currentDetails!]
    }

    setProfile({
      ...profile!,

      partnerDigimons: {
        ...profile!.partnerDigimons,

        [digivice.currentDetails!]: {
          ...currentDigimon,
          isFavorite: !currentDigimon.isFavorite
        }
      }
    })
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
            {baseDigimon.families.map((family) => (
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

        <section className="partner-stats">
          {DIGIMON_STATS.map((stat) => (
            <div className="stat" key={`digimon-${partner.id}-stats-${stat}`}>
              <header>
                <Text>
                  {getTexts(`DIGIMON_STATS_${stat.toLocaleUpperCase()}_NAME`)}:
                </Text>

                <Text>{baseDigimon.stats[stat]} / 200</Text>
              </header>

              <div className="stat-value">
                <div className="stat-bar">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(baseDigimon.stats[stat] / 200) * 100}%`
                    }}
                  ></div>
                </div>
              </div>

              <Text>
                {getTexts(
                  `DIGIMON_STATS_${stat.toLocaleUpperCase()}_DESCRIPTION`
                )}
              </Text>
            </div>
          ))}

          <div className="stat stat-bond">
            <header>
              <Text>{getTexts(`DIGIMON_STATS_BON_NAME`)}:</Text>

              <Text>{partner.bond} / 100</Text>
            </header>

            <div className="stat-value">
              <div className="stat-bar">
                <div
                  className="bar-fill"
                  style={{
                    width: `${partner.bond - 100 > 0 ? partner.bond - 100 : 0}%`
                  }}
                ></div>
              </div>

              <div className="stat-bar">
                <div
                  className="bar-fill"
                  style={{ width: `${partner.bond}%` }}
                ></div>
              </div>
            </div>

            <Text>{getTexts(`DIGIMON_STATS_BON_DESCRIPTION`)}</Text>
          </div>
        </section>
      </main>
    </div>
  )
}
