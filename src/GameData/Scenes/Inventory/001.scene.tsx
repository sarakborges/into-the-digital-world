import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'
import { deleteSession } from '@/Helpers/deleteSession.helper'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Inventory001 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeInInventory = !Object.keys(
    profile!.npcAcquintances
  ).includes(AllNpcs.consulmon.id)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.consulmon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeInInventory
            ? 'INVENTORY_001_TEXT_ALT'
            : 'INVENTORY_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-inventory-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!!isFirstTimeInInventory) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.consulmon.id]: {}
              }
            }

            setProfile(updatedProfile)
            saveSession({ key: 'profile', value: updatedProfile })
          }

          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
