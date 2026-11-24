import { getIntoTheDigitalWorld014 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/014.dialog'
import { getIntoTheDigitalWorld015 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/015.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { TRANSITION_DELAY_MS } from '@/Consts/Transitions.const'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './GennaiExplanationTopic.style.scss'

export const GennaiExplanationTopic = () => {
  const { dialogOptions, setDialogOptions } = useDialogOptionsStore(
    (state) => state
  )
  const handleTopic = (topic: string) => {
    if (topic === 'enough') {
      changeDialog(getIntoTheDigitalWorld015())
      setTimeout(() => setDialogOptions([]), TRANSITION_DELAY_MS)
      return
    }

    changeDialog(getIntoTheDigitalWorld014(topic))

    setTimeout(
      () =>
        setDialogOptions(
          dialogOptions.filter((dialogOption) => dialogOption !== topic)
        ),
      TRANSITION_DELAY_MS
    )
  }

  return (
    <div className="gennai-explanation-topic">
      {dialogOptions.map((option) => (
        <ShadowButton
          key={`gennai-explanation-topic-${option}`}
          onClick={() => handleTopic(option)}
          variation="small"
        >
          {getTexts(`ITDW_013_${option.toUpperCase()}`)}
        </ShadowButton>
      ))}
    </div>
  )
}
