import { BiSolidStar } from 'react-icons/bi'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'
import { addToParty } from '@/Helpers/Systems/Profile/addToParty.helper'
import { getPartnerGroups } from '@/Helpers/Systems/Profile/getPartnerGroups.helper'
import { removeFromParty } from '@/Helpers/Systems/Profile/removeFromParty.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { PartnerDetails } from '@/Components/Digivice/Apps/AppPartners/Details/PartnerDetails.component'
import '@/Components/Digivice/Apps/AppPartners/List/AppPartnersList.style.scss'
import { EncyclopediaHeader } from '@/Components/Digivice/Apps/EncyclopediaHeader/EncyclopediaHeader.component'

export const AppPartnersList = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice || !profile) {
    return
  }

  if (digivice.currentDetails) {
    return <PartnerDetails />
  }

  const partners = getPartnerGroups()

  return (
    <div className="partners-list">
      <EncyclopediaHeader />

      {Object.entries(partners).map(([category, partnerList]) => (
        <div
          className="partners-list-category"
          key={`partners-list-partners-${category}`}
        >
          <Text>
            {getTexts(`ENCYCLOPEDIA_CATEGORY_${category.toLocaleUpperCase()}`)}
          </Text>

          <div className="partners-list-list">
            {partnerList.length ? (
              partnerList.map((partner) => {
                const baseDigimon = partner.baseDigimon

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
                        variant="secondary"
                        onClick={() =>
                          updateDigivice({ currentDetails: partner.id })
                        }
                      >
                        <TbListDetails />
                      </Button>

                      {category === 'inParty' && (
                        <Button
                          disabled={!!scene || profile.party.length < 2}
                          variant="secondary"
                          onClick={() => removeFromParty(partner.id)}
                        >
                          <BsArrowDown />
                        </Button>
                      )}

                      {category === 'others' && (
                        <Button
                          disabled={!!scene || profile.party.length > 3}
                          variant="secondary"
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
              <Text>{getTexts('ENCYCLOPEDIA_NO_OTHERS')}</Text>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
