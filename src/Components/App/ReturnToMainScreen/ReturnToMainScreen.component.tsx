import { getTexts } from '@/Helpers/getTexts.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { deleteSession } from '@/Helpers/deleteSession.helper'

import { Button } from '@/Components/System/Button'

import './ReturnToMainScreen.style.scss'

export const ReturnToMainScreen = () => {
  const { profile, setProfile } = useProfile()

  if (!profile) {
    return
  }

  const { setScene } = useScene()
  const { settings, setSettings } = useSettings()

  const returnToMainScreen = () => {
    setProfile(null)
    setScene(null)
    setSettings({ ...settings, isOpen: false })
    deleteSession({ key: 'profile' })
  }

  return (
    <div className="return-to-main-screen">
      <Button onClick={returnToMainScreen}>
        {getTexts('RETURN_TO_MAIN_SCREEN')}
      </Button>
    </div>
  )
}
