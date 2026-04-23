import { THEMES } from '@/Consts/Themes.const'

import { getTexts } from '@/Texts'

import { Text } from '@/Components/System/Text'

import { UpdateTheme } from '@/Components/App/UpdateTheme'

import './SettingsTheme.style.scss'

export const SettingsTheme = () => {
  return (
    <div className="settings-theme">
      <Text>{getTexts('THEMES_TITLE')}</Text>

      <div className="themes-list">
        {THEMES.map((theme) => (
          <UpdateTheme key={`themes-list-theme-${theme}`} theme={theme} />
        ))}
      </div>
    </div>
  )
}
