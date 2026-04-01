import { useContext } from 'react'
import { NavLink } from 'react-router'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { SIDEBAR_BOTTOM_MENU, SIDEBAR_MENU } from '@/Consts/Sidebar.const'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'

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

  return (
    <div className="menu-wrapper">
      <aside className="sidebar">
        <section className="tamer">
          <header>
            {!!profile.avatar && (
              <Portrait
                alt={`Tamer ${profile.name}`}
                src={`/avatars/${profile.avatar}.jpg`}
                size="sm"
              />
            )}

            {!profile.avatar && (
              <Portrait
                alt={`Tamer ${profile.name}`}
                placeholder={profile.name?.slice(0, 1)}
                size="sm"
              />
            )}

            <main>
              <Typography as="h2">{profile.name}</Typography>

              <Typography as="span">
                <>{getTexts('SIDEBAR_PLAYER_UNSPENT_POINTS')}</>
                <>{profile.points || 0}</>
              </Typography>

              <Typography as="span">
                <>{getTexts('SIDEBAR_PLAYER_CURRENCY')}</>
                <>{profile.currency || 0}</>
              </Typography>
            </main>
          </header>
        </section>

        <nav>
          <Typography as="h2">{getTexts('SIDEBAR_MENU_TITLE')}</Typography>

          {SIDEBAR_MENU.map((sidebarItem) => (
            <NavLink
              to={sidebarItem.path}
              key={`sidebar-menu-${sidebarItem.id}`}
            >
              {sidebarItem.icon}
              <Typography as="span">{sidebarItem.text}</Typography>
            </NavLink>
          ))}
        </nav>

        <nav>
          {SIDEBAR_BOTTOM_MENU.map((sidebarItem) => (
            <NavLink
              to={sidebarItem.path}
              key={`sidebar-menu-${sidebarItem.id}`}
            >
              {sidebarItem.icon}
              <Typography as="span">{sidebarItem.text}</Typography>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  )
}
