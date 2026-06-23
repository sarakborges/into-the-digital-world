import { BiSolidStar } from 'react-icons/bi'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'

import { getTexts } from '@/Helpers/Language'
import { setCurrentDetails } from '@/Helpers/Systems/Digivice'
import { addToParty, removeFromParty } from '@/Helpers/Systems/Profile'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { Portrait } from '@/Components/DesignSystem/Portrait'

import { PartnerDetails } from '@/Components/Digivice/Apps/AppPartners/Details'
import { EncyclopediaHeader } from '@/Components/Digivice/Apps/EncyclopediaHeader'

import './AppPartnersList.style.scss'

export const AppPartnersList = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice || !profile) {
    return
  }

  if (!!digivice?.currentDetails) {
    return <PartnerDetails />
  }

  const partners = {
    inParty: profile.party.map((digimon) => ({
      ...profile.partnerDigimons[digimon],
      baseDigimon: AllDigimons[profile.partnerDigimons[digimon].baseDigimon]
    })),

    others: Object.values(profile.partnerDigimons)
      .filter((partner) => !profile.party.includes(partner.id))
      .map((partner) => ({
        ...partner,
        baseDigimon: AllDigimons[partner.baseDigimon]
      }))
  }

  return (
    <div className="partners-list">
      <EncyclopediaHeader />

      {Object.keys(partners).map((category) => (
        <div
          className="partners-list-category"
          key={`partners-list-partners-${category}`}
        >
          <Text>
            {getTexts(`ENCYCLOPEDIA_CATEGORY_${category.toLocaleUpperCase()}`)}
          </Text>

          <div className="partners-list-list">
            {!!partners[category].length ? (
              partners[category].map((partner) => (
                <div
                  className="partners-list-partner"
                  key={`partners-list-partner-${partner.id}`}
                >
                  <aside className="partner-avatar">
                    <Portrait
                      alt={partner.name || partner.baseDigimon.name}
                      src={`/${partner.baseDigimon.portrait}.webp`}
                    />
                  </aside>

                  <header className="partner-name">
                    <Text>{partner.name || partner.baseDigimon.name}</Text>

                    {partner.name && <Text>{partner.baseDigimon.name}</Text>}
                  </header>

                  <aside>
                    {!!partner.isFavorite && (
                      <Text>
                        <BiSolidStar />
                      </Text>
                    )}
                  </aside>

                  <footer>
                    <Button
                      disabled={!!scene}
                      style="secondary"
                      onClick={() => setCurrentDetails(partner.id)}
                    >
                      <TbListDetails />
                    </Button>

                    {category === 'inParty' && (
                      <Button
                        disabled={!!scene || profile.party.length < 2}
                        style="secondary"
                        onClick={() => removeFromParty(partner.id)}
                      >
                        <BsArrowDown />
                      </Button>
                    )}

                    {category === 'others' && (
                      <Button
                        disabled={!!scene || profile.party.length > 3}
                        style="secondary"
                        onClick={() => addToParty(partner.id)}
                      >
                        <BsArrowUp />
                      </Button>
                    )}
                  </footer>
                </div>
              ))
            ) : (
              <Text>{getTexts('ENCYCLOPEDIA_NO_OTHERS')}</Text>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
