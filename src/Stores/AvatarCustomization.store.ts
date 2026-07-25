import { create } from 'zustand'

import type { AvatarCustomizationLayer, AvatarType } from '@/Types/Avatar.type'

type AvatarCustomizationState = {
  avatar: AvatarType
  layer?: AvatarCustomizationLayer
}

const createInitialAvatarCustomization = (): AvatarCustomizationState => ({
  avatar: {
    expression: '',
    skin: '',
    eyes: '',
    hair: '',
    hairColor: '',
    clothes: ''
  }
})

type AvatarCustomizationStore = {
  avatarCustomization: AvatarCustomizationState | null
  setAvatarCustomization: (
    avatarCustomization: AvatarCustomizationState | null
  ) => void
  resetAvatarCustomization: () => void
}

export const useAvatarCustomizationStore = create<AvatarCustomizationStore>(
  (set) => ({
    avatarCustomization: createInitialAvatarCustomization(),

    setAvatarCustomization: (avatarCustomization) => {
      set({ avatarCustomization })
    },

    resetAvatarCustomization: () => {
      set({ avatarCustomization: createInitialAvatarCustomization() })
    }
  })
)
