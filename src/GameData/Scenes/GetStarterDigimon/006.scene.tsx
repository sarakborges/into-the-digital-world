import type {DialogType} from '@/Types/Dialog.type'

import {AllNpcs} from '@/GameData/Npcs'

import {getDialogs} from '@/Helpers/Language'

import {Text} from '@/Components/DesignSystem/Text'

import {useSceneStore} from '@/Stores/Scene.store'
import {useProfileStore} from '@/Stores/Profile.store'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const GetStarterDigimon006 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(
            `GETSTARTERDIGIMON_006_TEXT_${profile.meaningfulChoices.dorimonMeeting.toLocaleUpperCase()}`
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-006-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '007'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
