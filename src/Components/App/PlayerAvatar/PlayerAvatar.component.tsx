import { useProfile } from '@/Hooks/Profile.hook'

import {
  AVATAR_CLOTHES,
  AVATAR_EXPRESSIONS,
  AVATAR_EYES,
  AVATAR_HAIR_COLORS,
  AVATAR_HAIRS,
  AVATAR_SKINS
} from '@/Consts/Avatars.const'

import { Portrait } from '@/Components/System/Portrait'

import './PlayerAvatar.style.scss'

export const PlayerAvatar = () => {
  const { profile } = useProfile()

  const clothes =
    AVATAR_CLOTHES[Math.floor(Math.random() * AVATAR_CLOTHES.length)]
  const eyes = AVATAR_EYES[Math.floor(Math.random() * AVATAR_EYES.length)]
  const expression =
    AVATAR_EXPRESSIONS[Math.floor(Math.random() * AVATAR_EXPRESSIONS.length)]
  const hairColor =
    AVATAR_HAIR_COLORS[Math.floor(Math.random() * AVATAR_HAIR_COLORS.length)]
  const hair = AVATAR_HAIRS[Math.floor(Math.random() * AVATAR_HAIRS.length)]
  const skin = AVATAR_SKINS[Math.floor(Math.random() * AVATAR_SKINS.length)]

  return (
    <div className="player-avatar">
      <Portrait
        src={`/avatars/clothes/${clothes}.png`}
        alt={`${profile?.name} avatar clothes`}
      />

      <Portrait
        src={`/avatars/skins/${skin}.png`}
        alt={`${profile?.name} avatar skin`}
      />

      <Portrait
        src={`/avatars/expressions/${expression}.png`}
        alt={`${profile?.name} avatar expression`}
      />

      <Portrait
        src={`/avatars/eyes/${expression}-${eyes}.png`}
        alt={`${profile?.name} avatar eyes`}
      />

      <Portrait
        src={`/avatars/hairs/${hair}-${hairColor}.png`}
        alt={`${profile?.name} avatar hair`}
      />
    </div>
  )
}
