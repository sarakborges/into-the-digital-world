import { useEffect } from 'react'
import { FaPaintBrush } from 'react-icons/fa'

import type { AvatarType } from '@/Types/Avatar.type'
import type { ProfileType } from '@/Types/Profile.type'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { getTexts } from '@/Helpers/getTexts.helper'
import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { AvatarCustomizationOptions } from '@/Components/App/AvatarCustomizationOptions'

import './AvatarCustomization.style.scss'

export const AvatarCustomization = () => {
  const scene = useSceneStore((state) => state.scene)
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const avatarCustomization = useAvatarCustomizationStore(
    (state) => state.avatarCustomization
  )
  const setAvatarCustomization = useAvatarCustomizationStore(
    (state) => state.setAvatarCustomization
  )

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
    if (!avatarCustomization) {
      return
    }

    const updatedProfile: ProfileType = {
      ...profile!,
      avatar: avatarCustomization.avatar
    }

    if (!profile?.avatar) {
      setScene({
        currentScene: 'introduction',
        currentStage: '025'
      })

      setProfile(updatedProfile)

      return
    }

    setScene({
      currentScene: 'avatarCustomization',
      currentStage: '002'
    })

    setAvatarCustomization({ avatar: avatarCustomization.avatar })
    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }

  useEffect(() => {
    setAvatarCustomization({ avatar })
  }, [])

  return (
    <div className="avatar-customization">
      <header>
        <PlayerAvatar replaceAvatar={avatarCustomization?.avatar} />
      </header>

      {!avatarCustomization?.layer && (
        <main className="avatar-options-container">
          <main className="avatar-options">
            <Text>{getTexts('AVATARCUSTOMIZATION_OPTIONS_TITLE')}</Text>

            {(Object.keys(options) as Array<keyof typeof options>).map(
              (option) => (
                <div key={`avatar-options-${option}`}>
                  <Button
                    disabled={!!scene}
                    onClick={() =>
                      setAvatarCustomization({
                        ...avatarCustomization!,
                        layer: option
                      })
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
            <Button disabled={!!scene} onClick={saveAvatar}>
              <Text>{getDialogs('SCENES_CONFIRM_BUTTON')}</Text>
            </Button>
          </footer>
        </main>
      )}

      {!!avatarCustomization?.layer && <AvatarCustomizationOptions />}
    </div>
  )
}
