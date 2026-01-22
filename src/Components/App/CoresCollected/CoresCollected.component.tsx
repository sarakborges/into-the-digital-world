import { useContext } from 'react'

import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

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
      type: 'families',
      values: Object.values(DigimonFamilies)
        .map((familyItem) => ({
          ...familyItem,
          name: familyItem.name.split(' ').join('\n'),
          picture: familyItem.abbreviation
        }))
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    },

    {
      title: getTexts('CORES_COLLECTED_ATTRIBUTE_TITLE'),
      type: 'attributes',
      values: Object.values(DigimonAttributes)
        .map((attributeItem) => ({
          ...attributeItem,
          name: attributeItem.value,
          picture: attributeItem.id
        }))
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    }
  ]

  return (
    <>
      {cores.map((coreItem) => (
        <section key={`tamer-cores-${coreItem.title}`} className="tamer-cores">
          <Typography as="h2">{coreItem.title}</Typography>

          <main>
            {coreItem.values.map((coreValueItem) => (
              <div
                key={`tamer-cores-${coreItem.type}-item-${coreValueItem.id}`}
                className="tamer-cores-item"
              >
                <img
                  src={`./${coreItem.type}/${coreValueItem!.picture}.png`}
                  alt={`Digimon ${coreItem.type}: ${coreValueItem!.name}`}
                />

                <Typography>{coreValueItem.name}</Typography>

                <Typography as="span">
                  {profile.cores?.[coreItem.type]?.[coreValueItem.id] || 0}
                </Typography>
              </div>
            ))}
          </main>
        </section>
      ))}
    </>
  )
}
