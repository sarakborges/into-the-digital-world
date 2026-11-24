import { useEffect } from 'react'

import { RootDomainLoungeDialog } from '@/GameData/Dialogs/Scenes/RootDomainLounge.dialog'
import { getIntoTheDigitalWorld031 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/031.dialog'
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
      changeDialog(getIntoTheDigitalWorld031())
      return
    }

    changeDialog(RootDomainLoungeDialog)
  }, [])

  if (!game?.hasGameStarted || !profile) {
    return
  }

  return <main className="root-domain-lounge"></main>
}
