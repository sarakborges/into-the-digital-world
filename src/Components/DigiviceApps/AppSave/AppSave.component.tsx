import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'
import { saveProfile } from '@/Helpers/saveProfile.helper'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { useDigivice } from '@/Hooks/Digivice.hook'

export const AppSave = () => {
  const { profile } = useProfile()
  const { savedProfiles } = useSavedProfiles()
  const { scene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  if (!profile) {
    return
  }

  const saveGame = () => {
    try {
      if (!!scene) {
        alert(getTexts('SAVE_DISABLED'))
        return
      }

      saveProfile({ profile, savedProfiles: savedProfiles || [] })
      alert(getTexts('GAME_SAVED'))

      setDigivice({ ...digivice, isOpen: false })
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <Button onClick={saveGame}>
      <Portrait alt={getTexts('APPS_SAVE')} src="/apps/save.png" />
      <Text>{getTexts('APPS_SAVE')}</Text>
    </Button>
  )
}
