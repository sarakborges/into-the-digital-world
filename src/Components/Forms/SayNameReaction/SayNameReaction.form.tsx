import { getIntoTheDigitalWorld008 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/008.dialog'

import { getTexts } from '@/Helpers/Language'
import { setMeaningfulChoice } from '@/Helpers/Systems/Profile/setMeaningfulChoice.helper'

import { useDialogStore } from '@/Stores/Dialog.store'

import { Button } from '@/Components/DesignSystem/Button'

import './SayNameReaction.style.scss'

export const SayNameReaction = () => {
  const { setDialog } = useDialogStore((state) => state)

  const reactionOptions = {
    calm: getTexts('ITDW_007_CALM'),
    angry: getTexts('ITDW_007_ANGRY')
  }

  const handleReaction = (reaction: string) => {
    setMeaningfulChoice({
      choice: 'INTO_THE_DIGITAL_WORLD_NAME_REACTION',
      value: reaction
    })

    setDialog(getIntoTheDigitalWorld008())
  }

  return (
    <div className="say-name-reaction">
      {Object.keys(reactionOptions).map((option) => (
        <div key={`say-name-reaction-${option}`}>
          <Button onClick={() => handleReaction(option)}>
            {reactionOptions[option]}
          </Button>
        </div>
      ))}
    </div>
  )
}
