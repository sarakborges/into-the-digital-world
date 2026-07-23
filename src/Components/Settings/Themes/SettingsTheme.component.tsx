import { getTexts } from '@/Helpers/Language'
import { getThemeGroups } from '@/Helpers/Systems/Settings'

import { Text } from '@/Components/DesignSystem/Text'
import { UpdateTheme } from '@/Components/Settings/Theme'
import '@/Components/Settings/Themes/SettingsTheme.style.scss'

export const SettingsTheme = () => {
  const themeGroups = getThemeGroups()

  return (
    <div className="settings-theme">
      <div className="themes-list">
        {themeGroups.map(({ category, themes }) => (
          <div key={`themes-list-${category}`}>
            <header>
              <Text>
                {getTexts(`THEME_CATEGORIES_${category.toLocaleUpperCase()}`)}
              </Text>

              <Text>{getTexts('THEMES_TITLE')}</Text>
            </header>

            <main>
              {themes.map((theme) => (
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
