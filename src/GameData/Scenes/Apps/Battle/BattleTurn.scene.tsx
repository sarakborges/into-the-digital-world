import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { doAttack } from '@/Helpers/Systems/Battle/doAttack.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import { SelectAttack } from '@/Components/Combat/SelectAttack/SelectAttack.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleTurn = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const [currentTurn] = battle.turnOrder

  if (!currentTurn) {
    return
  }

  const attackIds = Object.keys(currentTurn.attacks)
  const options =
    currentTurn.party === 'enemies' && attackIds.length
      ? [
          {
            id: 'scene-battle-battleturn-continue',
            text: getTexts('SCENES_CONTINUE_BUTTON'),
            action: () => {
              const rng = generateRandomNumber({
                min: 0,
                max: attackIds.length - 1
              })
              const attackId = attackIds[rng]

              if (attackId) {
                doAttack(attackId)
              }
            }
          }
        ]
      : undefined

  const dialogOptions: DialogType = {
    speaker: NpcOujamon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts(
              `BATTLE_${currentTurn.party.toLocaleUpperCase()}_TURN_TEXT`,
              { '[NAME]': currentTurn.name }
            )}
          </Text>
        </div>

        <SelectAttack />
      </div>
    ),

    ...(options ? { options } : {})
  }

  return <Dialog {...dialogOptions} />
}
