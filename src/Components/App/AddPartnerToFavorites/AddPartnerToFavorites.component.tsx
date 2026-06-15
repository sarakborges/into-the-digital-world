import { BiSolidStar, BiStar } from 'react-icons/bi'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/System/Button'

export const AddPartnerToFavorites = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[
    digivice.currentDetails!
  ] as PartnerDigimonType
  const baseDigimon = AllDigimons[partner.baseDigimon] as BaseDigimonType

  const togglePartnerFavorite = () => {
    const currentDigimon = {
      ...profile!.partnerDigimons[digivice?.currentDetails!]
    }

    setProfile({
      ...profile!,

      partnerDigimons: {
        ...profile!.partnerDigimons,

        [digivice.currentDetails as string]: {
          ...currentDigimon,
          isFavorite: !currentDigimon.isFavorite
        }
      }
    })
  }

  return (
    <Button
      disabled={!!scene}
      onClick={togglePartnerFavorite}
      cancel={!!partner.isFavorite}
    >
      {!partner.isFavorite && <BiSolidStar />}
      {!!partner.isFavorite && <BiStar />}
    </Button>
  )
}
