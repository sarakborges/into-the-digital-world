import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { NpcCulumon } from '@/GameData/Npcs/Culumon.npc'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction003 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: '???',
    speakerAvatar: NpcCulumon.portrait,

    content: <Text as="p">{getDialogs('INTRODUCTION_003_TEXT')}</Text>,

    options: [
      {
        text: getDialogs('INTRODUCTION_003_ACTION'),
        action: () => {
          const name = (prompt(getDialogs('INTRODUCTION_003_PROMPT')) || '')
            .trim()
            .toLocaleLowerCase()

          if (!name) {
            return
          }

          setProfile({
            ...profile!,
            name: name.charAt(0).toUpperCase() + name.slice(1)
          })

          setScene({
            currentScene: 'introduction',
            currentStage: '004'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
