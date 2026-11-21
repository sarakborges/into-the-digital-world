import { getIntoTheDigitalWorld011 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog, setMeaningfulChoice } from '@/Helpers/Systems/Dialogs'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './SayNameReaction.style.scss'

const reactionOptions = [
  'calm',
  'friendly',
  'wary',
  'nervous',
  'blunt',
  'curious',
  'playful'
] as const

type NameReaction = (typeof reactionOptions)[number]

export const SayNameReaction = () => {
  const handleReaction = (reaction: NameReaction) => {
    setMeaningfulChoice({
      choice: 'INTO_THE_DIGITAL_WORLD_NAME_REACTION',
      value: reaction
    })

    changeDialog(getIntoTheDigitalWorld011())
  }

  return (
    <div className="say-name-reaction">
      {reactionOptions.map((option) => (
        <ShadowButton
          key={`say-name-reaction-${option}`}
          onClick={() => handleReaction(option)}
        >
          {getTexts(`ITDW_010_${option.toUpperCase()}`)}
        </ShadowButton>
      ))}
    </div>
  )
}
