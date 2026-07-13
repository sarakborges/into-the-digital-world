import { CgEye } from 'react-icons/cg'

import type { DialogType } from '@/Types/Dialog.type'

import { AllDungeons } from '@/GameData/Dungeons'
import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { enterDungeon } from '@/Helpers/Systems/Dungeon'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const DungeonTriggerWildZoneKoromonNest = () => {
  const triggerDungeon = () => {
    enterDungeon(AllDungeons.wildZone.koromonNest)
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.navimon,

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
