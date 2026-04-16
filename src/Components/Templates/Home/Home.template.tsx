import { useProfile } from '@/Hooks/Profile.hook'

import { Button } from '@/Components/System/Button'

import './Home.style.scss'

export const HomeTemplate = () => {
  const { setProfile } = useProfile()

  const themes = [
    'default',
    'courage',
    'friendship',
    'knowledge',
    'sincerity',
    'love',
    'reliability',
    'hope',
    'light'
  ]

  const changeTheme = (theme: string) => {
    setProfile((prev) => {
      const updatedProfile = {
        ...prev!,
        theme
      }

      localStorage.setItem('profile', JSON.stringify(updatedProfile))

      return updatedProfile
    })
  }

  return (
    <main className="gameboard">
      <main className="template-buttons">
        {themes.map((theme) => (
          <Button
            onClick={() => changeTheme(theme)}
            key={`theme-${theme}`}
            className={`theme-${theme}`}
          >
            {theme}
          </Button>
        ))}
      </main>
    </main>
  )
}
