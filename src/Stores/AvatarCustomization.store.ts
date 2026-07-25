import { create } from 'zustand'

import type {
  AvatarCustomizationLayer,
  AvatarType
} from '@/Types/Avatar.type'

import { DEFAULT_AVATAR } from '@/Consts/Avatars.const'

type AvatarCustomizationState = {
  avatar: AvatarType
  layer?: AvatarCustomizationLayer
}

type AvatarCustomizationStore = {
  avatarCustomization: AvatarCustomizationState | null
  setAvatarCustomization: (
    avatarCustomization: AvatarCustomizationState | null
  ) => void
}

export const useAvatarCustomizationStore = create<AvatarCustomizationStore>(
  (set) => ({
    avatarCustomization: {
      avatar: DEFAULT_AVATAR
    },
    setAvatarCustomization: (avatarCustomization) => {
      set({ avatarCustomization })
    }
  })
)
