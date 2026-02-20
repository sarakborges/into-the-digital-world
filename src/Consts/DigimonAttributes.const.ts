import type { CoresType } from '@/Types/Cores.type'

export const DIGIMON_ATTRIBUTES: { [k: string]: CoresType } = {
  vaccine: {
    id: `vaccine`,
    type: `attribute`,
    name: `Vaccine`,
    abbreviation: `VA`,
    icon: `ATTRIBUTE_VA`
  },

  data: {
    id: `data`,
    type: `attribute`,
    name: `Data`,
    abbreviation: `DA`,
    icon: `ATTRIBUTE_DA`
  },

  virus: {
    id: `virus`,
    type: `attribute`,
    name: `Virus`,
    abbreviation: `VI`,
    icon: `ATTRIBUTE_VI`
  },

  noAttribute: {
    id: `noAttribute`,
    type: `attribute`,
    name: `No Attribute`,
    abbreviation: `NO`,
    icon: `ATTRIBUTE_NO`
  }
}
