import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import type { ProfileType } from '@/Types/Profile.type'

import { loadData } from '@/Helpers/loadData.helper'

import { Button } from '@/Components/System/Button'
import { DeleteGame } from '../DeleteGame'
import { Text } from '@/Components/System/Text'

export const StartScreen = () => {
  const { savedProfiles } = useSavedProfiles()
  const { setProfile } = useProfile()
  const { setScene } = useScene()

  const createNewProfile = () => {
    const sortedProfiles = [...(savedProfiles || [])].sort(
      (a, b) => b.id - a.id
    )

    const newId = (sortedProfiles?.[0]?.id ?? 0) + 1
    const newProfile: ProfileType = { id: newId, name: '' }

    setProfile(newProfile)
    setScene({ currentScene: 'introduction', currentStage: '001' })
  }

  const loadProfile = (id) => {
    const profile = loadData({ key: `profile${id}` })

    if (!profile) {
      return
    }

    setProfile(profile)
  }

  return (
    <>
      <Button onClick={createNewProfile}>Start new game</Button>

      {savedProfiles?.map((profile) => (
        <div key={`savedProfiles-${profile.id}`}>
          <Text>
            {profile.name} (last save at <>{new Date().toDateString()}</>)
          </Text>

          <Button onClick={() => loadProfile(profile.id)}>Load game</Button>

          <DeleteGame profileId={profile.id} />
        </div>
      ))}
    </>
  )
}
