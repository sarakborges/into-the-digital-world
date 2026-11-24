import { getIntoTheDigitalWorld012 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/012.dialog'
import { getIntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './GennaiExplanationTopic.style.scss'

export const GennaiExplanationTopic = () => {
  const { dialogOptions, setDialogOptions } = useDialogOptionsStore(
    (state) => state
  )
  const handleTopic = (topic: string) => {
    if (topic === 'enough') {
      changeDialog(getIntoTheDigitalWorld013())
      setTimeout(() => setDialogOptions([]), 600)
      return
    }

    changeDialog(getIntoTheDigitalWorld012(topic))

    setTimeout(
      () =>
        setDialogOptions(
          dialogOptions.filter((dialogOption) => dialogOption !== topic)
        ),
      600
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
          {getTexts(`ITDW_011_${option.toUpperCase()}`)}
        </ShadowButton>
      ))}
    </div>
  )
}
