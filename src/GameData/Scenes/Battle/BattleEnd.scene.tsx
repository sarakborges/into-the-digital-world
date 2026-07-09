import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'
import { isDigimonDefeated, saveBattle } from '@/Helpers/Systems/Battle'
import { enterNextDungeonRoom, saveDungeon } from '@/Helpers/Systems/Dungeon'
import { warpTo } from '@/Helpers/Systems/Zones'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLoot } from '@/Components/Combat/CombatLoot'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const BattleEnd = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
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

          if (battleResult === 'victory' && battle.loot) {
            const updatedItems = { ...profile.items }

            for (const item of Object.keys(battle.loot)) {
              updatedItems[item] =
                (profile.items[item] || 0) + battle.loot[item]
            }

            setProfile({ ...profile, items: updatedItems })
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
