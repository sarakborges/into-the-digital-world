import { importLegacyLocalStorageSaves } from '@/Systems/Save/LegacySave.importer'
import { saveService } from '@/Systems/Save/Save.service'

import type { ProfileType } from '@/Types/Profile.type'

import { getSortedProfiles } from '@/Helpers/Systems/Profile/getSortedProfiles.helper'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const loadProfiles = async (): Promise<void> => {
  const { setSavedProfiles } = useSavedProfilesStore.getState()
  const profiles: ProfileType[] = []

  try {
    await importLegacyLocalStorageSaves()

    const slots = await saveService.list()

    for (const slot of slots) {
      try {
        const { save } = await saveService.load(slot.slotId)

        profiles.push(save.profile)
      } catch (error) {
        console.warn(`Error loading save slot ${slot.slotId}: ${error}`)
      }
    }

    setSavedProfiles(getSortedProfiles(profiles))
  } catch (error) {
    console.warn(`Error loading save profiles: ${error}`)
    setSavedProfiles([])
  }
}
