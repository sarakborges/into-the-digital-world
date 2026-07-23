import { useProfileStore } from '@/Stores/Profile.store'

import '@/Components/Digivice/Apps/AppPlayerProfile/AppPlayerProfile.style.scss'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

export const AppPlayerProfile = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  return (
    <div className="player-profile">
      <CharacterHeader character={{ ...profile, isPlayer: true }} lg />
    </div>
  )
}
