import type {DialogType} from '@/Types/Dialog.type'

import {getDialogs} from '@/Helpers/Language'

import {AllNpcs} from '@/GameData/Npcs'

import {useSceneStore} from '@/Stores/Scene.store'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'
import {SaveGame} from '@/Components/Digivice/Apps/SaveGame'

export const SaveGame001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getDialogs('SAVEGAME_001_TEXT')}</Text>
        </div>

        <SaveGame />
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-001-cancel',
        text: getDialogs('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
