import { BiSolidStar } from 'react-icons/bi'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { PartnerDetails } from '@/Components/App/PartnerDetails'

import './PartnersList.style.scss'

export const PartnersList = () => {
  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const digivice = useDigiviceStore((state) => state.digivice)
  const setDigivice = useDigiviceStore((state) => state.setDigivice)
  const scene = useSceneStore((state) => state.scene)

  if (!!digivice?.currentDetails) {
    return <PartnerDetails />
  }

  const allPartners = Object.values(profile?.partnerDigimons!).map(
    (partner) => ({
      ...partner,
      baseDigimon: AllDigimons[partner.baseDigimon]
    })
  )

  const partners = {
    inParty: allPartners.filter(
      (partner) => !!profile?.currentParty.includes(partner.id)
    ),

    others: allPartners.filter(
      (partner) => !profile?.currentParty.includes(partner.id)
    )
  }

  const removeFromParty = (id: number) => {
    setProfile({
      ...profile!,
      currentParty:
        profile!.currentParty.filter((partner) => partner !== id) ?? []
    })
  }

  const addToParty = (id: number) => {
    setProfile({
      ...profile!,
      currentParty: [...profile!.currentParty, id]
    })
  }

  const seeDetails = (id: number) => {
    setDigivice({
      ...digivice!,
      currentDetails: id
    })
  }

  return (
    <div className="partners-list">
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
                      src={`/digimon_portraits/${partner.baseDigimon.id.toLocaleUpperCase()}.webp`}
                    />
                  </aside>

                  <header className="partner-name">
                    <Text>{partner?.name || partner?.baseDigimon?.name}</Text>

                    {partner?.name && <Text>{partner?.baseDigimon?.name}</Text>}
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
                      onClick={() => seeDetails(partner.id)}
                    >
                      <TbListDetails />
                    </Button>

                    {category === 'inParty' && (
                      <Button
                        disabled={!!scene || profile!.currentParty.length < 2}
                        onClick={() => removeFromParty(partner.id)}
                      >
                        <BsArrowDown />
                      </Button>
                    )}

                    {category === 'others' && (
                      <Button
                        disabled={!!scene || profile!.currentParty.length > 2}
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
