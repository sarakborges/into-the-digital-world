import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { ProfileType } from '@/Types/Profile.type'
import type { ProfileContextType } from '@/Types/Contexts/ProfileContext.type'

import { loadSession } from '@/Helpers/loadSession.helper'

export const ProfileContext = createContext<ProfileContextType | null>(null)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileType | null>(
    loadSession({ key: 'profile' })
  )

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
