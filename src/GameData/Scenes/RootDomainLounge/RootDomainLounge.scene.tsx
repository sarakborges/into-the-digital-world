import { useEffect } from 'react'

import { RootDomainLoungeDialog } from '@/GameData/Dialogs/Scenes/RootDomainLounge.dialog'
import { getIntoTheDigitalWorld032 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/032.dialog'
import { IntoTheDigitalWorldQuest } from '@/GameData/Quests/IntoTheDigitalWorld.quest'

import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useProfileQuestsStore } from '@/Stores/ProfileQuests.store'

import './RootDomainLounge.style.scss'

export const RootDomainLounge = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { profileQuests } = useProfileQuestsStore((state) => state)

  useEffect(() => {
    const idtwQuest = profileQuests?.[IntoTheDigitalWorldQuest.id]

    if (!idtwQuest || idtwQuest.progress !== 'completed') {
      changeDialog(getIntoTheDigitalWorld032())
      return
    }

    changeDialog(RootDomainLoungeDialog)
  }, [])

  if (!game?.hasGameStarted || !profile) {
    return
  }

  return <main className="root-domain-lounge"></main>
}
