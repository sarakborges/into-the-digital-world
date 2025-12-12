import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { AVATARS } from '@/Consts/Avatars.const'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Input } from '@/Components/System/Input'
import { Portrait } from '@/Components/System/Portrait'

import './SettingsAvatar.style.scss'

export const SettingsAvatar = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

  const updateAvatar = (form) => {
    const formData = new FormData(form)

    const avatar = formData.get('avatar')?.toString()

    const newProfile = {
      ...profile,
      avatar
    }

    setProfile({ ...newProfile })
    localStorage.setItem('profile', JSON.stringify({ ...newProfile }))

    alert(getTexts('SETTINGS_AVATAR_SUBMIT_SUCCESS'))
  }

  return (
    <section className="settings-avatar">
      <Typography as="h2">{getTexts('SETTINGS_AVATAR_TITLE')}</Typography>

      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            updateAvatar(e.target)
          }}
        >
          <main className="avatar-categories">
            {AVATARS.map((avatarCategory) => (
              <section key={`settings-avatar-${avatarCategory.id}`}>
                <Typography as="h2">{avatarCategory.title}</Typography>

                <ul>
                  {avatarCategory.items.map((avatarItem) => (
                    <li
                      key={`settings-avatar-${avatarCategory.id}-${avatarItem}`}
                    >
                      <label>
                        <Input
                          type="radio"
                          name="avatar"
                          value={`${avatarCategory.id}/${avatarItem}`}
                          defaultChecked={
                            profile.avatar ===
                            `${avatarCategory.id}/${avatarItem}`
                          }
                        />

                        {!!avatarItem && (
                          <Portrait
                            src={`./avatars/${avatarCategory.id}/${avatarItem}.jpg`}
                            alt={getTexts('SETTINGS_PROFILE_AVATAR_EMPTY')}
                          />
                        )}

                        {!avatarItem && (
                          <Portrait
                            alt={getTexts('SETTINGS_PROFILE_AVATAR_EMPTY')}
                            placeholder={profile.name?.slice(0, 1)}
                          />
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </main>

          <footer>
            <Button type="submit">{getTexts('SETTINGS_AVATAR_SUBMIT')}</Button>
          </footer>
        </form>
      </main>
    </section>
  )
}
