import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { AvatarType } from '@/Types/Avatar.type'
import type { AvatarCustomizationContextType } from '@/Types/Contexts/AvatarCustomizationContext.type'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

import { useProfile } from '@/Hooks/Profile.hook'

export const AvatarCustomizationContext =
  createContext<AvatarCustomizationContextType | null>(null)

export const AvatarCustomizationProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const { profile } = useProfile()

  const avatar: AvatarType = profile?.avatar ?? {
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

  const [customization, setCustomization] = useState<{
    avatar: AvatarType
    layer?: keyof AvatarType
  }>({ avatar })

  return (
    <AvatarCustomizationContext.Provider
      value={{ customization, setCustomization }}
    >
      {children}
    </AvatarCustomizationContext.Provider>
  )
}
