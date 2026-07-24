import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { ENCYCLOPEDIA_HEADER } from '@/Consts/EncyclopediaHeader.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import '@/Components/Digivice/Apps/EncyclopediaHeader/EncyclopediaHeader.style.scss'

export const EncyclopediaHeader = () => {
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  const updateApp = (app: string) => {
    const updatedDigivice = { ...digivice, currentApp: app }

    delete updatedDigivice.currentDetails
    setDigivice(updatedDigivice)
  }

  return (
    <header className="encyclopedia-header">
      {Object.keys(ENCYCLOPEDIA_HEADER).map((headerApp) => (
        <Button
          disabled={headerApp === digivice?.currentApp}
          onClick={() => updateApp(headerApp)}
          style="secondary"
          key={`encyclopedia-header-${headerApp}`}
        >
          {getTexts(`ENCYCLOPEDIA_HEADER_${headerApp.toLocaleUpperCase()}`)}
        </Button>
      ))}
    </header>
  )
}
