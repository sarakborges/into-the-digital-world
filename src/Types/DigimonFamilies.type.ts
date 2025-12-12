export const DigimonFamilies = {
  dragonsRoar: {
    id: `dragonsRoar`,
    name: `Dragon's Roar`,
    abbreviation: `DR`
  },

  jungleTroopers: {
    id: `jungleTroopers`,
    name: `Jungle Troopers`,
    abbreviation: `JT`
  },

  virusBusters: {
    id: `virusBusters`,
    name: `Virus Busters`,
    abbreviation: `VB`
  },

  darkArea: {
    id: `darkArea`,
    name: `Dark Area`,
    abbreviation: `DA`
  },

  unknown: {
    id: `unknown`,
    name: `Unknown`,
    abbreviation: `UK`
  },

  metalEmpire: {
    id: `metalEmpire`,
    name: `Metal Empire`,
    abbreviation: `ME`
  },

  windGuardians: {
    id: `windGuardians`,
    name: `Wind Guardians`,
    abbreviation: `WG`
  },

  nightmareSoldiers: {
    id: `nightmareSoldiers`,
    name: `Nightmare Soliders`,
    abbreviation: `NSo`
  },

  deepSavers: {
    id: `deepSavers`,
    name: `Deep Savers`,
    abbreviation: `DS`
  },

  natureSpirits: {
    id: `natureSpirits`,
    name: `Nature Spirits`,
    abbreviation: `NSp`
  }
}

export type DigimonFamilies =
  (typeof DigimonFamilies)[keyof typeof DigimonFamilies]
