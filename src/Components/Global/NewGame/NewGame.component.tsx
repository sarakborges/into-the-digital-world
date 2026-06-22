import type {ProfileType} from '@/Types/Profile.type'

import {AllNpcs} from '@/GameData/Npcs'

import {getTexts} from '@/Helpers/Language'

import {useProfileStore} from '@/Stores/Profile.store'
import {useSceneStore} from '@/Stores/Scene.store'
import {useDigiviceStore} from '@/Stores/Digivice.store'

import {Button} from '@/Components/DesignSystem/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const { setProfile } = useProfileStore((state) => state)
  const { setDigivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const createNewProfile = () => {
    const newProfile: ProfileType = {
      id: 0,
      name: '',
      lastSave: new Date(),
      currentTitle: 'chosenChild',
      currentScene: 'introduction',

      party: [],
      titles: ['chosenChild'],
      researches: [],

      quests: {},
      items: {},
      meaningfulChoices: {},
      partnerDigimons: {},

      npcAcquaintances: {
        ...AllNpcs.appmon
      },

      currentZone: {
        id: 'rootDomain',
        map: 'restRoom',
        x: 2,
        y: 3
      }
    }

    setProfile(newProfile)
    setDigivice({ isOpen: false })

    setScene({
      currentScene: 'introduction',
      currentStage: '001'
    })
  }

  return (
    <div className="new-game">
      <Button style="secondary" onClick={createNewProfile}>
        {getTexts('START_NEW_GAME')}
      </Button>
    </div>
  )
}
