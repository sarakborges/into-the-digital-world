import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { useAvatarCustomization } from '@/Hooks/AvatarCustomization.hook'

import { Button } from '@/Components/System/Button'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './AvatarCustomizationOptions.style.scss'

export const AvatarCustomizationOptions = () => {
  const { customization, setCustomization } = useAvatarCustomization()

  if (!customization.layer) {
    return
  }

  const updateCustomization = (option) => {
    const avatar = {
      ...customization.avatar,
      [customization.layer!]: option
    }

    setCustomization({
      ...customization,
      avatar
    })
  }

  return (
    <div className="customization-options">
      {AVATAR_OPTIONS[customization.layer].map((option) => (
        <div key={`customization-layer-${customization.layer}-${option}`}>
          <Button
            disabled={customization.avatar[customization.layer!] === option}
            onClick={() => updateCustomization(option)}
          >
            <PlayerAvatar
              replaceAvatar={{
                ...customization.avatar,
                [customization.layer!]: option
              }}
            />
          </Button>
        </div>
      ))}
    </div>
  )
}
