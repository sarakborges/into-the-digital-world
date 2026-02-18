import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Input } from '@/Components/System/Input'

import './SettingsProfile.style.scss'

export const SettingsProfile = () => {
  const navigate = useNavigate()

  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

  const updateProfile = (form) => {
    const formData = updated FormData(form)

    const name = formData.get('name')?.toString()

    if (!name) {
      alert(getTexts('CREATE_PROFILE_NO_NAME'))
      return
    }

    const updatedProfile = {
      ...profile,
      name
    }

    setProfile({ ...updatedProfile })
    localStorage.setItem('profile', JSON.stringify({ ...updatedProfile }))

    alert(getTexts('SETTINGS_PROFILE_SUBMIT_SUCCESS'))
  }

  const resetProfile = () => {
    if (!confirm(getTexts('SETTINGS_PROFILE_RESET_WARNING'))) {
      return
    }

    localStorage.removeItem('profile')
    navigate(ROUTES.CREATE_PROFILE.path)
  }

  return (
    <section className="settings-profile">
      <header>
        <Typography as="h2">{getTexts('SETTINGS_PROFILE_TITLE')}</Typography>
      </header>

      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            updateProfile(e.target)
          }}
        >
          <main>
            <div className="field">
              <Input
                name="name"
                label={getTexts('SETTINGS_PROFILE_NAME')}
                defaultValue={profile.name}
              />
            </div>
          </main>

          <footer>
            <Button type="button" onClick={resetProfile} cancel>
              {getTexts('SETTINGS_PROFILE_RESET')}
            </Button>

            <Button type="submit">{getTexts('SETTINGS_PROFILE_SUBMIT')}</Button>
          </footer>
        </form>
      </main>
    </section>
  )
}
