import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { AvatarCustomization000 } from '@/GameData/Scenes/Apps/AvatarCustomization/000.scene'
import { AvatarCustomization003 } from '@/GameData/Scenes/Apps/AvatarCustomization/003.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

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
    if (doneQuests.includes(AvatarFixingQuest.id)) {
      setScene({ component: AvatarCustomization003 })

      return
    }

    if (!doneQuests.includes(AvatarFixingQuest.id)) {
      setScene({ component: AvatarCustomization000 })

      return
    }
  }

  const dialogOptions: DialogType = {
    speaker: NpcDressmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts(
              doneQuests.includes(AvatarFixingQuest.id)
                ? 'AVATARCUSTOMIZATION_001_TEXT'
                : 'INTRODUCTION_020_TEXT'
            )}
          </Text>
        </div>

        <div className="dialog-reactions dialog-reactions-options">
          <Button onClick={triggerCustomization}>
            {!!doneQuests.includes(AvatarFixingQuest.id) && (
              <>
                <HiOutlineChatBubbleLeftEllipsis />
                <Text>{getTexts('AVATARCUSTOMIZATION_TRIGGER')}</Text>
              </>
            )}

            {!doneQuests.includes(AvatarFixingQuest.id) && (
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
