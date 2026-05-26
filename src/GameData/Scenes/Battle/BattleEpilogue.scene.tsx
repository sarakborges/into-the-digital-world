import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { warpTo } from '@/Helpers/warpTo.helper'

export const BattleEpilogue = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const battle = useBattleStore((state) => state.battle)
  const setBattle = useBattleStore((state) => state.setBattle)

  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const dialogOptions: DialogType = {
    content: (
      <Text as="p">
        {getDialogs(`BATTLE_EPILOGUE_${battle!.result!.toLocaleUpperCase()}`)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleepilogue-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            currentlyInBattle: false
          }

          if (battle!.result === 'victory') {
            if (!!battle!.loot) {
              for (let item of Object.keys(battle!.loot)) {
                updatedProfile.items[item] =
                  (updatedProfile.items[item] || 0) + battle!.loot[item].amount
              }
            }

            warpTo({
              ...battle?.mapPosition!,
              zoneId: updatedProfile!.currentZone.id,
              mapId: updatedProfile!.currentZone.map
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
          setProfile(updatedProfile)

          saveSession({
            key: 'profile',
            value: updatedProfile
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
