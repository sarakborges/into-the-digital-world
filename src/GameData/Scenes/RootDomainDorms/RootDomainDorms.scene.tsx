import { useLayoutEffect, useRef } from 'react'

import { RootDomainDormsDialog } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'
import { IntoTheDigitalWorld001 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/001.dialog'

import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

import './RootDomainDorms.style.scss'

export const RootDomainDorms = () => {
  const { profile } = useProfileStore((state) => state)
  const { game, isTransitioning } = useGameStore((state) => state)
  const hasInitializedDialog = useRef(false)

  useLayoutEffect(() => {
    if (isTransitioning || hasInitializedDialog.current) {
      return
    }

    hasInitializedDialog.current = true

    if (!profile.name) {
      changeDialog(IntoTheDigitalWorld001)
      return
    }

    changeDialog(RootDomainDormsDialog)
  }, [isTransitioning, profile.name])

  if (!game?.hasGameStarted || !profile) {
    return
  }

  return <main className="root-domain-dorms"></main>
}
