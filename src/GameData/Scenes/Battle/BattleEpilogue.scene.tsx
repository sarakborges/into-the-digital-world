import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { AllZones } from '@/GameData/Zones'

import { useBattle } from '@/Hooks/Battle.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { warpTo } from '@/Helpers/warpTo.helper'
import { useGame } from '@/Hooks/Game.hook'

export const BattleEpilogue = () => {
  const { scene, setScene } = useScene()
  const { battle, setBattle } = useBattle()
  const { profile, setProfile } = useProfile()
  const { setGame } = useGame()

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
              setGame,
              profile: updatedProfile!,
              setProfile,
              ...battle?.mapPosition!,
              zoneId: updatedProfile!.currentZone.id
            })
          }

          if (battle!.result === 'defeat') {
            warpTo({
              setGame,
              profile: updatedProfile!,
              setProfile,
              x: 3,
              y: 5,
              zoneId: AllZones.rootDomainRestRoom1({ scene: scene! }).id
            })
          }

          setBattle(null)
          setScene(null)

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
