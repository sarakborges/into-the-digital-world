import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld026 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/026.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld025 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts('ITDW_025', {
      '[NAME]': profile.name
    }),

    actions: [
      {
        id: 'ITDW_025_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld026())
        }
      }
    ]
  }
}
