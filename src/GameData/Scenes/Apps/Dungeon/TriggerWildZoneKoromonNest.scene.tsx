import type { DialogType } from '@/Types/Dialog.type'

import { AllDungeons } from '@/GameData/Dungeons'

import { getTexts } from '@/Helpers/Language'
import { enterDungeon } from '@/Helpers/Systems/Dungeon'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const DungeonTriggerWildZoneKoromonNest = () => {
  const { setScene } = useSceneStore((state) => state)

  const triggerDungeon = () => {
    enterDungeon(AllDungeons.wildZone.koromonNest)
  }

  const dialogOptions: DialogType = {
    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts('DUNGEON_WILDZONE_KOROMON_NEST_DEFAULT')}
          </Text>
        </div>
      </div>
    ),

    options: [
      {
        id: 'scene-trigger-wildzone-koromonnest-001-ignore',
        text: getTexts('DUNGEON_IGNORE'),
        action: () => setScene(null)
      },

      {
        id: 'scene-trigger-wildzone-koromonnest-001-enter',
        text: getTexts('DUNGEON_WILDZONE_KOROMON_NEST_TRIGGER'),
        action: triggerDungeon
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
