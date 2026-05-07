import { useEffect } from 'react'

import type { AvatarType } from '@/Types/Avatar.type'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { getTexts } from '@/Helpers/getTexts.helper'

import { Button } from '@/Components/System/Button'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { Text } from '@/Components/System/Text'

import { useProfile } from '@/Hooks/Profile.hook'
import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'

import { AvatarCustomizationOptions } from '@/Components/App/AvatarCustomizationOptions'

import './AvatarCustomization.style.scss'

export const AvatarCustomization = () => {
  const { customization, setCustomization } = useAvatarCustomization()
  const { profile } = useProfile()

  const options = {
    skin: getTexts('AVATAR_CUSTOMIZATION_SKIN'),
    hair: getTexts('AVATAR_CUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATAR_CUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATAR_CUSTOMIZATION_EYES'),
    clothes: getTexts('AVATAR_CUSTOMIZATION_CLOTHES')
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

  useEffect(() => {
    setCustomization({ avatar })
  }, [])

  return (
    <div className="avatar-customization">
      <header>
        <PlayerAvatar replaceAvatar={customization?.avatar} />
      </header>

      {!!customization?.layer && <AvatarCustomizationOptions />}

      {!customization?.layer && (
        <>
          <div className="avatar-options">
            <Text as="p">{getTexts('AVATAR_CUSTOMIZATION_OPTIONS_TITLE')}</Text>

            <div className="options-list">
              {(Object.keys(options) as Array<keyof typeof options>).map(
                (option) => (
                  <div key={`avatar-options-${option}`}>
                    <Button
                      onClick={() =>
                        setCustomization({ ...customization!, layer: option })
                      }
                    >
                      {options[option]}
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
