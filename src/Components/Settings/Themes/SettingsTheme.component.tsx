import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { THEME_CATEGORIES, THEMES } from '@/Consts/Themes.const'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { UpdateTheme } from '@/Components/Settings/Theme/UpdateTheme.component'
import '@/Components/Settings/Themes/SettingsTheme.style.scss'

export const SettingsTheme = () => {
  return (
    <div className="settings-theme">
      <div className="themes-list">
        {THEME_CATEGORIES.map((category) => (
          <div key={`themes-list-${category}`}>
            <header>
              <Text>
                {getTexts(`THEME_CATEGORIES_${category.toLocaleUpperCase()}`)}
              </Text>

              <Text>{getTexts('THEMES_TITLE')}</Text>
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
