import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { generateRandomNumber } from '@/Helpers/Math'
import { doAttack } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { SelectAttack } from '@/Components/Combat/SelectAttack'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const BattleTurn = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const [currentTurn] = battle.turnOrder

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

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

    options:
      currentTurn.party === 'enemies'
        ? [
            {
              id: 'scene-battle-battleturn-continue',
              text: getTexts('SCENES_CONTINUE_BUTTON'),
              action: () => {
                const rng = generateRandomNumber({
                  min: 0,
                  max: Object.keys(currentTurn.attacks).length - 1
                })

                doAttack(Object.keys(currentTurn.attacks)[rng])
              }
            }
          ]
        : undefined
  }

  return <Dialog {...dialogOptions} />
}
