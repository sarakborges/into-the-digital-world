import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { warpTo } from '@/Helpers/warpTo.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleEnd = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)
  const { battle, setBattle } = useBattleStore((state) => state)

  const battleResult = battle?.result!

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (battle!.result === 'victory') {
            if (!!battle?.loot) {
              for (let item of Object.keys(battle?.loot)) {
                profile!.items[item] =
                  (profile!.items[item] || 0) + battle?.loot[item].amount
              }
            }

            warpTo({
              ...battle?.mapPosition!,
              zoneId: profile!.currentZone.id,
              mapId: profile!.currentZone.map
            })
          }

          if (battle!.result === 'defeat') {
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
