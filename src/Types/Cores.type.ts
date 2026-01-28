export type CoresType = {
  id: string
  name: string
  abbreviation: string
  type: 'attribute' | 'family'
  icon: string
}

export const DigimonAttributes: { [k: string]: CoresType } = {
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

export const DigimonFamilies: { [k: string]: CoresType } = {
  dragonsRoar: {
    id: `dragonsRoar`,
    type: `family`,
    name: `Dragon's Roar`,
    abbreviation: `DR`,
    icon: `FAMILY_DR`
  },

  jungleTroopers: {
    id: `jungleTroopers`,
    type: `family`,
    name: `Jungle Troopers`,
    abbreviation: `JT`,
    icon: `FAMILY_JT`
  },

  virusBusters: {
    id: `virusBusters`,
    type: `family`,
    name: `Virus Busters`,
    abbreviation: `VB`,
    icon: `FAMILY_VB`
  },

  darkArea: {
    id: `darkArea`,
    type: `family`,
    name: `Dark Area`,
    abbreviation: `DA`,
    icon: `FAMILY_DA`
  },

  metalEmpire: {
    id: `metalEmpire`,
    type: `family`,
    name: `Metal Empire`,
    abbreviation: `ME`,
    icon: `FAMILY_ME`
  },

  windGuardians: {
    id: `windGuardians`,
    type: `family`,
    name: `Wind Guardians`,
    abbreviation: `WG`,
    icon: `FAMILY_WG`
  },

  nightmareSoldiers: {
    id: `nightmareSoldiers`,
    type: `family`,
    name: `Nightmare Soliders`,
    abbreviation: `NSo`,
    icon: `FAMILY_NSO`
  },

  deepSavers: {
    id: `deepSavers`,
    type: `family`,
    name: `Deep Savers`,
    abbreviation: `DS`,
    icon: `FAMILY_DS`
  },

  natureSpirits: {
    id: `natureSpirits`,
    type: `family`,
    name: `Nature Spirits`,
    abbreviation: `NSp`,
    icon: `FAMILY_NSP`
  }
}

export const AllCores = { ...DigimonAttributes, ...DigimonFamilies }

export type DigimonAttributes =
  (typeof DigimonAttributes)[keyof typeof DigimonAttributes]

export type DigimonFamilies =
  (typeof DigimonFamilies)[keyof typeof DigimonFamilies]
