import { THEMES } from '@/Consts/Themes.const'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { Text } from '@/Components/System/Text'

import { UpdateTheme } from '@/Components/App/UpdateTheme'

import './SettingsTheme.style.scss'

export const SettingsTheme = () => {
  return (
    <div className="settings-theme">
      <div className="themes-list">
        {Object.keys(THEMES).map((category) => (
          <div key={`themes-list-${category}`}>
            <header>
              <Text>
                {getTexts(`THEME_CATEGORIES_${category.toLocaleUpperCase()}`)}
              </Text>

              <Text>{getTexts('THEMES_TITLE')}</Text>
            </header>

            <main>
              {Object.keys(THEMES[category]).map((theme) => (
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
