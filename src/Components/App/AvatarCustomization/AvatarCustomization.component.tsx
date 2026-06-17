import { useEffect } from 'react'
import { FaPaintBrush } from 'react-icons/fa'

import type { AvatarType } from '@/Types/Avatar.type'

import { getTexts } from '@/Helpers/Language'
import {
  generateRandomAvatar,
  getAvatarOptionsText
} from '@/Helpers/Systems/Profile'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { AvatarCustomizationOptions } from '@/Components/App/AvatarCustomizationOptions'

import './AvatarCustomization.style.scss'

export const AvatarCustomization = () => {
  const { profile } = useProfileStore((state) => state)
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  if (!profile || !avatarCustomization) {
    return
  }

  const options = getAvatarOptionsText()

  const avatar: AvatarType = profile.avatar ?? generateRandomAvatar()

  useEffect(() => {
    setAvatarCustomization({ avatar })
  }, [])

  return (
    <div className="avatar-customization">
      <aside>
        <PlayerAvatar replaceAvatar={avatarCustomization.avatar} />
      </aside>

      {!avatarCustomization.layer && (
        <main className="avatar-options">
          <Text>{getTexts('AVATARCUSTOMIZATION_OPTIONS_TITLE')}</Text>

          {(Object.keys(options) as Array<keyof AvatarType>).map((option) => (
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
