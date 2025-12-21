import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { getTexts } from '@/Texts'

import type { ProfileType } from '@/Types/Profile.type'

import { ProfileContext } from '@/Contexts/Profile.context'

import { ROUTES } from '@/Routes/Routes'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Input } from '@/Components/System/Input'

import './CreateProfile.style.scss'

export const CreateProfileTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const navigate = useNavigate()

  const { profile, setProfile } = profileContext

  if (!!profile.name) {
    return
  }

  const submitCreateProfile = (form) => {
    const formData = new FormData(form)
    const name = formData.get('name')

    if (!name) {
      alert(getTexts('CREATE_PROFILE_NO_NAME'))
      return
    }

    const newProfile: ProfileType = {
      name: name.toString(),
      level: 1,
      experience: 0,
      money: 0,

      cores: {
        digimon: {},
        element: {},
        family: {},
        attribute: {}
      }
    }

    setProfile(newProfile)
    localStorage.setItem('profile', JSON.stringify(newProfile))

    navigate(ROUTES.STARTER_SELECTION.path)
  }

  return (
    <main className="create-profile-template">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitCreateProfile(e.target)
        }}
      >
        <header>
          <Typography as="h1">{getTexts('CREATE_PROFILE_TITLE')}</Typography>
          <Typography as="h2">{getTexts('CREATE_PROFILE_SUBTITLE')}</Typography>
        </header>

        <Input label="What is your name?" name="name" />

        <Button id="starter-selection-submit" type="submit">
          {getTexts('CREATE_PROFILE_CONFIRM')}
        </Button>
      </form>
    </main>
  )
}
