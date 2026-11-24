import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld011 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { getChoice } from '@/Helpers/Systems/Profile'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { SkipIntroductionToAvatar } from '@/Components/DialogContent/SkipIntroductionToAvatar'

export const getIntoTheDigitalWorld010 = (): DialogType => {
  const { profile } = useProfileStore.getState()
  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_010_${choice.toUpperCase()}`, {
      '[NAME]': profile.name
    }),

    content: <SkipIntroductionToAvatar />,

    actions: [
      {
        id: 'ITDW_010_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialogOptions } = useDialogOptionsStore.getState()

          setDialogOptions([
            'where',
            'arrival',
            'human',
            'balance',
            'homeostasis',
            'guide',
            'enough'
          ])

          changeDialog(IntoTheDigitalWorld011)
        }
      }
    ]
  }
}
