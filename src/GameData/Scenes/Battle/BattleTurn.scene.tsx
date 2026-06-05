import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { doAttack } from '@/Helpers/doAttack.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleTurn = () => {
  const { battle } = useBattleStore((state) => state)

  const [currentTurn] = battle?.turnOrder!

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(
            `BATTLE_${currentTurn.party.toLocaleUpperCase()}_TURN_TEXT`
          ).replaceAll('[NAME]', currentTurn.name)}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleturn-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          doAttack()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
