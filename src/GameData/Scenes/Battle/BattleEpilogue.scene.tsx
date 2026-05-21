import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleEpilogue = () => {
  const { setScene } = useScene()
  const { battle, setBattle } = useBattle()
  const { profile, setProfile } = useProfile()

  const battleResult = battle?.turnOrder.every(
    (digimon) => digimon.party === 'allies'
  )
    ? 'victory'
    : 'defeat'

  console.log(battle?.turnOrder)

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
          let updatedProfile = {
            ...profile!,
            currentlyInBattle: false
          }

          if (battleResult === 'victory') {
            updatedProfile = {
              ...updatedProfile!,
              currentZone: {
                ...profile!.currentZone,
                ...battle?.mapPosition
              }
            }
          }

          if (battleResult === 'defeat') {
            updatedProfile = {
              ...updatedProfile!,
              currentZone: {
                id: 'RootDomainRestRoom1',
                x: 3,
                y: 5
              }
            }
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
