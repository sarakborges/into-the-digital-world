export const THEME_CATEGORIES = [
  'default',
  'crests',
  'families',
  'other'
] as const

export type ThemeCategory = (typeof THEME_CATEGORIES)[number]

export const THEMES = {
  default: ['default', 'alternative'],

  crests: [
    'courage',
    'friendship',
    'love',
    'knowledge',
    'sincerity',
    'reliability',
    'hope',
    'light'
  ],

  families: ['vb', 'dr', 'nsp', 'wg', 'jt', 'ds', 'me', 'nso', 'da'],

  other: ['hazard', 'warning']
} as const satisfies Record<ThemeCategory, ReadonlyArray<string>>

export type ThemeId = (typeof THEMES)[ThemeCategory][number]

const ALL_THEMES = new Set<string>(
  THEME_CATEGORIES.flatMap((category) => THEMES[category])
)

const BACKGROUND_THEMES = new Set<string>([
  ...THEMES.default,
  ...THEMES.crests
])

export const isThemeId = (theme: string): theme is ThemeId =>
  ALL_THEMES.has(theme)

export const hasThemeBackground = (theme: ThemeId): boolean =>
  BACKGROUND_THEMES.has(theme)
