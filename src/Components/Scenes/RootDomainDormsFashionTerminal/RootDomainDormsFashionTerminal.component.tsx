import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'
import { FashionTrigger } from '@/GameData/Dialogs/Apps/Fashion/Trigger.dialog'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'

import './RootDomainDormsFashionTerminal.style.scss'

export const RootDomainDormsFashionTerminal = () => {
  const { profile } = useProfileStore((state) => state)
  const { dialog, setDialog } = useDialogStore((state) => state)

  const openFashion = () => {
    setDialog(!profile?.avatar ? FashionIntroduction : FashionTrigger)
  }

  return (
    <Button
      className="fashion-terminal"
      onClick={openFashion}
      disabled={!!dialog}
    />
  )
}
