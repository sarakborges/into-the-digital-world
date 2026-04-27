import { useContext } from 'react'

import { AvatarCustomizationContext } from '@/Contexts/AvatarCustomization.context'

export function useAvatarCustomization() {
  const context = useContext(AvatarCustomizationContext)

  if (!context) {
    throw new Error(
      'useAvatarCustomization must be used within AvatarCustomizationProvider'
    )
  }

  return context
}
