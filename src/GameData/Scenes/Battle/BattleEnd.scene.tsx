import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { warpTo } from '@/Helpers/warpTo.helper'
import { saveSession } from '@/Helpers/saveSession.helper'
import { isDigimonDefeated } from '@/Helpers/isDigimonDefeated.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { CombatLoot } from '@/Components/App/CombatLoot'

export const BattleEnd = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)
  const { battle, setBattle } = useBattleStore((state) => state)

  const battleResult = battle?.turnOrder
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
            {getDialogs(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
          </Text>
        </div>

        <CombatLoot />
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (battleResult === 'victory') {
            if (!!battle?.loot) {
              for (let item of Object.keys(battle?.loot)) {
                profile!.items[item] =
                  (profile!.items[item] || 0) + battle?.loot[item]
              }
            }
          }

          if (battleResult === 'defeat') {
            warpTo({
              x: 3,
              y: 5,
              zoneId: 'rootDomain',
              mapId: 'restRoom1'
            })
          }

          setBattle(null)
          setScene(null)
          setProfile(profile)

          saveSession({
            key: 'profile',
            value: profile
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
