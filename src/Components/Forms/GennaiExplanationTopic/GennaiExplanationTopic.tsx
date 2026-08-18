import { getIntoTheDigitalWorld014 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/014.dialog'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'

import { Button } from '@/Components/DesignSystem/Button'

import './GennaiExplanationTopic.style.scss'

export const GennaiExplanationTopic = () => {
  const { dialogOptions, setDialogOptions } = useDialogOptionsStore(
    (state) => state
  )
  const { setDialog } = useDialogStore((state) => state)

  const handleTopic = (topic: string) => {
    setDialog(getIntoTheDigitalWorld014(topic))

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
        <div key={`gennai-explanation-topic-${option}`}>
          <Button onClick={() => handleTopic(option)}>
            {getTexts(`ITDW_013_${option.toUpperCase()}`)}
          </Button>
        </div>
      ))}
    </div>
  )
}
