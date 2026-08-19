import type { DialogType } from '@/Types/Dialog.type'

import { FashionFixComplete } from '@/GameData/Dialogs/Apps/Fashion/FixComplete.dialog'
import { FashionUpdateComplete } from '@/GameData/Dialogs/Apps/Fashion/UpdateComplete.dialog'
import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'

import { getTexts } from '@/Helpers/Language'
import { getProfileAvatar } from '@/Helpers/Systems/Profile'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useDialogStore } from '@/Stores/Dialog.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { AvatarCustomization } from '@/Components/DialogContent/AvatarCustomization'

export const FashionApp = () => {
  const profileAvatar = getProfileAvatar()

  return {
    speaker: {
      id: NpcDressmon.id,
      name: NpcDressmon.name,
      title: getTexts(NpcDressmon.title),
      portrait: NpcDressmon.picture
    },

    content: <AvatarCustomization />,

    actions: [
      {
        id: 'FASHION_APP_COMPLETE_CANCEL',

        text: getTexts('SCENES_CANCEL_BUTTON'),

        disabled: !profileAvatar,

        onClick: () => {
          const { setDialog } = useDialogStore.getState()
          setDialog(null)
        }
      },

      {
        id: 'FASHION_APP_COMPLETE_CONFIRM',

        text: getTexts('SCENES_CONFIRM_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()
          const { profile, setProfile } = useProfileStore.getState()
          const { avatarCustomization } = useAvatarCustomizationStore.getState()

          if (!profile || !avatarCustomization?.avatar) {
            return
          }

          setDialog(!profileAvatar ? FashionFixComplete : FashionUpdateComplete)

          setTimeout(
            () =>
              setProfile({ ...profile, avatar: avatarCustomization?.avatar }),
            600
          )
        }
      }
    ]
  } satisfies DialogType
}
