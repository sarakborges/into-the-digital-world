import {create} from 'zustand'

import type {AvatarType} from '@/Types/Avatar.type'

type AvatarCustomizationStore = {
  avatarCustomization: {
    avatar: AvatarType
    layer?: keyof AvatarType
  } | null
  setAvatarCustomization: (
    avatarCustomization: {
      avatar: AvatarType
      layer?: keyof AvatarType
    } | null
  ) => void
}

export const useAvatarCustomizationStore = create<AvatarCustomizationStore>(
  (set) => ({
    avatarCustomization: {
      avatar: {
        expression: '',
        skin: '',
        eyes: '',
        hair: '',
        hairColor: '',
        clothes: ''
      }
    },
    setAvatarCustomization: (avatarCustomization) => {
      set({ avatarCustomization })
    }
  })
)
