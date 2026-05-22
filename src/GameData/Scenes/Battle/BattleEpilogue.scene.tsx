import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import * as Zones from '@/GameData/Zones'

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

  const battleResult = battle?.turnOrder.every(
    (digimon) => digimon.party === 'allies'
  )
    ? 'victory'
    : 'defeat'

  const dialogOptions: DialogType = {
    content: (
      <Text as="p">
        {getDialogs(`BATTLE_EPILOGUE_${battleResult.toLocaleUpperCase()}`)}
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

          if (battleResult === 'victory') {
            warpTo({
              setGame,
              profile: updatedProfile!,
              setProfile,
              ...battle?.mapPosition!,
              zoneId: updatedProfile!.currentZone.id
            })
          }

          if (battleResult === 'defeat') {
            warpTo({
              setGame,
              profile: updatedProfile!,
              setProfile,
              x: 3,
              y: 5,
              zoneId: Zones.RootDomainRestRoom1({ scene: scene! }).id
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
