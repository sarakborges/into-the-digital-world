import { CgEye } from 'react-icons/cg'

import type { DialogType } from '@/Types/Dialog.type'

import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { enterDungeon } from '@/Helpers/Systems/Dungeon/enterDungeon.helper'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const DungeonTriggerWildZoneKoromonNest = () => {
  const triggerDungeon = () => {
    enterDungeon(DungeonWildZoneKoromonNest)
  }

  const dialogOptions: DialogType = {
    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts('DUNGEON_WILDZONE_KOROMON_NEST_DEFAULT')}
          </Text>
        </div>

        <div className="dialog-reactions dialog-reactions-options">
          <div>
            <Button onClick={triggerDungeon}>
              <CgEye />
              <Text>{getTexts('DUNGEON_WILDZONE_KOROMON_NEST_TRIGGER')}</Text>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
