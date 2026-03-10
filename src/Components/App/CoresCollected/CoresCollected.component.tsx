import { useContext } from 'react'

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
        const profileCore = profile.cores?.find?.(
          (coreItem) => coreItem.id === attributeItem.id
        )

        return {
          ...attributeItem,
          directory: 'cores',
          quantity: profileCore?.quantity || 0
        }
      })
    },

    {
      title: getTexts('CORES_COLLECTED_FAMILY_TITLE'),
      values: Object.values(DIGIMON_FAMILIES)
        .map((familyItem) => {
          const profileCore = profile.cores?.find?.(
            (coreItem) => coreItem.id === familyItem.id
          )

          return {
            ...familyItem,
            name: familyItem.name.split(' ').join('\n'),
            directory: 'cores',
            quantity: profileCore?.quantity || 0
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    },

    {
      title: getTexts('CORES_COLLECTED_DIGIMON_TITLE'),
      values: profile.cores
        ?.filter((coreItem) => coreItem.type === 'digimon')
        .map((coreItem) => {
          const profileCore = ALL_DIGIMONS[coreItem.id]

          return {
            ...coreItem,
            name: profileCore.name,
            icon: profileCore.id,
            directory: 'digimon_portraits',
            quantity: coreItem?.quantity || 0
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
          <section key={`tamer-cores-${type.title}`}>
            <Typography as="h2">{type.title}</Typography>

            <main>
              {type.values.map((coreItem) => (
                <div
                  key={`tamer-cores-${coreItem.type}-item-${coreItem.id}`}
                  className="tamer-cores-item"
                >
                  <Icon
                    src={`/${coreItem.directory}/${coreItem!.icon}.jpg`}
                    alt={`${coreItem!.name} core`}
                  />

                  <Typography>{coreItem.name}</Typography>
                  <Typography as="span">{coreItem.quantity || 0}</Typography>
                </div>
              ))}
            </main>
          </section>
        ))}
      </main>
    </div>
  )
}
