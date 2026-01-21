import { useContext } from 'react'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { PartyDigimonCard } from '@/Components/App/PartyDigimonCard'

import './Home.style.scss'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { Portrait } from '@/Components/System/Portrait'

export const HomeTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const party = profile.party?.map((partyItem) =>
    profile.partners?.find((partnerItem) => partnerItem.id === partyItem)
  )

  DigimonFamilies
  DigimonAttributes

  return (
    <MenuWrapper>
      <main className="home-template">
        <section className="tamer-party">
          <Typography as="h2">Your current party:</Typography>

          <main className="tamer-party-digimons">
            {party?.map((partyItem) => (
              <PartyDigimonCard
                key={`partner-list-item-${partyItem?.id}`}
                digimonItem={partyItem!}
              />
            ))}
          </main>
        </section>

        <section className="tamer-cores">
          <Typography as="h2">Family cores collected</Typography>

          <main>
            {Object.values(DigimonFamilies)
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((digimonFamily) => (
                <div
                  key={`tamer-cores-family-item-${digimonFamily.id}`}
                  className="tamer-cores-item"
                >
                  <img
                    src={`./families/${digimonFamily!.abbreviation}.png`}
                    alt={`Digimon family: ${digimonFamily!.abbreviation}`}
                  />

                  <Typography>
                    {digimonFamily.name.split(' ').join('\n')}
                  </Typography>

                  <Typography as="span">
                    {profile.cores?.family?.[digimonFamily.id] || 0}
                  </Typography>
                </div>
              ))}
          </main>
        </section>

        <section className="tamer-cores">
          <Typography as="h2">Attribute cores collected</Typography>

          <main>
            {Object.values(DigimonAttributes)
              .sort((a, b) => (a.value > b.value ? 1 : -1))
              .map((digimonAttribute) => (
                <div
                  key={`tamer-cores-attribute-item-${digimonAttribute.id}`}
                  className="tamer-cores-item"
                >
                  <img
                    src={`./attributes/${digimonAttribute!.id}.png`}
                    alt={`Digimon attribute: ${digimonAttribute!.value}`}
                  />

                  <Typography>{digimonAttribute.value}</Typography>

                  <Typography as="span">
                    {profile.cores?.attribute?.[digimonAttribute.id] || 0}
                  </Typography>
                </div>
              ))}
          </main>
        </section>
      </main>
    </MenuWrapper>
  )
}
