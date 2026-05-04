import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { ProfileType } from '@/Types/Profile.type'

import type { SavedProfilesContextType } from '@/Types/Contexts/SavedProfilesContext.type'

export const SavedProfilesContext =
  createContext<SavedProfilesContextType | null>(null)

export const SavedProfilesProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [savedProfiles, setSavedProfiles] = useState<Array<ProfileType> | null>(
    null
  )

  return (
    <SavedProfilesContext.Provider value={{ savedProfiles, setSavedProfiles }}>
      {children}
    </SavedProfilesContext.Provider>
  )
}
