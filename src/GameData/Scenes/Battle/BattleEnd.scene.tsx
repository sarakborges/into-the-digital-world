import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleEnd = () => {
  const { setScene } = useScene()
  const { battle, setBattle } = useBattle()

  const battleResult = battle?.turnOrder.every(
    (digimon) => digimon.party === 'allies'
  )
    ? 'victory'
    : 'defeat'

  const dialogOptions: DialogType = {
    speaker: AllNpcs.oujamon,

    content: (
      <Text as="p">
        {getDialogs(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setBattle({
            ...battle!,
            allies: [],
            enemies: []
          })

          setScene({
            currentScene: 'battle',
            currentStage: 'epilogue'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
