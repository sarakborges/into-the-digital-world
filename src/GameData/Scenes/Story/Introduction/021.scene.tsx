import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { Introduction022 } from '@/GameData/Scenes/Story/Introduction/022.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const Introduction021 = () => {
  const { setScene } = useSceneStore((state) => state)

  return (
    <SingleOptionDialog
      speaker={NpcDressmon}
      optionId="scene-introduction-025-confirm"
      optionText={getTexts('SCENES_CONFIRM_BUTTON')}
      text={getTexts('INTRODUCTION_021_TEXT')}
      onAction={() => {
        updateDigivice({
          isOpen: false,
          currentApp: undefined
        })

        setScene({ component: Introduction022 })
      }}
    />
  )
}
