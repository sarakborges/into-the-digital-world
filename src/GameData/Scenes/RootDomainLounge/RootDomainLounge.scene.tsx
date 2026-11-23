import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

import './RootDomainLounge.style.scss'

export const RootDomainLounge = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!game?.hasGameStarted || !profile) {
    return
  }

  return <main className="root-domain-lounge"></main>
}
