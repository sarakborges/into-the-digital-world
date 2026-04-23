import { useContext } from 'react'

import { SavedProfilesContext } from '@/Contexts/SavedProfiles.context'

export function useSavedProfiles() {
  const context = useContext(SavedProfilesContext)

  if (!context) {
    throw new Error(
      'useSavedProfiles must be used within SavedProfilesProvider'
    )
  }

  return context
}
