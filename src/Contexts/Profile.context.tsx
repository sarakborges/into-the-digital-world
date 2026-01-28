import React, { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router'

import type { ProfileType } from '@/Types/Profile.type'

import { ROUTES } from '@/Routes/Routes'

type ProfileContextType = {
  profile: ProfileType
  setProfile: React.Dispatch<React.SetStateAction<ProfileType>>
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [profile, setProfile] = useState<ProfileType>({
    cores: []
  })

  useEffect(() => {
    const localProfile = localStorage.getItem('profile')

    if (!localProfile) {
      navigate(ROUTES.CREATE_PROFILE.path)
      return
    }

    const localProfileParsed = JSON.parse(localProfile)

    if (
      !localProfileParsed?.name &&
      location.pathname !== ROUTES.CREATE_PROFILE.path
    ) {
      navigate(ROUTES.CREATE_PROFILE.path)
      return
    }

    if (
      !localProfileParsed?.partners?.length &&
      location.pathname !== ROUTES.STARTER_SELECTION.path
    ) {
      navigate(ROUTES.STARTER_SELECTION.path)
      return
    }

    setProfile(localProfileParsed)

    if (
      localProfileParsed?.name &&
      localProfileParsed?.partners?.length &&
      [ROUTES.STARTER_SELECTION.path, ROUTES.CREATE_PROFILE.path].includes(
        location.pathname
      )
    ) {
      navigate(ROUTES.HOME.path)
      return
    }
  }, [])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
