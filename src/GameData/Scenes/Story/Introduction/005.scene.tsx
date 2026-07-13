import { useEffect } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Input } from '@/Components/DesignSystem/Input'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction005 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  useEffect(() => {
    const sceneContinue = document.querySelector(
      '#scene-introduction-005-continue'
    ) as HTMLButtonElement

    sceneContinue.disabled = true
  }, [])

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_005_TEXT')}</Text>
        </div>

        <Input
          label={getTexts('INTRODUCTION_005_INPUT')}
          placeholder={getTexts('INTRODUCTION_005_INPUT_PLACEHOLDER')}
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
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-005-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const name = (
            document.querySelector('[name=player-name]') as HTMLInputElement
          ).value.trim()

          const updatedProfile = {
            ...profile,
            name: name
          }

          setProfile(updatedProfile)

          setScene(AllScenes.introduction['006'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
