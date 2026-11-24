import { getTexts } from '@/Helpers/Language'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const RootDomainLoungeOptions = () => {
  const dialogOptions = [
    {
      text: getTexts('ROOT_DOMAIN_LOUNGE_GOTO_ROOM'),
      action: () => changeScene('rootDomainDorms')
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
