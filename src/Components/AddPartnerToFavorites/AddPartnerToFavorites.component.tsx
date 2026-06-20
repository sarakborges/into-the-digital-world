import { BiSolidStar, BiStar } from 'react-icons/bi'

import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { togglePartnerFavorite } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/DesignSystem/Button'

export const AddPartnerToFavorites = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[
    digivice.currentDetails!
  ] as PartnerDigimonType

  return (
    <Button
      disabled={!!scene}
      onClick={togglePartnerFavorite}
      style={!!partner.isFavorite ? 'cancel' : 'secondary'}
    >
      {!partner.isFavorite && <BiSolidStar />}
      {!!partner.isFavorite && <BiStar />}
    </Button>
  )
}
