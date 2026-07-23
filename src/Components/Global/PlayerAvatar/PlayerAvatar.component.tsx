import type { AvatarType } from '@/Types/Avatar.type'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import '@/Components/Global/PlayerAvatar/PlayerAvatar.style.scss'

export const PlayerAvatar = ({
  replaceAvatar
}: {
  replaceAvatar?: AvatarType
}) => {
  const { profile } = useProfileStore((state) => state)

  const avatar = replaceAvatar ?? profile?.avatar

  return (
    <div className="player-avatar">
      <div className="avatar-content">
        {!avatar && (
          <Portrait
            src="/avatars/glitch.webp"
            alt={`${profile?.name || 'Character'} avatar`}
          />
        )}

        {!!avatar && (
          <div className="avatar-layers">
            <Portrait
              src={`/avatars/clothes/${avatar?.clothes}.webp`}
              alt={`${profile?.name || 'Character'} avatar clothes`}
            />

            <Portrait
              src={`/avatars/skins/${avatar?.skin}.webp`}
              alt={`${profile?.name || 'Character'} avatar skin`}
            />

            <Portrait
              src={`/avatars/expressions/${avatar?.expression}.webp`}
              alt={`${profile?.name || 'Character'} avatar expression`}
            />

            <Portrait
              src={`/avatars/eyes/${avatar?.expression}-${avatar?.eyes}.webp`}
              alt={`${profile?.name || 'Character'} avatar eyes`}
            />

            <Portrait
              src={`/avatars/hairs/${avatar?.hair}-${avatar?.hairColor}.webp`}
              alt={`${profile?.name || 'Character'} avatar hair`}
            />
          </div>
        )}
      </div>
    </div>
  )
}
