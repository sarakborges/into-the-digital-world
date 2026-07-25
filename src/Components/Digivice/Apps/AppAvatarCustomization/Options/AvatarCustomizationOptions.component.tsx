import type {
  AvatarCustomizationLayer,
  AvatarType,
  HexColor
} from '@/Types/Avatar.type'

import { getAvatarOptionsText } from '@/Helpers/Systems/Profile/getAvatarOptionsText.helper'

import {
  EYE_OPTIONS,
  FULL_CLOTHES_MODELS,
  HAIR_COLOR_OPTIONS,
  HAIR_MODELS,
  SKIN_OPTIONS,
  getFullClothesColorOptions,
  getFullClothesDefaultColor
} from '@/Consts/Avatars.const'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppAvatarCustomization/Options/AvatarCustomizationOptions.style.scss'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

const getLayerOptions = (
  layer: AvatarCustomizationLayer,
  avatar: AvatarType
): readonly string[] => {
  switch (layer) {
    case 'skinColor':
      return SKIN_OPTIONS.map(({ color }) => color)
    case 'eyeColor':
      return EYE_OPTIONS.map(({ color }) => color)
    case 'hairModel':
      return HAIR_MODELS
    case 'hairColor':
      return HAIR_COLOR_OPTIONS.map(({ color }) => color)
    case 'fullClothesModel':
      return FULL_CLOTHES_MODELS
    case 'fullClothesColor':
      return getFullClothesColorOptions(
        avatar.clothes.fullClothes?.model ?? FULL_CLOTHES_MODELS[0]
      ).map(({ color }) => color)
  }
}

const getLayerValue = (
  layer: AvatarCustomizationLayer,
  avatar: AvatarType
): string => {
  switch (layer) {
    case 'skinColor':
      return avatar.skinColor
    case 'eyeColor':
      return avatar.eyeColor
    case 'hairModel':
      return avatar.hair.model
    case 'hairColor':
      return avatar.hair.color
    case 'fullClothesModel':
      return avatar.clothes.fullClothes?.model ?? ''
    case 'fullClothesColor':
      return avatar.clothes.fullClothes?.color ?? ''
  }
}

const updateAvatarLayer = (
  avatar: AvatarType,
  layer: AvatarCustomizationLayer,
  option: string
): AvatarType => {
  switch (layer) {
    case 'skinColor':
      return {
        ...avatar,
        skinColor: option as HexColor
      }
    case 'eyeColor':
      return {
        ...avatar,
        eyeColor: option as HexColor
      }
    case 'hairModel':
      return {
        ...avatar,
        hair: {
          ...avatar.hair,
          model: option
        }
      }
    case 'hairColor':
      return {
        ...avatar,
        hair: {
          ...avatar.hair,
          color: option as HexColor
        }
      }
    case 'fullClothesModel':
      return {
        ...avatar,
        clothes: {
          ...avatar.clothes,
          mode: 'fullClothes',
          fullClothes: {
            model: option,
            color: getFullClothesDefaultColor(option)
          }
        }
      }
    case 'fullClothesColor': {
      const model =
        avatar.clothes.fullClothes?.model ?? FULL_CLOTHES_MODELS[0]

      return {
        ...avatar,
        clothes: {
          ...avatar.clothes,
          mode: 'fullClothes',
          fullClothes: {
            model,
            color: option as HexColor
          }
        }
      }
    }
  }
}

export const AvatarCustomizationOptions = () => {
  const { avatarCustomization, setAvatarCustomization } =
    useAvatarCustomizationStore((state) => state)

  if (!avatarCustomization?.layer) {
    return
  }

  const layer = avatarCustomization.layer
  const labels = getAvatarOptionsText()
  const options = getLayerOptions(layer, avatarCustomization.avatar)
  const selectedOption = getLayerValue(layer, avatarCustomization.avatar)

  const updateCustomization = (option: string) => {
    setAvatarCustomization({
      ...avatarCustomization,
      avatar: updateAvatarLayer(avatarCustomization.avatar, layer, option)
    })
  }

  return (
    <div className="avatar-customization-options">
      <header>
        <Text>{labels[layer]}:</Text>
      </header>

      <main className="customization-options">
        <div>
          {options.map((option) => {
            const previewAvatar = updateAvatarLayer(
              avatarCustomization.avatar,
              layer,
              option
            )

            return (
              <div key={`customization-layer-${layer}-${option}`}>
                <Button
                  disabled={selectedOption === option}
                  onClick={() => updateCustomization(option)}
                >
                  <PlayerAvatar replaceAvatar={previewAvatar} />
                </Button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
