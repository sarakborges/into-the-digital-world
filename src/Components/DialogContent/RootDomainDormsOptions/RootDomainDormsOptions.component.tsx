import { FashionTrigger } from '@/GameData/Dialogs/Apps/Fashion/Trigger.dialog'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './RootDomainDormsOptions.style.scss'

export const RootDomainDormsOptions = () => {
  const { setDialog } = useDialogStore((state) => state)

  const openFashion = () => {
    setDialog(FashionTrigger)
  }

  return (
    <div className="skip-introduction">
      <ShadowButton onClick={openFashion}>
        {getTexts('ROOT_DOMAIN_DORMS_OPEN_FASHION')}
      </ShadowButton>
    </div>
  )
}
