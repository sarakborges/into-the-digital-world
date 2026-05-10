import { useEffect } from 'react'
import { FaPaintBrush } from 'react-icons/fa'

import type { AvatarType } from '@/Types/Avatar.type'
import type { ProfileType } from '@/Types/Profile.type'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { getTexts } from '@/Helpers/getTexts.helper'
import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { Button } from '@/Components/System/Button'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { Text } from '@/Components/System/Text'

import { useProfile } from '@/Hooks/Profile.hook'
import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { AvatarCustomizationOptions } from '@/Components/App/AvatarCustomizationOptions'

import './AvatarCustomization.style.scss'
import { useDigivice } from '@/Hooks/Digivice.hook'

export const AvatarCustomization = () => {
  const { customization, setCustomization } = useAvatarCustomization()
  const { profile, setProfile } = useProfile()
  const { scene, setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  const options = {
    skin: getTexts('AVATARCUSTOMIZATION_SKIN'),
    hair: getTexts('AVATARCUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATARCUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATARCUSTOMIZATION_EYES'),
    clothes: getTexts('AVATARCUSTOMIZATION_CLOTHES')
  }

  const randomAvatar = {
    clothes:
      AVATAR_OPTIONS.clothes[
        Math.floor(Math.random() * AVATAR_OPTIONS.clothes.length)
      ],

    eyes: AVATAR_OPTIONS.eyes[
      Math.floor(Math.random() * AVATAR_OPTIONS.eyes.length)
    ],

    expression:
      AVATAR_OPTIONS.expression[
        Math.floor(Math.random() * AVATAR_OPTIONS.expression.length)
      ],

    hairColor:
      AVATAR_OPTIONS.hairColor[
        Math.floor(Math.random() * AVATAR_OPTIONS.hairColor.length)
      ],

    hair: AVATAR_OPTIONS.hair[
      Math.floor(Math.random() * AVATAR_OPTIONS.hair.length)
    ],

    skin: AVATAR_OPTIONS.skin[
      Math.floor(Math.random() * AVATAR_OPTIONS.skin.length)
    ]
  }

  const avatar: AvatarType = profile?.avatar ?? randomAvatar

  const saveAvatar = () => {
    if (!customization) {
      return
    }

    const updatedProfile: ProfileType = {
      ...profile!,
      avatar: customization.avatar
    }

    if (!profile?.avatar) {
      setScene({
        currentScene: 'introduction',
        currentStage: '025'
      })

      setProfile(updatedProfile)
      saveSession({ key: 'profile', value: updatedProfile })
      setDigivice({ ...digivice, isOpen: false, currentApp: undefined })

      return
    }

    setScene({
      currentScene: 'avatarCustomization',
      currentStage: '002'
    })

    setCustomization({ avatar: customization.avatar })
    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }

  useEffect(() => {
    setCustomization({ avatar })
  }, [])

  return (
    <div className="avatar-customization">
      <header>
        {!customization?.layer && (
          <>
            <header className="profile-avatar">
              <PlayerAvatar replaceAvatar={customization?.avatar} />
            </header>

            <main className="avatar-options">
              <Text>{getTexts('AVATARCUSTOMIZATION_OPTIONS_TITLE')}</Text>

              {(Object.keys(options) as Array<keyof typeof options>).map(
                (option) => (
                  <div key={`avatar-options-${option}`}>
                    <Button
                      disabled={!!scene}
                      onClick={() =>
                        setCustomization({ ...customization!, layer: option })
                      }
                    >
                      <FaPaintBrush />
                      <Text>{options[option]}</Text>
                    </Button>
                  </div>
                )
              )}
            </main>

            <footer>
              <Button onClick={saveAvatar}>
                <Text>{getDialogs('SCENES_CONFIRM_BUTTON')}</Text>
              </Button>
            </footer>
          </>
        )}

        {!!customization?.layer && <AvatarCustomizationOptions />}
      </header>
    </div>
  )
}
