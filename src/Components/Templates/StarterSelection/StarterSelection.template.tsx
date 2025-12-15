import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { ROUTES } from '@/Routes/Routes'

import { STARTERS } from '@/GameData/Starters'

import { Typography } from '@/Components/System/Typography'
import { Input } from '@/Components/System/Input'
import { Button } from '@/Components/System/Button'

import { StarterDigimonCard } from '@/Components/App/StarterDigimonCard'

import './StarterSelection.style.scss'

export const StarterSelectionTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const navigate = useNavigate()

  const { profile, setProfile } = profileContext

  if (!!profile.partners?.length) {
    return
  }

  const submitStarterSelection = () => {
    const starterId = (
      document.querySelector(
        '[name=starter-digimon]:checked'
      ) as HTMLInputElement
    )?.value

    if (!starterId) {
      alert('Select a partner!')
    }

    const name = (
      document.querySelector('[name=starter-name]') as HTMLInputElement
    )?.value

    const starterPartner = {
      id: 1,
      name: name || '',
      baseDigimon: starterId,
      isStarter: true,
      level: 1,
      experience: 0
    }

    const newProfile = {
      ...profile,
      partners: [{ ...starterPartner }],
      party: [1],
      seenDigimon: [starterPartner.baseDigimon]
    }

    setProfile(newProfile)
    localStorage.setItem('profile', JSON.stringify(newProfile))

    navigate(ROUTES.HOME.path)
  }

  const selectDigimon = () => {
    document
      .querySelector('#starter-selection-submit')
      ?.removeAttribute('disabled')
  }

  return (
    <main className="starter-selection-template">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitStarterSelection()
        }}
      >
        <header>
          <Typography as="h1">
            {getTexts('STARTER_SELECTION_TITLE').replace(
              ':profile-name',
              profile.name
            )}
          </Typography>

          <Typography as="h2">
            {getTexts('STARTER_SELECTION_SUBTITLE')}
          </Typography>
        </header>

        <ul className="starters-list">
          {STARTERS.map((starterItem) => (
            <li
              key={`starter-list-item-${starterItem.id}`}
              className="starters-list-item"
            >
              <label>
                <Input
                  type="radio"
                  name="starter-digimon"
                  value={starterItem.id}
                  onChange={selectDigimon}
                />

                <StarterDigimonCard digimon={starterItem} />
              </label>
            </li>
          ))}
        </ul>

        <div className="starter-selection-confirm">
          <Input
            name="starter-name"
            label="Do you want to name your partner? (optional)"
            placeholder="Partner name"
          />

          <Button id="starter-selection-submit" type="submit" disabled>
            {getTexts('STARTER_SELECTION_CONFIRM')}
          </Button>
        </div>
      </form>
    </main>
  )
}
