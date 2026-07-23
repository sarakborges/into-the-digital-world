import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getThemeGroups } from '@/Helpers/Systems/Settings/getThemeGroups.helper'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { UpdateTheme } from '@/Components/Settings/Theme/UpdateTheme.component'
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
