import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { AvatarType } from '@/Types/Avatar.type'
import type { AvatarCustomizationContextType } from '@/Types/Contexts/AvatarCustomizationContext.type'

export const AvatarCustomizationContext =
  createContext<AvatarCustomizationContextType | null>(null)

export const AvatarCustomizationProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [customization, setCustomization] = useState<{
    avatar: AvatarType
    layer?: keyof AvatarType
  } | null>(null)

  return (
    <AvatarCustomizationContext.Provider
      value={{ customization, setCustomization }}
    >
      {children}
    </AvatarCustomizationContext.Provider>
  )
}
