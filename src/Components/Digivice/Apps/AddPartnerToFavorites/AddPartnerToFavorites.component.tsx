import { BiSolidStar, BiStar } from 'react-icons/bi'

import { togglePartnerFavorite } from '@/Helpers/Systems/Profile/togglePartnerFavorite.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const AddPartnerToFavorites = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!digivice?.currentDetails || !profile) {
    return
  }

  const partner = profile.partnerDigimons[digivice.currentDetails]

  if (!partner) {
    return
  }

  return (
    <Button
      disabled={!!scene}
      onClick={togglePartnerFavorite}
      style={partner.isFavorite ? 'cancel' : 'secondary'}
    >
      {!partner.isFavorite && <BiSolidStar />}
      {!!partner.isFavorite && <BiStar />}
    </Button>
  )
}
