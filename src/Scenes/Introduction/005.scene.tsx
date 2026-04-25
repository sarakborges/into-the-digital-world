import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { NpcCulumon } from '@/GameData/Npcs/Culumon.npc'

import { getDialog } from '@/Texts'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction005 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: NpcCulumon.name,
    speakerAvatar: NpcCulumon.portrait,

    content: (
      <Text as="p">
        {getDialog(
          profile?.name.slice(-3) !== 'mon'
            ? 'INTRODUCTION_005_TEXT'
            : 'INTRODUCTION_005_TEXT_ALT'
        ).replaceAll('[NAME]', profile?.name)}
      </Text>
    ),

    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '006'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
