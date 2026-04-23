import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Texts'
import { loadData } from '@/Helpers/loadData.helper'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import { DeleteGame } from '@/Components/App/DeleteGame'

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
      <Button onClick={createNewProfile}>{getTexts('START_NEW_GAME')}</Button>

      {savedProfiles?.map((profile) => (
        <div key={`savedProfiles-${profile.id}`}>
          <Text>
            {getTexts('GAME_FILE_TITLE')
              .replace(`[NAME]`, profile.name)
              .replace(`[TIME]`, new Date().toDateString())}
          </Text>

          <Button onClick={() => loadProfile(profile.id)}>
            {getTexts('LOAD_GAME')}
          </Button>

          <DeleteGame profileId={profile.id} />
        </div>
      ))}
    </>
  )
}
