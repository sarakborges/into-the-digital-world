import type { FamilyType } from '@/Types/Family.type'

export const DIGIMON_FAMILIES = {
  vb: {
    id: 'vb',
    name: `Virus Busters`
  },

  dr: {
    id: 'dr',
    name: `Dragon's Roar`
  },

  nsp: {
    id: 'nsp',
    name: `Nature Spirits`
  },

  ds: {
    id: 'ds',
    name: `Deep Savers`
  },

  wg: {
    id: 'wg',
    name: `Wind Guardians`
  },

  jt: {
    id: 'jt',
    name: `Jungle Troopers`
  },

  nso: {
    id: 'nso',
    name: `Nightmare Soldiers`
  },

  me: {
    id: 'me',
    name: `Metal Empire`
  },

  da: {
    id: 'da',
    name: `Dark Area`
  }
} satisfies FamilyType

export type DigimonFamilyId = keyof typeof DIGIMON_FAMILIES

export const isDigimonFamilyId = (
  familyId: string
): familyId is DigimonFamilyId => {
  return familyId in DIGIMON_FAMILIES
}
