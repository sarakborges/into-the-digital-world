import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { AllScenes } from '@/GameData/Scenes'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { getTexts } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const AvatarCustomization001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const doneQuests = Object.keys(profile.quests).filter((quest) =>
    isQuestDone(quest)
  )

  const triggerCustomization = () => {
    if (!!doneQuests.includes(AllQuests.avatarFixing.id)) {
      setScene(AllScenes.avatarCustomization['003'])

      return
    }

    if (!doneQuests.includes(AllQuests.avatarFixing.id)) {
      setScene(AllScenes.avatarCustomization['000'])

      return
    }
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts(
              !!doneQuests.includes(AllQuests.avatarFixing.id)
                ? 'AVATARCUSTOMIZATION_001_TEXT'
                : 'INTRODUCTION_020_TEXT'
            )}
          </Text>
        </div>

        <div className="dialog-reactions dialog-reactions-options">
          <Button onClick={triggerCustomization}>
            {!!doneQuests.includes(AllQuests.avatarFixing.id) && (
              <>
                <HiOutlineChatBubbleLeftEllipsis />
                <Text>{getTexts('AVATARCUSTOMIZATION_TRIGGER')}</Text>
              </>
            )}

            {!doneQuests.includes(AllQuests.avatarFixing.id) && (
              <>
                <AiOutlineExclamationCircle />
                <Text>{getTexts('INTRODUCTION_020_TRIGGER')}</Text>
              </>
            )}
          </Button>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
