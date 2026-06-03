import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { getTexts } from '@/Helpers/getTexts.helper'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './AvatarCustomizationOptions.style.scss'

export const AvatarCustomizationOptions = () => {
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  if (!avatarCustomization?.layer) {
    return
  }

  const options = {
    skin: getTexts('AVATARCUSTOMIZATION_SKIN'),
    hair: getTexts('AVATARCUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATARCUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATARCUSTOMIZATION_EYES'),
    clothes: getTexts('AVATARCUSTOMIZATION_CLOTHES')
  }

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

  const closeCustomization = () => {
    setAvatarCustomization({ ...avatarCustomization, layer: undefined })
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

      <footer className="customization-back">
        <Button onClick={closeCustomization}>
          {getDialogs('SCENES_BACK_BUTTON')}
        </Button>
      </footer>
    </div>
  )
}
