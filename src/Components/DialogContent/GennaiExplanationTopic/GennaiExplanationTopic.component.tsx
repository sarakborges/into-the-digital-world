import { getIntoTheDigitalWorld009 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/009.dialog'
import { getIntoTheDigitalWorld010 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/010.dialog'

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
      changeDialog(getIntoTheDigitalWorld010())
      setTimeout(() => setDialogOptions([]), 600)
      return
    }

    changeDialog(getIntoTheDigitalWorld009(topic))

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
          {getTexts(`ITDW_008_${option.toUpperCase()}`)}
        </ShadowButton>
      ))}
    </div>
  )
}
