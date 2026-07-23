import { getAvatarOptionsText } from '@/Helpers/Systems/Profile/getAvatarOptionsText.helper'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppAvatarCustomization/Options/AvatarCustomizationOptions.style.scss'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

export const AvatarCustomizationOptions = () => {
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  if (!avatarCustomization?.layer) {
    return
  }

  const options = getAvatarOptionsText()

  const updateCustomization = (option) => {
    const avatar = {
      ...avatarCustomization.avatar,
      [avatarCustomization.layer!]: option
    }

    setAvatarCustomization({
      ...avatarCustomization,
      avatar
    })
  }

  return (
    <div className="avatar-customization-options">
      <header>
        <Text>{options[avatarCustomization.layer]}:</Text>
      </header>

      <main className="customization-options">
        <div>
          {AVATAR_OPTIONS[avatarCustomization.layer].map((option) => (
            <div
              key={`customization-layer-${avatarCustomization.layer}-${option}`}
            >
              <Button
                disabled={
                  avatarCustomization.avatar[avatarCustomization.layer!] ===
                  option
                }
                onClick={() => updateCustomization(option)}
              >
                <PlayerAvatar
                  replaceAvatar={{
                    ...avatarCustomization.avatar,
                    [avatarCustomization.layer!]: option
                  }}
                />
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
