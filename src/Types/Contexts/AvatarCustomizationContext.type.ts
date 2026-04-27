import type { AvatarType } from '@/Types/Avatar.type'

export type AvatarCustomizationContextType = {
  customization: {
    avatar: AvatarType
    layer?: keyof AvatarType
  }
  setCustomization: React.Dispatch<
    React.SetStateAction<{
      avatar: AvatarType
      layer?: keyof AvatarType
    }>
  >
}
