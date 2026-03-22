import type { CoresType } from '@/Types/Cores.type'

export const DIGIMON_ATTRIBUTES: { [k: string]: CoresType } = {
  vaccine: {
    id: `vaccine`,
    name: `Vaccine`,
    abbreviation: `VA`,
    icon: `ATTRIBUTE_VA`
  },

  data: {
    id: `data`,
    name: `Data`,
    abbreviation: `DA`,
    icon: `ATTRIBUTE_DA`
  },

  virus: {
    id: `virus`,
    name: `Virus`,
    abbreviation: `VI`,
    icon: `ATTRIBUTE_VI`
  },

  noAttribute: {
    id: `noAttribute`,
    name: `No Attribute`,
    abbreviation: `NO`,
    icon: `ATTRIBUTE_NO`
  }
}
