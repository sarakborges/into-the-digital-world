import type { AttributeType } from '@/Types/Attribute.type'

export const DIGIMON_ATTRIBUTES = {
  va: {
    id: 'va',
    name: `Vaccine`
  },

  da: {
    id: 'da',
    name: `Data`
  },

  vi: {
    id: 'vi',
    name: `Virus`
  },

  na: {
    id: 'na',
    name: `No attribute`
  }
} satisfies AttributeType
