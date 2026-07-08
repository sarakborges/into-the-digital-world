import { getTranslation } from '@/Helpers/Language'

import { ENCYCLOPEDIA_HEADER } from '@/Consts/EncyclopediaHeader.const'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button'

import './EncyclopediaHeader.style.scss'

export const EncyclopediaHeader = () => {
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  const updateApp = (app: string) => {
    setDigivice({ ...digivice, currentApp: app, currentDetails: undefined })
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
          {getTranslation(
            `ENCYCLOPEDIA_HEADER_${headerApp.toLocaleUpperCase()}`
          )}
        </Button>
      ))}
    </header>
  )
}
