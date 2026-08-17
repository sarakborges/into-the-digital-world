import { getTexts } from '@/Helpers/Language'

import { THEMES } from '@/Consts/Themes.const'

import { Text } from '@/Components/DesignSystem/Text'
import { UpdateTheme } from '@/Components/Settings/Theme'

import './SettingsTheme.style.scss'

export const SettingsTheme = () => {
  const themeGroups = Object.keys(THEMES)

  return (
    <div className="settings-theme">
      <Text>{getTexts('THEMES_TITLE')}</Text>

      <div className="themes-list">
        {themeGroups.map((category) => (
          <div key={`themes-list-${category}`}>
            <header>
              <Text>
                {getTexts(`THEME_CATEGORIES_${category.toLocaleUpperCase()}`)}
              </Text>
            </header>

            <main>
              {THEMES[category].map((theme) => (
                <UpdateTheme
                  key={`themes-list-${category}-theme-${theme}`}
                  theme={theme}
                />
              ))}
            </main>
          </div>
        ))}
      </div>
    </div>
  )
}
