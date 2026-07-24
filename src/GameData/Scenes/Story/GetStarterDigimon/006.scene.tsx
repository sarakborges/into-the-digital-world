import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon007 } from '@/GameData/Scenes/Story/GetStarterDigimon/007.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const GetStarterDigimon006 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const dorimonMeeting = profile?.meaningfulChoices['dorimonMeeting']

  if (!profile || !dorimonMeeting) {
    return
  }

  return (
    <SingleOptionDialog
      speaker={NpcGennai}
      optionId="scene-getstarterdigimon-006-continue"
      text={getTexts(
        `GETSTARTERDIGIMON_006_TEXT_${dorimonMeeting.toLocaleUpperCase()}`
      )}
      onAction={() => setScene({ component: GetStarterDigimon007 })}
    />
  )
}
