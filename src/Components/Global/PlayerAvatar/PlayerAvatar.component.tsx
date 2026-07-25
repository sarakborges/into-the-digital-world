import type { AvatarType } from '@/Types/Avatar.type'

import {
  getEyeAsset,
  getFullClothesColorAsset,
  getHairColorAsset,
  getSkinAsset
} from '@/Consts/Avatars.const'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import '@/Components/Global/PlayerAvatar/PlayerAvatar.style.scss'

export const PlayerAvatar = ({
  replaceAvatar
}: {
  replaceAvatar?: AvatarType
}) => {
  const { profile } = useProfileStore((state) => state)

  const avatar = replaceAvatar ?? profile?.avatar
  const characterName = profile?.name || 'Character'

  if (!avatar) {
    return (
      <div className="player-avatar">
        <div className="avatar-content">
          <Portrait src="/avatars/glitch.webp" alt={`${characterName} avatar`} />
        </div>
      </div>
    )
  }

  const fullClothes =
    avatar.clothes.mode === 'fullClothes'
      ? avatar.clothes.fullClothes
      : null

  return (
    <div className="player-avatar">
      <div className="avatar-content">
        <div className="avatar-layers">
          {!!fullClothes && (
            <Portrait
              src={`/avatars/clothes/${fullClothes.model}-${getFullClothesColorAsset(
                fullClothes.model,
                fullClothes.color
              )}.webp`}
              alt={`${characterName} avatar clothes`}
            />
          )}

          <Portrait
            src={`/avatars/skins/${getSkinAsset(avatar.skinColor)}.webp`}
            alt={`${characterName} avatar skin`}
          />

          <Portrait
            src={`/avatars/expressions/${avatar.expression}.webp`}
            alt={`${characterName} avatar expression`}
          />

          <Portrait
            src={`/avatars/eyes/${avatar.expression}-${getEyeAsset(
              avatar.eyeColor
            )}.webp`}
            alt={`${characterName} avatar eyes`}
          />

          <Portrait
            src={`/avatars/hairs/${avatar.hair.model}-${getHairColorAsset(
              avatar.hair.color
            )}.webp`}
            alt={`${characterName} avatar hair`}
          />
        </div>
      </div>
    </div>
  )
}
