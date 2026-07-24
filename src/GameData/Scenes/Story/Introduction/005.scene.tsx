import { useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Introduction006 } from '@/GameData/Scenes/Story/Introduction/006.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Input } from '@/Components/DesignSystem/Input/Input.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction005 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)
  const [name, setName] = useState('')

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-005-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        disabled: !name,
        action: () => {
          setProfileSession({
            ...profile,
            name: name.trim()
          })

          setScene({ component: Introduction006 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
