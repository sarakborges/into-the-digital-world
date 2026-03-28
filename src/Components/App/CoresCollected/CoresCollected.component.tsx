import { Fragment, useContext } from 'react'

import { DIGIMON_ATTRIBUTES } from '@/Consts/DigimonAttributes.const'
import { DIGIMON_FAMILIES } from '@/Consts/DigimonFamilies.const'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Icon } from '@/Components/System/Icon'

import './CoresCollected.style.scss'
import { ALL_DIGIMONS } from '@/GameData/Digimons'

export const CoresCollected = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const cores = [
    {
      title: getTexts('CORES_COLLECTED_ATTRIBUTE_TITLE'),
      values: Object.values(DIGIMON_ATTRIBUTES).map((attributeItem) => {
        const profileCore = profile.cores[attributeItem.id] || 0

        return {
          ...attributeItem,
          directory: 'cores',
          quantity: profileCore
        }
      })
    },

    {
      title: getTexts('CORES_COLLECTED_FAMILY_TITLE'),
      values: Object.values(DIGIMON_FAMILIES)
        .map((familyItem) => {
          const profileCore = profile.cores[familyItem.id] || 0

          return {
            ...familyItem,
            name: familyItem.name.split(' ').join('\n'),
            directory: 'cores',
            quantity: profileCore
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    },

    {
      title: getTexts('CORES_COLLECTED_DIGIMON_TITLE'),
      values: Object.keys(profile.cores)
        ?.filter(
          (coreItem) =>
            ![
              ...Object.keys(DIGIMON_FAMILIES),
              ...Object.keys(DIGIMON_ATTRIBUTES)
            ].includes(coreItem)
        )
        .map((coreItem) => {
          const profileCore = profile.cores[coreItem] || 0
          const digimon = ALL_DIGIMONS[coreItem]

          return {
            id: digimon.id,
            name: digimon.name,
            icon: digimon.id,
            directory: 'digimon_portraits',
            quantity: profileCore
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    }
  ]

  return (
    <div className="tamer-cores">
      <header>
        <Typography as="h1">{getTexts('DIGIVICE_TITLE')}</Typography>
        <Typography as="h2">{getTexts('DIGIVICE_SUBTITLE')}</Typography>
      </header>

      <main>
        {cores.map((type) => (
          <Fragment key={`tamer-cores-${type.title}`}>
            {!!type.values.length && (
              <section>
                <Typography as="h2">{type.title}</Typography>

                <main>
                  {type.values.map((coreItem) => (
                    <div
                      key={`tamer-cores-item-${coreItem.id}`}
                      className="tamer-cores-item"
                    >
                      <Icon
                        src={`/${coreItem.directory}/${coreItem!.icon}.jpg`}
                        alt={`${coreItem!.name} core`}
                      />

                      <Typography>{coreItem.name}</Typography>
                      <Typography as="span">
                        {coreItem.quantity || 0}
                      </Typography>
                    </div>
                  ))}
                </main>
              </section>
            )}
          </Fragment>
        ))}
      </main>
    </div>
  )
}
