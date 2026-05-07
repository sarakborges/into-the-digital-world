import { getTexts } from '@/Helpers/getTexts.helper'
import { deleteSession } from '@/Helpers/deleteSession.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { useDigivice } from '@/Hooks/Digivice.hook'

export const AppLogoff = () => {
  const { profile, setProfile } = useProfile()
  const { digivice, setDigivice } = useDigivice()
  const { setScene } = useScene()

  if (!profile) {
    return
  }

  const returnToMainScreen = () => {
    setProfile(null)
    setScene(null)
    setDigivice({ ...digivice, isOpen: false })

    deleteSession({ key: 'profile' })
  }

  return (
    <Button onClick={returnToMainScreen}>
      <Portrait alt={getTexts('APPS_LOGOFF')} src="/apps/logoff.png" />
      <Text>{getTexts('APPS_LOGOFF')}</Text>
    </Button>
  )
}
