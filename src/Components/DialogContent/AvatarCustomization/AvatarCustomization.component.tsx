import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language'
import {
  generateRandomAvatar,
  getAvatarOptionsText
} from '@/Helpers/Systems/Profile'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './AvatarCustomization.style.scss'

export const AvatarCustomization = () => {
  const { profile } = useProfileStore((state) => state)
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  useEffect(() => {
    if (!avatarCustomization || !!profile?.avatar) {
      return
    }

    setAvatarCustomization({
      ...avatarCustomization,
      avatar: generateRandomAvatar()
    })
  }, [])

  if (!profile) {
    return null
  }

  const avatarOptions = getAvatarOptionsText()

  const selectAvatarLayer = (layer: string) => {
    if (!avatarCustomization) {
      return
    }

    setAvatarCustomization({ ...avatarCustomization, layer })
  }

  return (
    <div className="avatar-customization">
      <main>
        <aside>
          <header>
            <Text>{getTexts('FASHION_CUSTOMIZATION_OPTIONS_TITLE')}</Text>
          </header>

          <main>
            {Object.keys(avatarOptions).map((option) => (
              <ShadowButton
                key={`customize-avatar-options-${option}`}
                onClick={() => selectAvatarLayer(option)}
              >
                {avatarOptions[option]}
              </ShadowButton>
            ))}
          </main>
        </aside>

        <main>
          <PlayerAvatar
            replaceAvatar={avatarCustomization?.avatar ?? profile.avatar}
          />
        </main>
      </main>
    </div>
  )
}
