import { NpcSavemon } from '@/GameData/Npcs/Savemon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const SaveGame002 = () => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  return (
    <SingleOptionDialog
      speaker={NpcSavemon}
      optionId="scene-savegame-002-continue"
      text={getTexts('SAVEGAME_002_TEXT')}
      onAction={() => {
        updateDigivice({ currentApp: undefined })
        closeScene()
      }}
    />
  )
}
