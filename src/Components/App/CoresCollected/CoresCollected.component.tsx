import { useContext } from 'react'

import { DIGIMON_ATTRIBUTES } from '@/Consts/DigimonAttributes.const'
import { DIGIMON_FAMILIES } from '@/Consts/DigimonFamilies.const'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Icon } from '@/Components/System/Icon'

import './CoresCollected.style.scss'

export const CoresCollected = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const cores = [
    {
      title: getTexts('CORES_COLLECTED_FAMILY_TITLE'),
      values: Object.values(DIGIMON_FAMILIES)
        .map((familyItem) => {
          const profileCore = profile.cores.find(
            (coreItem) => coreItem.coreId === familyItem.id
          )

          return {
            ...familyItem,
            name: familyItem.name.split(' ').join('\n'),
            quantity: profileCore?.quantity
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    },

    {
      title: getTexts('CORES_COLLECTED_ATTRIBUTE_TITLE'),
      values: Object.values(DIGIMON_ATTRIBUTES)
        .map((attributeItem) => {
          const profileCore = profile.cores.find(
            (coreItem) => coreItem.coreId === attributeItem.id
          )

          return {
            ...attributeItem,
            quantity: profileCore?.quantity
          }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    }
  ]

  return (
    <>
      {cores.map((coreType) => (
        <section key={`tamer-cores-${coreType.title}`} className="tamer-cores">
          <Typography as="h2">{coreType.title}</Typography>

          <main>
            {coreType.values.map((coreItem) => (
              <div
                key={`tamer-cores-${coreItem.type}-item-${coreItem.id}`}
                className="tamer-cores-item"
              >
                <Icon
                  src={`/cores/${coreItem!.icon}.png`}
                  alt={`Digimon ${coreItem.type}: ${coreItem!.name}`}
                />

                <Typography>{coreItem.name}</Typography>
                <Typography as="span">{coreItem.quantity || 0}</Typography>
              </div>
            ))}
          </main>
        </section>
      ))}
    </>
  )
}
