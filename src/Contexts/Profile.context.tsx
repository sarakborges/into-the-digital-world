import React, { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router'

import type { ProfileType } from '@/Types/Profile.type'
import type { ProfileContextType } from '@/Types/Contexts/ProfileContext.type'

export const ProfileContext = createContext<ProfileContextType | null>(null)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [profile, setProfile] = useState<ProfileType | null>(null)

  useEffect(() => {
    const localProfile = localStorage.getItem('profile')

    // if (!localProfile) {
    // navigate(ROUTES.CREATE_PROFILE.path)
    // return
    // }

    const mockedProfile: ProfileType = {
      name: `Hope`,
      theme: `default`
    }

    setProfile(mockedProfile)

    if (!localProfile) {
      localStorage.setItem('profile', JSON.stringify(mockedProfile))
    }
  }, [])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <div className={`theme-${profile?.theme}`}>{children}</div>
    </ProfileContext.Provider>
  )
}
