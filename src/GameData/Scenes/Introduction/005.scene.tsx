import { useEffect } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'
import { Input } from '@/Components/System/Input'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction005 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  useEffect(() => {
    const sceneContinue = document.querySelector(
      '#scene-introduction-005-continue'
    ) as HTMLButtonElement

    sceneContinue.disabled = true
  }, [])

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: (
      <>
        <Text as="p">{getDialogs('INTRODUCTION_005_TEXT')}</Text>

        <Input
          label={getDialogs('INTRODUCTION_005_INPUT')}
          placeholder={getDialogs('INTRODUCTION_005_INPUT_PLACEHOLDER')}
          name="player-name"
          autoFocus
          onChange={(e) =>
            ((
              document.querySelector(
                '#scene-introduction-005-continue'
              ) as HTMLButtonElement
            ).disabled = !e.target.value)
          }
        />
      </>
    ),

    options: [
      {
        id: 'scene-introduction-005-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const name = (
            document.querySelector('[name=player-name]') as HTMLInputElement
          ).value.trim()

          const updatedProfile = {
            ...profile!,
            name: name
          }

          setProfile(updatedProfile)

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
