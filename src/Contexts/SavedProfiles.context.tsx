import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { ProfileType } from '@/Types/Profile.type'

import type { SavedProfilesContextType } from '@/Types/Contexts/SavedProfilesContext.type'

import { loadData } from '@/Helpers/loadData.helper'

export const SavedProfilesContext =
  createContext<SavedProfilesContextType | null>(null)

export const SavedProfilesProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const profiles = loadData({ key: 'profiles' }) || null

  const [savedProfiles, setSavedProfiles] = useState<Array<ProfileType> | null>(
    profiles
      ?.map((profile) => loadData({ key: `profile${profile}` }))
      .filter((profile) => !!profile)
  )

  return (
    <SavedProfilesContext.Provider value={{ savedProfiles, setSavedProfiles }}>
      {children}
    </SavedProfilesContext.Provider>
  )
}
