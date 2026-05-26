import type { AvatarType } from '@/Types/Avatar.type'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/System/Portrait'

import './PlayerAvatar.style.scss'

export const PlayerAvatar = ({
  replaceAvatar
}: {
  replaceAvatar?: AvatarType
}) => {
  const profile = useProfileStore((state) => state.profile)

  const avatar = replaceAvatar ?? profile?.avatar

  return (
    <div className="player-avatar">
      <div className="avatar-content">
        {!avatar && (
          <Portrait
            src="/avatars/glitch.webp"
            alt={`${profile?.name} avatar`}
          />
        )}

        {!!avatar && (
          <div className="avatar-layers">
            <Portrait
              src={`/avatars/clothes/${avatar?.clothes}.webp`}
              alt={`${profile?.name} avatar clothes`}
            />

            <Portrait
              src={`/avatars/skins/${avatar?.skin}.webp`}
              alt={`${profile?.name} avatar skin`}
            />

            <Portrait
              src={`/avatars/expressions/${avatar?.expression}.webp`}
              alt={`${profile?.name} avatar expression`}
            />

            <Portrait
              src={`/avatars/eyes/${avatar?.expression}-${avatar?.eyes}.webp`}
              alt={`${profile?.name} avatar eyes`}
            />

            <Portrait
              src={`/avatars/hairs/${avatar?.hair}-${avatar?.hairColor}.webp`}
              alt={`${profile?.name} avatar hair`}
            />
          </div>
        )}
      </div>
    </div>
  )
}
