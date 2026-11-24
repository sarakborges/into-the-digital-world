import { useEffect } from 'react'

import { getSortedProfiles, loadProfiles } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { GameFile } from '@/Components/Global/GameFile'

import './StartScreenSavedGames.style.scss'

export const StartScreenSavedGames = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  useEffect(() => {
    loadProfiles()
  }, [profile])

  return (
    <div className="saved-games">
      {!!savedProfiles?.length && (
        <>
          <main className="games-list">
            {getSortedProfiles(savedProfiles || []).map((profile) => (
              <GameFile profile={profile} key={`savedProfiles-${profile.id}`} />
            ))}
          </main>
        </>
      )}
    </div>
  )
}
