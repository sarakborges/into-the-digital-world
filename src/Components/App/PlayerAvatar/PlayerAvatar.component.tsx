import type { AvatarType } from '@/Types/Avatar.type'

import { useProfile } from '@/Hooks/Profile.hook'

import { Portrait } from '@/Components/System/Portrait'

import './PlayerAvatar.style.scss'

export const PlayerAvatar = ({
  replaceAvatar
}: {
  replaceAvatar?: AvatarType
}) => {
  const { profile } = useProfile()
  const avatar = replaceAvatar ?? profile?.avatar

  if (!avatar) {
    return (
      <Portrait src="/avatars/glitch.jpg" alt={`${profile?.name} avatar`} />
    )
  }

  return (
    <div className="player-avatar">
      <Portrait
        src={`/avatars/clothes/${avatar?.clothes}.png`}
        alt={`${profile?.name} avatar clothes`}
      />

      <Portrait
        src={`/avatars/skins/${avatar?.skin}.png`}
        alt={`${profile?.name} avatar skin`}
      />

      <Portrait
        src={`/avatars/expressions/${avatar?.expression}.png`}
        alt={`${profile?.name} avatar expression`}
      />

      <Portrait
        src={`/avatars/eyes/${avatar?.expression}-${avatar?.eyes}.png`}
        alt={`${profile?.name} avatar eyes`}
      />

      <Portrait
        src={`/avatars/hairs/${avatar?.hair}-${avatar?.hairColor}.png`}
        alt={`${profile?.name} avatar hair`}
      />
    </div>
  )
}
