import type { DialogType } from '@/Types/Dialog.type'

import { RootDomainLoungeDialog } from '@/GameData/Dialogs/Scenes/RootDomainLounge.dialog'
import { IntoTheDigitalWorldQuest } from '@/GameData/Quests/IntoTheDigitalWorld.quest'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { saveData } from '@/Helpers/Systems/Data'

import { useProfileQuestsStore } from '@/Stores/ProfileQuests.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld031 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_031'),

    actions: [
      {
        id: 'ITDW_031_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { profileQuests, setProfileQuests } =
            useProfileQuestsStore.getState()

          const updatedProfileQuests = {
            ...profileQuests,
            [IntoTheDigitalWorldQuest.id]: {
              ...IntoTheDigitalWorldQuest,
              status: 'completed' as const,
              progress: {}
            }
          }

          setProfileQuests(updatedProfileQuests)

          if (profile.id !== undefined) {
            saveData({
              key: `profileQuests${profile.id}`,
              value: updatedProfileQuests
            })
          }

          changeDialog(RootDomainLoungeDialog)
        }
      }
    ]
  }
}
