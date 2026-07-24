import { GetStarterDigimon006 } from '@/GameData/Scenes/Story/GetStarterDigimon/006.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const GetStarterDigimon005 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const dorimonMeeting = profile?.meaningfulChoices['dorimonMeeting']

  if (!profile || !dorimonMeeting) {
    return
  }

  return (
    <SingleOptionDialog
      optionId="scene-getstarterdigimon-005-continue"
      text={getTexts(
        `GETSTARTERDIGIMON_005_TEXT_${dorimonMeeting.toLocaleUpperCase()}`
      )}
      onAction={() => setScene({ component: GetStarterDigimon006 })}
    />
  )
}
