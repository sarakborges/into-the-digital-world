import { FaPaintBrush } from 'react-icons/fa'

import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { generateRandomAvatar } from '@/Helpers/Systems/Profile/generateRandomAvatar.helper'
import { getAvatarOptionsText } from '@/Helpers/Systems/Profile/getAvatarOptionsText.helper'

import { AVATAR_CUSTOMIZATION_LAYERS } from '@/Consts/Avatars.const'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppAvatarCustomization/App/AppAvatarCustomization.style.scss'
import { AvatarCustomizationOptions } from '@/Components/Digivice/Apps/AppAvatarCustomization/Options/AvatarCustomizationOptions.component'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

export const AppAvatarCustomization = () => {
  const { profile } = useProfileStore((state) => state)
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  const options = getAvatarOptionsText()

  useEffect(() => {
    const currentProfile = useProfileStore.getState().profile
    const {
      avatarCustomization: currentAvatarCustomization,
      setAvatarCustomization: initializeAvatarCustomization
    } = useAvatarCustomizationStore.getState()

    if (currentProfile && currentAvatarCustomization) {
      initializeAvatarCustomization({
        avatar: currentProfile.avatar ?? generateRandomAvatar()
      })
    }
  }, [])

  if (!profile || !avatarCustomization) {
    return
  }

  return (
    <div className="avatar-customization">
      <aside>
        <PlayerAvatar replaceAvatar={avatarCustomization.avatar} />
      </aside>

      {!avatarCustomization.layer && (
        <main className="avatar-options">
          <Text>{getTexts('AVATARCUSTOMIZATION_OPTIONS_TITLE')}</Text>

          {AVATAR_CUSTOMIZATION_LAYERS.map((option) => (
            <div key={`avatar-options-${option}`}>
              <Button
                onClick={() =>
                  setAvatarCustomization({
                    ...avatarCustomization,
                    layer: option
                  })
                }
              >
                <FaPaintBrush />
                <Text>{options[option]}</Text>
              </Button>
            </div>
          ))}
        </main>
      )}

      {!!avatarCustomization.layer && <AvatarCustomizationOptions />}
    </div>
  )
}
