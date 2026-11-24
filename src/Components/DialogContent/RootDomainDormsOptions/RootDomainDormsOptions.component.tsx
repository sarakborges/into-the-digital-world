import { FashionTrigger } from '@/GameData/Dialogs/Apps/Fashion/Trigger.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { saveGame } from '@/Helpers/Systems/Profile'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const RootDomainDormsOptions = () => {
  const dialogOptions = [
    {
      text: getTexts('ROOT_DOMAIN_DORMS_OPEN_FASHION'),
      action: () => changeDialog(FashionTrigger)
    },

    {
      text: getTexts('ROOT_DOMAIN_DORMS_OPEN_SAVE'),
      action: saveGame
    },

    {
      text: getTexts('ROOT_DOMAIN_DORMS_LEAVE'),
      action: () => changeScene('rootDomainLounge')
    }
  ]

  return (
    <div className="dialog-options">
      {dialogOptions.map((option) => (
        <ShadowButton
          key={`rootdomaindormsoptions-${option.text}`}
          onClick={option.action}
          variation="small"
        >
          {option.text}
        </ShadowButton>
      ))}
    </div>
  )
}
