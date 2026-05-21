import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleAttack = () => {
  const { setScene } = useScene()
  const { battle } = useBattle()

  const [currentTurn] = battle?.turnOrder!

  const dialogOptions: DialogType = {
    speaker: AllNpcs.oujamon,

    content: (
      <Text as="p">
        {getDialogs('BATTLE_ATTACK')
          .replaceAll('[NAME]', currentTurn.digimon.name)
          .replaceAll('[TARGET]', battle?.lastTarget?.name)
          .replaceAll('[DAMAGE]', battle?.lastDamage)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleattack-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'battle',
            currentStage: 'turn'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
