import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { enterNextDungeonRoom, saveDungeon } from '@/Helpers/Systems/Dungeon'
import { isDigimonDefeated, saveBattle } from '@/Helpers/Systems/Battle'
import { getTranslation } from '@/Helpers/Language'
import { warpTo } from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { CombatLoot } from '@/Components/Combat/CombatLoot'
import { Dialog } from '@/Components/DesignSystem/Dialog'

export const BattleEnd = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!battle || !profile) {
    return
  }

  const battleResult = battle.turnOrder
    .filter((digimon) => !isDigimonDefeated(digimon))
    .every((digimon) => digimon.party === 'allies')
    ? 'victory'
    : 'defeat'

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTranslation(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
          </Text>
        </div>

        <CombatLoot />
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (!dungeon) {
            return
          }

          if (battleResult === 'victory') {
            if (!!battle.loot) {
              for (let item of Object.keys(battle.loot)) {
                profile.items[item] =
                  (profile.items[item] || 0) + battle.loot[item]
              }
            }
          }

          if (battleResult === 'defeat') {
            warpTo({
              x: 3,
              y: 5,
              zoneId: 'rootDomain',
              mapId: 'restRoom'
            })

            saveDungeon(null)
            saveBattle(null)
            setScene(null)
          }

          enterNextDungeonRoom()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
