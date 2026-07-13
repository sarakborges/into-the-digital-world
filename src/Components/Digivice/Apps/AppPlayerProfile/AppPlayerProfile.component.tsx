import { useProfileStore } from '@/Stores/Profile.store'

import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

import './AppPlayerProfile.style.scss'

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
