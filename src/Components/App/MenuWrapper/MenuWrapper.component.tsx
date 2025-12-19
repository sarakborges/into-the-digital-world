import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { PLAYER_LEVELS } from '@/Consts/Levels.const'
import { SIDEBAR_MENU } from '@/Consts/Sidebar.const'

import { Typography } from '@/Components/System/Typography'
import { Link } from '@/Components/System/Link'
import { Portrait } from '@/Components/System/Portrait'

import { ExperienceBar } from '@/Components/App/ExperienceBar'

import './MenuWrapper.style.scss'

export const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  if (!profile?.name) {
    return <></>
  }

  const currentExp = profile.experience!
  const nextLevelExp = PLAYER_LEVELS[profile.level!].expToNextLevel

  return (
    <div className="menu-wrapper">
      <aside className="sidebar">
        <section className="tamer">
          <header>
            {!!profile.avatar && (
              <Portrait
                alt={`Tamer ${profile.name}`}
                src={`./avatars/${profile.avatar}.jpg`}
                sm
              />
            )}

            {!profile.avatar && (
              <Portrait
                alt={`Tamer ${profile.name}`}
                placeholder={profile.name?.slice(0, 1)}
                sm
              />
            )}

            <main>
              <Typography as="h2">{profile.name}</Typography>

              <Typography as="span">
                <>Tamer level: </>
                <>{profile.level}</>
              </Typography>
            </main>
          </header>

          <ExperienceBar {...{ currentExp, nextLevelExp }} />
        </section>

        <nav>
          <Typography as="h2">{getTexts('SIDEBAR_MENU_TITLE')}</Typography>

          {SIDEBAR_MENU.map((sidebarItem) => (
            <Link to={sidebarItem.path} key={`sidebar-menu-${sidebarItem.id}`}>
              {sidebarItem.icon}
              <Typography as="span">{sidebarItem.text}</Typography>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  )
}
