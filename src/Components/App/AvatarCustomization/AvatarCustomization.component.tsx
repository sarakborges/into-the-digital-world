import { useState } from 'react'

import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'

import { getTexts } from '@/Helpers/getTexts.helper'

import { Button } from '@/Components/System/Button'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { Text } from '@/Components/System/Text'

import { AvatarCustomizationOptions } from '@/Components/App/AvatarCustomizationOptions'

import './AvatarCustomization.style.scss'

export const AvatarCustomization = () => {
  const { customization, setCustomization } = useAvatarCustomization()

  const options = {
    skin: getTexts('AVATAR_CUSTOMIZATION_SKIN'),
    hair: getTexts('AVATAR_CUSTOMIZATION_HAIR'),
    hairColor: getTexts('AVATAR_CUSTOMIZATION_HAIR_COLOR'),
    eyes: getTexts('AVATAR_CUSTOMIZATION_EYES'),
    clothes: getTexts('AVATAR_CUSTOMIZATION_CLOTHES')
  }

  return (
    <div className="avatar-customization">
      <header>
        <Text>{getTexts('AVATAR_CUSTOMIZATION_NOLAYER_TITLE')}</Text>
        <PlayerAvatar replaceAvatar={customization.avatar} />
      </header>

      {!!customization.layer && (
        <AvatarCustomizationOptions layer={customization.layer} />
      )}

      {!customization.layer && (
        <>
          <div className="avatar-options">
            <Text>{getTexts('AVATAR_CUSTOMIZATION_OPTIONS_TITLE')}</Text>

            <div className="options-list">
              {(Object.keys(options) as Array<keyof typeof options>).map(
                (option) => (
                  <div key={`avatar-options-${option}`}>
                    <Button
                      onClick={() =>
                        setCustomization({ ...customization, layer: option })
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
