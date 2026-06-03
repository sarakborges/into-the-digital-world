import { ENCYCLOPEDIA_HEADER } from '@/Consts/EncyclopediaHeader.const'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/System/Button'

import './EncyclopediaHeader.style.scss'

export const EncyclopediaHeader = () => {
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const updateApp = (app: string) => {
    setDigivice({ ...digivice!, currentApp: app, currentDetails: undefined })
  }

  return (
    <header className="encyclopedia-header">
      {Object.keys(ENCYCLOPEDIA_HEADER).map((headerApp) => (
        <Button
          disabled={headerApp === digivice?.currentApp}
          onClick={() => updateApp(headerApp)}
        >
          {getTexts(`ENCYCLOPEDIA_HEADER_${headerApp.toLocaleUpperCase()}`)}
        </Button>
      ))}
    </header>
  )
}
