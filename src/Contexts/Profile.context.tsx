import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import { loadData } from '@/Helpers/loadData.helper'

import type { ProfileType } from '@/Types/Profile.type'
import type { ProfileContextType } from '@/Types/Contexts/ProfileContext.type'

export const ProfileContext = createContext<ProfileContextType | null>(null)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const localProfile = loadData({ key: 'profile' }) || null

  const [profile, setProfile] = useState<ProfileType | null>(localProfile)

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <div className={`theme-${profile?.theme || 'default'}`}>{children}</div>
    </ProfileContext.Provider>
  )
}
