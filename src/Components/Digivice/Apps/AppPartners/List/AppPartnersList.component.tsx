import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'
import { BiSolidStar } from 'react-icons/bi'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import {
  addToParty,
  removeFromParty,
  getPartnerGroups
} from '@/Helpers/Systems/Profile'
import { setCurrentDetails } from '@/Helpers/Systems/Digivice'
import { getTranslation } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { EncyclopediaHeader } from '@/Components/Digivice/Apps/EncyclopediaHeader'
import { PartnerDetails } from '@/Components/Digivice/Apps/AppPartners/Details'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

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

  const partners = getPartnerGroups(profile)

  return (
    <div className="partners-list">
      <EncyclopediaHeader />

      {Object.keys(partners).map((category) => (
        <div
          className="partners-list-category"
          key={`partners-list-partners-${category}`}
        >
          <Text>
            {getTranslation(
              `ENCYCLOPEDIA_CATEGORY_${category.toLocaleUpperCase()}`
            )}
          </Text>

          <div className="partners-list-list">
            {!!partners[category].length ? (
              partners[category].map((partner) => {
                const baseDigimon = AllDigimons[
                  partner.baseDigimon
                ] as BaseDigimonType

                return (
                  <div
                    className="partners-list-partner"
                    key={`partners-list-partner-${partner.id}`}
                  >
                    <aside className="partner-avatar">
                      <Portrait
                        alt={partner.name || baseDigimon?.name || ''}
                        src={`/${baseDigimon?.portrait}.webp`}
                      />
                    </aside>

                    <header className="partner-name">
                      <Text>{partner.name || baseDigimon?.name || ''}</Text>

                      {partner.name && <Text>{baseDigimon?.name}</Text>}
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
                )
              })
            ) : (
              <Text>{getTranslation('ENCYCLOPEDIA_NO_OTHERS')}</Text>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
